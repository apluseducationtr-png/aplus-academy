import type { Metadata } from "next";
import ProgramDetailPage from "@/components/ProgramDetailPage";

export const metadata: Metadata = {
  title: "LNAT, IMAT ve UCAT Hazırlık | A Plus Academy",
  description: "Hukuk ve tıp başvuruları için LNAT, IMAT ve UCAT hazırlık programları.",
};

export default function MedicineAndLawPage() {
  return (
    <ProgramDetailPage
      badge="Tıp & Hukuk Başvuruları"
      title="LNAT, IMAT ve UCAT için sınava özel düşünme ve çözüm stratejisi"
      intro="Hukuk ve tıp hedefleyen öğrenciler için LNAT, IMAT ve UCAT sınavlarının critical thinking, science, reasoning, reading, decision making ve essay alanları ayrı planlanır."
      metrics={[
        ["Alan", "Medicine / Law"],
        ["Sınavlar", "LNAT / IMAT / UCAT"],
        ["Destek", "Essay + science"],
        ["Format", "UK / Italy"],
      ]}
      focusTitle="Hazırlık odağı"
      focusText="Bu sınavlarda bilgi kadar hızlı düşünme, eleme stratejisi ve doğru cevap dili önemlidir."
      focusItems={[
        "Critical thinking, reasoning ve decision making",
        "Science konu tekrarı",
        "Reading ve çıkarım becerisi",
        "Essay planlama ve argüman",
      ]}
      pathway={[
        ["01", "Sınav seçimi", "Öğrencinin hedef ülke, bölüm ve ihtiyaç duyduğu sınav netleştirilir."],
        ["02", "Konu ve beceri haritası", "Science, reasoning, reading veya essay ağırlığına göre plan hazırlanır."],
        ["03", "Soru pratiği", "Sınav formatına uygun zamanlı soru çözümü yapılır."],
        ["04", "Deneme analizi", "Yanlışlar konu, hız ve strateji açısından değerlendirilir."],
      ]}
      faqs={[
        ["LNAT, IMAT ve UCAT aynı şekilde mi çalışılır?", "Hayır. LNAT critical thinking, reading ve essay; IMAT science ve problem çözme; UCAT ise hız, muhakeme ve decision making becerilerini öne çıkarır."],
        ["LNAT essay desteği var mı?", "Evet. Essay planı, argüman yapısı, örnek kullanımı ve akademik ifade üzerine çalışılır."],
        ["Program nasıl planlanır?", "Başlangıç seviyesi, hedef bölüm ve öğrencinin geliştirmesi gereken becerilere göre kişisel çalışma planı hazırlanır."],
      ]}
    />
  );
}
