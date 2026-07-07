import type { Metadata } from "next";
import ProgramDetailPage from "@/components/ProgramDetailPage";

export const metadata: Metadata = {
  title: "A-Level, IGCSE & GCSE Hazırlık | APlus Academy",
  description:
    "Cambridge, Edexcel ve AQA müfredatlarına yönelik A-Level, IGCSE ve GCSE okul destek ve sınav hazırlık programı.",
};

export default function ALevelAndIGCSEPage() {
  return (
    <ProgramDetailPage
      badge="A-Level, IGCSE & GCSE"
      title="Uluslararası müfredatlarda okul başarısını ve sınav performansını birlikte yükseltelim"
      intro="A-Level, IGCSE ve GCSE desteği; öğrencinin exam board'u, okul müfredatı, konu eksikleri, değerlendirme yapısı ve hedef notu dikkate alınarak planlanır."
      metrics={[
        ["Müfredat", "Cambridge / Edexcel / AQA"],
        ["Seviye", "A-Level / IGCSE / GCSE"],
        ["Dersler", "STEM + sosyal"],
        ["Takip", "Okul + sınav"],
      ]}
      focusTitle="Ders desteği"
      focusText="Her dersin soru dili, puanlama mantığı ve tekrar ihtiyacı farklıdır."
      focusItems={[
        "Math, Physics, Chemistry, Biology",
        "Economics ve Business",
        "Past paper çözümü",
        "Okul sınavı ve final dengesi",
      ]}
      pathway={[
        ["01", "Ders analizi", "Öğrencinin aldığı board, dersler ve hedef notlar belirlenir."],
        ["02", "Konu planı", "Eksikler ünite ünite çıkarılır ve haftalık program hazırlanır."],
        ["03", "Past paper pratiği", "Sınav tarzı sorularla cevap dili ve hız geliştirilir."],
        ["04", "Final hazırlığı", "Sınava yakın dönemde tekrar, deneme ve strateji yoğunlaşır."],
      ]}
      faqs={[
        ["Hangi exam board destekleniyor?", "Cambridge, Edexcel ve AQA müfredatlarına göre destek planlanabilir."],
        ["Okul sınavlarına destek olur mu?", "Evet. Program hem okul sınavı hem de final sınav performansını birlikte hedefler."],
        ["Past paper çözümü yapılıyor mu?", "Evet. Past paper analizi programın temel parçalarından biridir."],
      ]}
    />
  );
}
