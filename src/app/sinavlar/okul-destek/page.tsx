import type { Metadata } from "next";
import ProgramDetailPage from "@/components/ProgramDetailPage";

export const metadata: Metadata = {
  title: "Okul, GPA ve Üniversite Ders Desteği | APlus Academy",
  description:
    "Okul ve üniversite öğrencileri için ders takibi, sınav hazırlığı, GPA ve akademik destek programı.",
};

export default function SchoolSupportPage() {
  return (
    <ProgramDetailPage
      badge="Okul, GPA & Üniversite Desteği"
      title="Okul ve üniversite öğrencileri için düzenli ders takibi ve akademik destek"
      intro="Destek programı; öğrencinin ders yükünü, konu ihtiyaçlarını, sınav önceliklerini ve hedef GPA planını düzenli takip ederek sürdürülebilir bir çalışma sistemi kurar."
      metrics={[
        ["Odak", "GPA + sınav"],
        ["Dersler", "Okul + üniversite"],
        ["Takip", "Haftalık plan"],
        ["Format", "Online / yüz yüze"],
      ]}
      focusTitle="Akademik takip"
      focusText="Okul başarısı yalnızca sınav haftasında değil, dönem boyunca düzenli takip edildiğinde güçlenir."
      focusItems={[
        "Haftalık ders ve ödev takibi",
        "Quiz, vize, final ve sınav hazırlığı",
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
        ["Kimler destek alabilir?", "Uluslararası müfredat uygulayan lise öğrencileri ile ders bazlı desteğe ihtiyaç duyan üniversite öğrencileri için program planlanabilir."],
        ["Sadece sınav haftası destek alınabilir mi?", "Evet, fakat en iyi sonuç için dönem boyunca düzenli takip önerilir."],
        ["Veliye raporlama yapılıyor mu?", "Süreç, öğrencinin gelişimi ve bir sonraki hedefleri düzenli olarak aileyle paylaşılabilir."],
      ]}
    />
  );
}
