import type { Metadata } from "next";
import ProgramDetailPage from "@/components/ProgramDetailPage";

export const metadata: Metadata = {
  title: "IMAT ve LNAT Hazırlık | A Plus Academy",
  description: "Tıp ve hukuk başvuruları için IMAT ve LNAT hazırlık programları.",
};

export default function MedicineAndLawPage() {
  return (
    <ProgramDetailPage
      badge="Tıp & Hukuk Başvuruları"
      title="IMAT ve LNAT için analitik düşünme ve sınav stratejisi"
      intro="Tıp ve hukuk hedefleyen öğrenciler için science, reasoning, critical thinking, reading ve essay alanları sınav formatına uygun şekilde çalışılır."
      metrics={[
        ["Alan", "Medicine / Law"],
        ["Sınavlar", "IMAT / LNAT"],
        ["Destek", "Essay + science"],
        ["Format", "UK / Italy"],
      ]}
      focusTitle="Hazırlık odağı"
      focusText="Bu sınavlarda bilgi kadar hızlı düşünme, eleme stratejisi ve doğru cevap dili önemlidir."
      focusItems={[
        "Critical thinking ve reasoning",
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
        ["IMAT ve LNAT aynı şekilde mi çalışılır?", "Hayır. IMAT science bilgisi ve problem çözmeyi, LNAT ise critical thinking, reading ve essay becerilerini öne çıkarır."],
        ["LNAT essay desteği var mı?", "Evet. Essay planı, argüman yapısı, örnek kullanımı ve akademik ifade üzerine çalışılır."],
        ["Program nasıl planlanır?", "Başlangıç seviyesi, hedef bölüm ve öğrencinin geliştirmesi gereken becerilere göre kişisel çalışma planı hazırlanır."],
      ]}
    />
  );
}
