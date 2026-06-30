import type { Metadata } from "next";
import ProgramDetailPage from "@/components/ProgramDetailPage";

export const metadata: Metadata = {
  title: "Okul Destek Programı | APlus Academy",
  description:
    "Uluslararası okul öğrencileri için ders takibi, sınav hazırlığı ve GPA destek programı.",
};

export default function SchoolSupportPage() {
  return (
    <ProgramDetailPage
      badge="Okul Destek"
      title="Uluslararası okul öğrencileri için düzenli ders takibi ve akademik destek"
      intro="Okul destek programı; öğrencinin ders yükünü, sınav önceliklerini ve hedef GPA planını düzenli takip ederek sürdürülebilir bir çalışma sistemi kurar."
      metrics={[
        ["Odak", "GPA + sınav"],
        ["Dersler", "STEM + sosyal"],
        ["Takip", "Haftalık plan"],
        ["Format", "Online / yüz yüze"],
      ]}
      focusTitle="Akademik takip"
      focusText="Okul başarısı yalnızca sınav haftasında değil, dönem boyunca düzenli takip edildiğinde güçlenir."
      focusItems={[
        "Haftalık ders ve ödev takibi",
        "Quiz ve sınav hazırlığı",
        "GPA hedef planı",
        "Veli bilgilendirme",
      ]}
      pathway={[
        ["01", "Ders yükü analizi", "Öğrencinin dersleri, değerlendirme alanları ve yoğunlaştığı konular belirlenir."],
        ["02", "Haftalık plan", "Konu tekrarları, ödevler ve sınav hazırlığı birlikte planlanır."],
        ["03", "Ders desteği", "Zorlanılan konular birebir veya küçük grup dersleriyle desteklenir."],
        ["04", "Gelişim takibi", "Öğrenci ve veli düzenli olarak süreç hakkında bilgilendirilir."],
      ]}
      faqs={[
        ["Hangi okullara destek veriliyor?", "Uluslararası müfredat uygulayan lise öğrencileri için ders ve sınav desteği planlanabilir."],
        ["Sadece sınav haftası destek alınabilir mi?", "Evet, fakat en iyi sonuç için dönem boyunca düzenli takip önerilir."],
        ["Veliye raporlama yapılıyor mu?", "Süreç, öğrencinin gelişimi ve bir sonraki hedefleri düzenli olarak aileyle paylaşılabilir."],
      ]}
    />
  );
}
