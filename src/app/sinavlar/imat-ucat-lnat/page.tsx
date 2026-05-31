import type { Metadata } from "next";
import ProgramDetailPage from "@/components/ProgramDetailPage";

export const metadata: Metadata = {
  title: "IMAT, UCAT, LNAT Hazırlık | APlus Academy",
  description:
    "Tıp ve hukuk başvuruları için IMAT, UCAT ve LNAT hazırlık programları.",
};

export default function MedicineAndLawPage() {
  return (
    <ProgramDetailPage
      badge="Tıp & Hukuk Başvuruları"
      title="IMAT, UCAT ve LNAT için analitik düşünme ve sınav stratejisi"
      intro="Tıp ve hukuk hedefleyen öğrenciler için reasoning, reading, essay ve science alanları sınav formatına uygun şekilde çalışılır."
      metrics={[
        ["Alan", "Medicine / Law"],
        ["Odak", "Reasoning"],
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
        ["01", "Sınav seçimi", "Öğrencinin hedef ülke, bölüm ve sınav takvimi netleştirilir."],
        ["02", "Konu ve beceri haritası", "Science, reasoning, reading veya essay ağırlığına göre plan hazırlanır."],
        ["03", "Soru pratiği", "Sınav formatına uygun zamanlı soru çözümü yapılır."],
        ["04", "Deneme analizi", "Yanlışlar konu, hız ve strateji açısından değerlendirilir."],
      ]}
      faqs={[
        ["IMAT ve UCAT aynı şekilde mi çalışılır?", "Hayır. IMAT daha fazla science bilgisi içerirken UCAT hız, reasoning ve karar verme becerilerini öne çıkarır."],
        ["LNAT essay desteği var mı?", "Evet. Essay planı, argüman yapısı, örnek kullanımı ve akademik ifade üzerine çalışılır."],
        ["Program ne zaman başlamalı?", "Sınav tarihine göre değişir; özellikle UCAT ve LNAT için düzenli pratik erken başlamak açısından avantaj sağlar."],
      ]}
    />
  );
}
