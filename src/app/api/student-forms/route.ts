import { buildFormPayload, formResponsePage, forwardFormPayload } from "@/lib/formWebhook";

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = buildFormPayload(formData, "student_form");
  const result = await forwardFormPayload(payload);

  return formResponsePage(
    result,
    "Kayıt formunuz alındı",
    "Bilgileriniz ilgili A Plus kayıt listesine aktarıldı. Ekip, ders planlama sürecinde sizinle iletişimde kalacak.",
  );
}
