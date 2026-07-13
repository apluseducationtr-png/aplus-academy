import { buildFormPayload, formResponsePage, forwardFormPayload } from "@/lib/formWebhook";

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = buildFormPayload(formData, "access_request");
  const result = await forwardFormPayload(payload);

  return formResponsePage(
    result,
    "Form erişim talebiniz alındı",
    "A Plus ekibi talebinizi inceleyip uygun kayıt formu linkini sizinle paylaşacak.",
  );
}
