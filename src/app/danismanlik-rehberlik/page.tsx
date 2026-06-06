import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CardGrid, CtaBand, FaqSection, PageHero, PlaceholderSection, ProcessSection, SectionHeading } from "@/components/MarketingSections";

export const metadata: Metadata = {
  title: "Akademik Danışmanlık ve Rehberlik | A Plus Academy",
  description: "Sınav, okul ve üniversite hedefleri için kişisel akademik planlama.",
};

export default function GuidancePage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Akademik danışmanlık"
        title="Sınav, okul ve üniversite hedeflerini aynı takvimde yönetin"
        intro="Danışmanlık sayfası, hizmetin sınırlarını ve öğrenciye sunulan somut çıktıları açıkça gösterecek şekilde yeniden yapılandırıldı."
        secondary={{ label: "Sınav programlarını incele", href: "/exams" }}
        panelItems={[
          "Akademik profil ve ihtiyaç analizi",
          "Sınav ve ders takvimi oluşturma",
          "Ülke, bölüm ve üniversite hedefini netleştirme",
          "Düzenli görüşme, takip ve plan güncelleme",
        ]}
      />
      <section className="section">
        <div className="site-container">
          <SectionHeading eyebrow="Hizmet kapsamı" title="Danışmanlık hangi ihtiyacı çözüyor?" text="İçerik aşamasında her başlığın teslimatları, görüşme sıklığı ve kapsam sınırları ayrıntılandırılacak." />
          <CardGrid columns={4} items={[
            { title: "Akademik yol haritası", text: "Dersler, notlar, sınavlar ve hedefler üzerinden uzun dönemli plan." },
            { title: "Sınav planlama", text: "Hangi sınava ne zaman girileceği ve hazırlık temposunun belirlenmesi." },
            { title: "Üniversite hedefi", text: "Ülke, bölüm ve üniversite seçeneklerinin öğrenci profiline göre incelenmesi." },
            { title: "Düzenli takip", text: "Planın öğrenci performansı ve değişen takvime göre güncellenmesi." },
          ]} />
        </div>
      </section>
      <ProcessSection
        title="Danışmanlık görüşmeden ibaret değil, takip edilen bir çalışma sistemi"
        text="Bu akış daha sonra paketlere ve danışmanlık seviyelerine göre çeşitlendirilebilir."
        steps={[
          { title: "Profil analizi", text: "Akademik geçmiş, hedefler, güçlü alanlar ve ihtiyaçlar değerlendirilir." },
          { title: "Strateji ve takvim", text: "Sınav, ders ve başvuru adımları ortak takvime yerleştirilir." },
          { title: "Uygulama desteği", text: "Öğrenci belirlenen görevler ve görüşmelerle süreci yürütür." },
          { title: "Aylık değerlendirme", text: "İlerleme gözden geçirilir ve sonraki dönem planı güncellenir." },
        ]}
      />
      <PlaceholderSection eyebrow="Danışmanlık çıktıları" title="Hizmeti somutlaştıracak örnekler" text="Bu alan daha sonra anonimleştirilmiş gerçek doküman ve süreç örnekleriyle doldurulacak." items={["Örnek yıllık akademik takvim", "Örnek öğrenci yol haritası", "Ülke ve üniversite karşılaştırması", "Aylık gelişim özeti"]} />
      <FaqSection items={[
        { question: "Danışmanlık ile özel ders aynı hizmet mi?", answer: "Hayır. Danışmanlık planlama ve takip sürecidir; özel ders ihtiyaç duyulan akademik alanlarda ayrıca yürütülür." },
        { question: "Üniversite başvurusunun hangi aşamaları kapsanıyor?", answer: "Kesin kapsam, içerik aşamasında mevcut hizmet modelinize göre açıkça listelenecek." },
        { question: "Veli görüşmeleri yapılıyor mu?", answer: "Programın yapısına göre düzenli öğrenci ve veli değerlendirmeleri planlanabilir." },
      ]} />
      <CtaBand title="Öğrencinin akademik planını birlikte netleştirelim" text="İlk görüşmede mevcut durumu, hedefi ve öncelikli karar noktalarını değerlendirelim." />
      <Footer />
    </main>
  );
}
