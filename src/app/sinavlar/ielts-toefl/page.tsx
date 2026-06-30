import type { Metadata } from "next";
import ProgramDetailPage from "@/components/ProgramDetailPage";

export const metadata: Metadata = {
  title: "IELTS & TOEFL Hazırlık | APlus Academy",
  description:
    "IELTS ve TOEFL için hedef skor odaklı speaking, writing, reading ve listening hazırlık programı.",
};

export default function IELTSAndTOEFLPage() {
  return (
    <ProgramDetailPage
      badge="IELTS & TOEFL Hazırlık"
      title="İngilizce yeterlilik sınavlarında hedef skora götüren beceri odaklı hazırlık"
      intro="IELTS ve TOEFL programı; writing, speaking, reading ve listening becerilerini ayrı ayrı ölçer, öğrencinin hedef skoruna göre düzenli çalışma planı oluşturur."
      metrics={[
        ["Hedef", "IELTS 7.5+ / TOEFL 100+"],
        ["Beceri", "4 alan"],
        ["Takip", "Writing feedback"],
        ["Format", "Akademik İngilizce"],
      ]}
      focusTitle="Beceri alanları"
      focusText="Dil bilgisi tek başına yetmez; sınav formatına uygun cevap üretmek gerekir."
      focusItems={[
        "Speaking pratiği ve akıcılık",
        "Writing Task / essay geri bildirimi",
        "Reading hız ve strateji",
        "Listening not alma ve odaklanma",
      ]}
      pathway={[
        ["01", "Seviye analizi", "Öğrencinin mevcut dil seviyesi ve hedef skoru belirlenir."],
        ["02", "Beceri planı", "Writing, speaking, reading ve listening için ayrı çalışma temposu oluşturulur."],
        ["03", "Deneme ve feedback", "Düzenli denemeler ve yazılı/sözlü geri bildirimle gelişim takip edilir."],
        ["04", "Sınav provası", "Süre yönetimi ve sınav günü stratejisi oturtulur."],
      ]}
      faqs={[
        ["IELTS mi TOEFL mı seçmeliyim?", "Hedef üniversite, ülke ve başvuru koşullarına göre birlikte karar verilebilir."],
        ["Writing geri bildirimi veriliyor mu?", "Evet. Essay yapısı, kelime seçimi, gramer ve task response ayrı ayrı değerlendirilir."],
        ["Speaking dersleri birebir mi?", "Speaking çalışmaları genellikle birebir yürütülür; öğrencinin akıcılığı ve cevap kalitesi geliştirilir."],
      ]}
    />
  );
}
