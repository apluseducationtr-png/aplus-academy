/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * A Plus Academy form webhook.
 *
 * Deploy this file as a Google Apps Script Web App:
 * - Execute as: Me
 * - Who has access: Anyone
 *
 * Then copy the Web App URL into Vercel as:
 * APLUS_FORMS_WEBHOOK_URL
 *
 * Optional security:
 * Add the same random value to Apps Script Project Settings > Script properties
 * and Vercel environment variables as:
 * APLUS_FORMS_WEBHOOK_SECRET
 */

const SPREADSHEET_ID = "1J-y0dnryvdt8dFNTyO4lxWqUNt6uMaZkaq2il4xoLIE";
const ACCESS_TAB = "Form Talepleri";

const STUDENT_FORM_TABS = {
  general: "Genel Ogrenci Bilgi",
  ap: "AP Kayit",
  ib: "IB Kayit",
  sat: "SAT Kayit",
};

const TOKEN_PREFIXES = {
  general: "GENEL",
  ap: "AP",
  ib: "IB",
  sat: "SAT",
};

const DEFAULT_SOURCE_PATHS = {
  general: "/formlar/ogrenci-bilgi-formu",
  ap: "/programlar/ap",
  ib: "/programlar/ib-diploma",
  sat: "/programlar/digital-sat-act",
};

function doPost(e) {
  try {
    const payload = JSON.parse((e.postData && e.postData.contents) || "{}");
    verifySecret_(payload);

    if (payload.submission_type === "access_request") {
      return json_(handleAccessRequest_(payload));
    }

    if (payload.submission_type === "student_form") {
      return json_(handleStudentForm_(payload));
    }

    return json_({ ok: false, error: "Unknown submission_type" });
  } catch (error) {
    return json_({ ok: false, error: String(error && error.message ? error.message : error) });
  }
}

function verifySecret_(payload) {
  const expected = PropertiesService.getScriptProperties().getProperty("APLUS_FORMS_WEBHOOK_SECRET");

  if (!expected) return;

  if (payload.secret !== expected) {
    throw new Error("Invalid webhook secret");
  }
}

function getBaseUrl_() {
  const baseUrl = PropertiesService.getScriptProperties().getProperty("APLUS_SITE_BASE_URL");

  if (!baseUrl) {
    throw new Error("Missing APLUS_SITE_BASE_URL script property");
  }

  return baseUrl;
}

function handleAccessRequest_(payload) {
  const fields = payload.fields || {};
  const formId = normalizeText_(fields.requested_form || "general");
  const token = createToken_(formId);
  const sourcePath = normalizeText_(fields.source_path || DEFAULT_SOURCE_PATHS[formId] || DEFAULT_SOURCE_PATHS.general);
  const copyLink = buildCopyLink_(sourcePath, token);

  appendByHeaders_(ACCESS_TAB, {
    request_id: createId_("REQ"),
    created_at: payload.created_at || new Date().toISOString(),
    requested_form: formId,
    requested_program: fields.requested_program || "",
    student_full_name: fields.student_full_name || "",
    parent_full_name: fields.parent_full_name || "",
    parent_phone: fields.parent_phone || "",
    parent_email: fields.parent_email || "",
    previous_contact_status: fields.previous_contact_status || "",
    preferred_contact_channel: fields.preferred_contact_channel || "",
    request_note: fields.request_note || "",
    source_path: sourcePath,
    utm_source: fields.utm_source || "",
    utm_campaign: fields.utm_campaign || "",
    access_status: "Hazir",
    access_token: token,
    copy_link: copyLink,
    access_sent_at: "",
    internal_owner: "",
    internal_notes: "",
  });

  return { ok: true, request_id: createId_("ACK"), access_token: token, copy_link: copyLink };
}

function handleStudentForm_(payload) {
  const fields = payload.fields || {};
  const formId = normalizeText_(fields.form_id || "general");
  const tabName = STUDENT_FORM_TABS[formId];

  if (!tabName) {
    throw new Error("Unsupported form_id: " + formId);
  }

  appendByHeaders_(tabName, {
    ...fields,
    submission_id: createId_("SUB"),
    created_at: payload.created_at || new Date().toISOString(),
    form_id: formId,
  });

  return { ok: true, form_id: formId };
}

function appendByHeaders_(sheetName, valuesByHeader) {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    throw new Error("Sheet not found: " + sheetName);
  }

  const lastColumn = sheet.getLastColumn();
  const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0].map(normalizeText_);
  const row = headers.map((header) => normalizeValue_(valuesByHeader[header]));
  sheet.appendRow(row);
}

function createToken_(formId) {
  const prefix = TOKEN_PREFIXES[formId] || "FORM";
  const random = Utilities.getUuid().split("-")[0].toUpperCase();
  return prefix + "-" + random;
}

function createId_(prefix) {
  const timestamp = Utilities.formatDate(new Date(), "GMT", "yyyyMMddHHmmss");
  const random = Utilities.getUuid().split("-")[0].toUpperCase();
  return prefix + "-" + timestamp + "-" + random;
}

function buildCopyLink_(sourcePath, token) {
  const base = getBaseUrl_().replace(/\/$/, "");
  const hash = sourcePath.indexOf("/programlar/") === 0 ? "#kayit-formu" : "";
  return base + sourcePath + "?formToken=" + encodeURIComponent(token) + hash;
}

function normalizeValue_(value) {
  if (Array.isArray(value)) return value.join(", ");
  if (value === null || value === undefined) return "";
  return String(value);
}

function normalizeText_(value) {
  return normalizeValue_(value).trim();
}

function json_(body) {
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
