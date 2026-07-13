import Link from "next/link";
import { ClipboardCheck, LockKeyhole, Send } from "lucide-react";
import StudentFormRenderer from "@/components/StudentFormRenderer";
import { hasFormAccess, type StudentFormDefinition } from "@/data/studentForms";

type StudentFormGateProps = {
  form: StudentFormDefinition;
  formToken: string;
  formsEnabled: boolean;
  sourcePath: string;
};

export default function StudentFormGate({ form, formToken, formsEnabled, sourcePath }: StudentFormGateProps) {
  const canOpenForm = hasFormAccess(form, formToken);

  return (
    <section className="section form-gate-section" id="kayit-formu">
      <div className="site-container">
        {canOpenForm ? (
          <div className="form-open-panel">
            <div className="form-open-note">
              <ClipboardCheck aria-hidden="true" />
              <div>
                <span className="eyebrow">Form erişimi açık</span>
                <h2>{form.title}</h2>
                <p>
                  Size gönderilen erişim linki doğrulandı. Formu veli veya öğrenci bilgileriyle doldurabilirsiniz.
                </p>
              </div>
            </div>
            <StudentFormRenderer form={form} formToken={formToken} formsEnabled={formsEnabled} sourcePath={sourcePath} />
          </div>
        ) : (
          <div className="form-locked-panel">
            <div className="form-locked-copy">
              <LockKeyhole aria-hidden="true" />
              <span className="eyebrow">Kontrollü kayıt formu</span>
              <h2>{form.programLabel} kayıt formunu talep et</h2>
              <p>
                Bu form, A Plus Academy ile görüşmesi yapılmış veya kayıt süreci başlatılmış öğrenciler için açılır.
                Daha önce görüştüyseniz form erişimi isteyebilirsiniz.
              </p>
            </div>

            <form className="access-request-form" method="post" action="/api/form-access-request">
              <input type="hidden" name="requested_form" value={form.id} />
              <input type="hidden" name="requested_program" value={form.programLabel} />
              <input type="hidden" name="source_path" value={sourcePath} />

              <label>
                <span>Öğrenci adı soyadı *</span>
                <input name="student_full_name" required type="text" />
              </label>
              <label>
                <span>Veli adı soyadı *</span>
                <input name="parent_full_name" required type="text" />
              </label>
              <label>
                <span>Veli telefon numarası *</span>
                <input name="parent_phone" required type="tel" />
              </label>
              <label>
                <span>Veli e-posta adresi *</span>
                <input name="parent_email" required type="email" />
              </label>
              <label>
                <span>A Plus ekibiyle daha önce görüşme yapıldı mı? *</span>
                <select name="previous_contact_status" required defaultValue="">
                  <option value="" disabled>Seçiniz</option>
                  <option>Evet</option>
                  <option>Hayır</option>
                  <option>Emin değilim</option>
                </select>
              </label>
              <label>
                <span>Tercih edilen iletişim kanalı *</span>
                <select name="preferred_contact_channel" required defaultValue="">
                  <option value="" disabled>Seçiniz</option>
                  <option>WhatsApp</option>
                  <option>Telefon</option>
                  <option>E-posta</option>
                </select>
              </label>
              <label className="access-request-full">
                <span>Notunuz</span>
                <textarea name="request_note" rows={4} />
              </label>
              <label className="access-request-consent access-request-full">
                <input name="consent_confirmed" required type="checkbox" value="accepted" />
                <span>Form erişim talebim için A Plus Academy&apos;nin benimle iletişime geçmesini kabul ediyorum.</span>
              </label>
              <div className="access-request-submit access-request-full">
                {formsEnabled ? (
                  <button className="button button-primary" type="submit">
                    Form erişimi iste <Send aria-hidden="true" size={16} />
                  </button>
                ) : (
                  <button className="button button-primary" disabled type="submit">
                    Form erişimi iste <Send aria-hidden="true" size={16} />
                  </button>
                )}
                <Link className="button button-secondary" href="/contact">Önce görüşme planla</Link>
              </div>
              {!formsEnabled && (
                <p className="form-disabled-note access-request-full">
                  Form erişimi A Plus ekibi tarafından paylaşılır. Bu süreçte görüşme planlayabilir veya bizimle
                  iletişime geçebilirsiniz.
                </p>
              )}
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
