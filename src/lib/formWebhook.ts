type ForwardResult = {
  ok: boolean;
  status: number;
  message: string;
};

export type FormPayload = {
  submission_type: "access_request" | "student_form";
  created_at: string;
  fields: Record<string, string | string[]>;
};

function formDataToFields(formData: FormData): Record<string, string | string[]> {
  const fields: Record<string, string | string[]> = {};

  formData.forEach((value, key) => {
    const textValue = String(value);
    const existing = fields[key];

    if (Array.isArray(existing)) {
      existing.push(textValue);
      return;
    }

    if (existing) {
      fields[key] = [existing, textValue];
      return;
    }

    fields[key] = textValue;
  });

  return fields;
}

export function buildFormPayload(formData: FormData, submissionType: FormPayload["submission_type"]): FormPayload {
  return {
    submission_type: submissionType,
    created_at: new Date().toISOString(),
    fields: formDataToFields(formData),
  };
}

export async function forwardFormPayload(payload: FormPayload): Promise<ForwardResult> {
  const webhookUrl = process.env.APLUS_FORMS_WEBHOOK_URL;

  if (!webhookUrl) {
    return {
      ok: false,
      status: 503,
      message: "Google Sheets bağlantısı henüz aktif değil. Lütfen APLUS_FORMS_WEBHOOK_URL ortam değişkenini ekleyin.",
    };
  }

  try {
    const outgoingPayload = {
      ...payload,
      secret: process.env.APLUS_FORMS_WEBHOOK_SECRET || undefined,
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(outgoingPayload),
    });

    if (!response.ok) {
      return {
        ok: false,
        status: response.status,
        message: "Google Sheets bağlantısı yanıt verdi ancak kaydı kabul etmedi.",
      };
    }

    return {
      ok: true,
      status: 200,
      message: "Form başarıyla alındı.",
    };
  } catch {
    return {
      ok: false,
      status: 502,
      message: "Google Sheets bağlantısına ulaşılamadı.",
    };
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function formResponsePage(result: ForwardResult, successTitle: string, successMessage: string) {
  const title = result.ok ? successTitle : "Form gönderimi tamamlanamadı";
  const message = result.ok ? successMessage : result.message;
  const status = result.ok ? 200 : result.status;

  return new Response(
    `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)} | A Plus Academy</title>
    <style>
      body { margin: 0; font-family: Arial, sans-serif; color: #0B1238; background: #F7FBFF; }
      main { min-height: 100vh; display: grid; place-items: center; padding: 32px; }
      section { max-width: 720px; padding: 36px; border: 1px solid #DDEAF4; border-radius: 28px; background: white; box-shadow: 0 24px 70px rgba(73,151,230,.12); }
      h1 { margin: 0; font-size: clamp(32px, 5vw, 52px); line-height: 1.05; }
      p { margin: 18px 0 0; color: #45546D; font-size: 17px; line-height: 1.7; }
      a { display: inline-flex; margin-top: 28px; padding: 12px 20px; border-radius: 999px; background: #2F6FC2; color: white; font-weight: 800; text-decoration: none; }
    </style>
  </head>
  <body>
    <main>
      <section>
        <h1>${escapeHtml(title)}</h1>
        <p>${escapeHtml(message)}</p>
        <a href="/contact">A Plus ile iletişime geç</a>
      </section>
    </main>
  </body>
</html>`,
    {
      status,
      headers: { "content-type": "text/html; charset=utf-8" },
    },
  );
}
