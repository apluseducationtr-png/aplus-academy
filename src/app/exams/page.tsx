import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CardGrid, CtaBand, PageHero, SectionHeading } from "@/components/MarketingSections";
import { programCatalog } from "@/data/programCatalog";

export const metadata: Metadata = {
  title: "Sınav ve Akademik Programlar | A Plus Academy",
  description: "A Plus Academy uluslararası sınav hazırlık ve okul destek programları.",
};

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
          "Düzenli geri bildirim ve gelişim takibi",
        ]}
      />
      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Tüm programlar"
            title="Önce doğru program grubunu seçin"
            text="Her detay sayfası programın kapsamını, çalışma biçimini, takip yaklaşımını ve öğrenciden beklenenleri açıkça sunar."
          />
          <CardGrid items={programCatalog} columns={3} />
        </div>
      </section>
      <CtaBand title="Hangi programın uygun olduğundan emin değil misiniz?" text="Hedef ülke, bölüm, mevcut seviye ve akademik ihtiyaca göre başlangıç yolunu birlikte belirleyelim." />
      <Footer />
    </main>
  );
}
