import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CardGrid, CtaBand, PageHero, SectionHeading } from "@/components/MarketingSections";

export const metadata: Metadata = {
  title: "Sınav ve Akademik Programlar | A Plus Academy",
  description: "A Plus Academy uluslararası sınav hazırlık ve okul destek programları.",
};

const groups = [
  { eyebrow: "ABD başvuruları", title: "Digital SAT & ACT", text: "Math, Reading & Writing, adaptif sınav stratejisi ve düzenli tam deneme programı.", href: "/sinavlar/digital-sat", tags: ["SAT", "ACT"] },
  { eyebrow: "Lise programları", title: "AP Programları", text: "Ders bazlı okul desteği ile MCQ, FRQ ve final sınavı hazırlığı.", href: "/sinavlar/ap", tags: ["STEM", "Economics", "English"] },
  { eyebrow: "Diploma programı", title: "IB Diploma", text: "HL/SL dersleri, IA, EE, TOK ve predicted grade sürecine akademik destek.", href: "/sinavlar/ib", tags: ["HL / SL", "IA / EE"] },
  { eyebrow: "Uluslararası müfredat", title: "A-Level & IGCSE", text: "Cambridge, Edexcel ve AQA müfredatlarında ders ve sınav desteği.", href: "/sinavlar/a-level-igcse", tags: ["Past papers", "Exam board"] },
  { eyebrow: "Dil yeterliliği", title: "IELTS, TOEFL & PTE", text: "Dört beceri alanında seviye ve hedef skora göre hazırlık.", href: "/sinavlar/ielts-toefl", tags: ["Writing", "Speaking"] },
  { eyebrow: "Tıp ve hukuk", title: "IMAT, UCAT & LNAT", text: "Science, reasoning, reading ve essay bileşenlerinde sınava özel program.", href: "/sinavlar/imat-ucat-lnat", tags: ["Medicine", "Law"] },
  { eyebrow: "Okul başarısı", title: "Okul & GPA Desteği", text: "Uluslararası okul öğrencileri için haftalık ders, sınav ve ödev takibi.", href: "/sinavlar/okul-destek", tags: ["GPA", "School support"] },
  { eyebrow: "Lisansüstü", title: "GMAT & GRE", text: "Bu programlar için ayrı detay sayfaları ve paket yapısı içerik aşamasında hazırlanacak.", tags: ["Yakında"] },
];

export default function ExamsPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Program kataloğu"
        title="Hedefe, müfredata ve sınav formatına göre ayrılmış programlar"
        intro="Öğrenci hangi sınava veya akademik sisteme hazırlanıyorsa kapsam, eğitmen ve çalışma temposu o programın gerekliliklerine göre belirlenir."
        secondary={{ label: "Danışmanlık modelini incele", href: "/danismanlik-rehberlik" }}
        panelItems={[
          "Her program için ayrı kapsam ve konu haritası",
          "Birebir ve uygun programlarda küçük grup seçeneği",
          "Ders, materyal, ödev ve deneme bileşenleri",
          "Program süresi ve paket detayları için ayrılmış alanlar",
        ]}
      />
      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Tüm programlar"
            title="Önce doğru program grubunu seçin"
            text="Detay sayfaları, öğrencinin ve velinin karar vermek için ihtiyaç duyduğu bilgileri aynı sırada sunacak."
          />
          <CardGrid items={groups} columns={3} />
        </div>
      </section>
      <CtaBand title="Hangi programın uygun olduğundan emin değil misiniz?" text="Hedef ülke, bölüm, sınav tarihi ve mevcut seviyeye göre başlangıç yolunu birlikte belirleyelim." />
      <Footer />
    </main>
  );
}
