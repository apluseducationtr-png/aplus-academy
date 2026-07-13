import type { FormField, StudentFormDefinition } from "@/data/studentForms";

type StudentFormRendererProps = {
  form: StudentFormDefinition;
  formToken: string;
  formsEnabled: boolean;
  sourcePath: string;
};

function fieldId(formId: string, fieldName: string, option?: string) {
  return [formId, fieldName, option?.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase()].filter(Boolean).join("-");
}

function FormFieldControl({ field, formId }: { field: FormField; formId: string }) {
  const id = fieldId(formId, field.name);

  if (field.type === "textarea") {
    return (
      <label className="student-form-field" htmlFor={id}>
        <span>{field.label}{field.required ? " *" : ""}</span>
        <textarea id={id} name={field.name} placeholder={field.placeholder} required={field.required} rows={4} />
        {field.help && <small>{field.help}</small>}
      </label>
    );
  }

  if (field.type === "select") {
    return (
      <label className="student-form-field" htmlFor={id}>
        <span>{field.label}{field.required ? " *" : ""}</span>
        <select id={id} name={field.name} required={field.required} defaultValue="">
          <option value="" disabled>Seçiniz</option>
          {field.options?.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
        {field.help && <small>{field.help}</small>}
      </label>
    );
  }

  if (field.type === "radio" || field.type === "checkboxes") {
    return (
      <fieldset className="student-form-field student-form-choice-group">
        <legend>{field.label}{field.required ? " *" : ""}</legend>
        <div className="student-form-options">
          {field.options?.map((option, index) => (
            <label key={option} htmlFor={fieldId(formId, field.name, option)}>
              <input
                id={fieldId(formId, field.name, option)}
                name={field.name}
                type={field.type === "radio" ? "radio" : "checkbox"}
                value={option}
                required={field.type === "radio" && field.required && index === 0}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        {field.help && <small>{field.help}</small>}
      </fieldset>
    );
  }

  return (
    <label className="student-form-field" htmlFor={id}>
      <span>{field.label}{field.required ? " *" : ""}</span>
      <input id={id} name={field.name} placeholder={field.placeholder} required={field.required} type={field.type} />
      {field.help && <small>{field.help}</small>}
    </label>
  );
}

export default function StudentFormRenderer({ form, formToken, formsEnabled, sourcePath }: StudentFormRendererProps) {
  return (
    <form className="student-form" method="post" action="/api/student-forms">
      <input type="hidden" name="form_id" value={form.id} />
      <input type="hidden" name="form_title" value={form.title} />
      <input type="hidden" name="form_token" value={formToken} />
      <input type="hidden" name="source_path" value={sourcePath} />

      <div className="student-form-header">
        <span className="eyebrow">{form.eyebrow}</span>
        <h2>{form.title}</h2>
        <p>{form.summary}</p>
      </div>

      {form.sections.map((section, index) => (
        <section className="student-form-section" key={section.title}>
          <div className="student-form-section-heading">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{section.title}</h3>
              {section.description && <p>{section.description}</p>}
            </div>
          </div>
          <div className="student-form-grid">
            {section.fields.map((field) => <FormFieldControl field={field} formId={form.id} key={field.name} />)}
          </div>
        </section>
      ))}

      <label className="student-form-consent">
        <input name="consent_confirmed" required type="checkbox" value="accepted" />
        <span>
          Paylaştığım bilgilerin A Plus Academy tarafından eğitim planlaması, iletişim ve kayıt süreci amacıyla
          işlenmesini kabul ediyorum. Öğrenci 18 yaşından küçükse bu form veli/vasisi bilgisi ve onayı ile doldurulmuştur.
        </span>
      </label>

      <div className="student-form-submit-row">
        <button className="button button-primary" disabled={!formsEnabled} type="submit">Formu gönder</button>
        <p>
          {formsEnabled
            ? "Gönderim sonrası bilgiler ilgili kayıt listesine aktarılır ve A Plus ekibi tarafından takip edilir."
            : "Google Sheets bağlantısı aktifleştiğinde bu form gönderime açılacak. Şimdilik form yapısı kontrol amaçlı gösterilir."}
        </p>
      </div>
    </form>
  );
}
