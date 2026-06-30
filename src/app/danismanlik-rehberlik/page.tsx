import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CardGrid, CtaBand, FaqSection, FeaturePanelSection, PageHero, ProcessSection, SectionHeading } from "@/components/MarketingSections";

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
        title="Sınav, okul ve üniversite hedeflerini aynı akademik planda yönetin"
        intro="Öğrencinin akademik profili, sınav ihtiyaçları ve üniversite hedefleri birlikte değerlendirilerek karar noktaları netleştirilir."
        secondary={{ label: "Sınav programlarını incele", href: "/exams" }}
        panelItems={[
          "Akademik profil ve ihtiyaç analizi",
          "Sınav ve ders önceliklerini belirleme",
          "Ülke, bölüm ve üniversite hedefini netleştirme",
          "Düzenli görüşme, takip ve plan güncelleme",
        ]}
      />
      <section className="section">
        <div className="site-container">
          <SectionHeading eyebrow="Hizmet kapsamı" title="Danışmanlık hangi ihtiyacı çözüyor?" text="Amaç, öğrencinin karşısındaki seçenekleri sadeleştirmek ve akademik kararları uygulanabilir bir plana dönüştürmektir." />
          <CardGrid columns={4} items={[
            { title: "Akademik yol haritası", text: "Dersler, notlar, sınavlar ve hedefler üzerinden uzun dönemli plan." },
            { title: "Sınav planlama", text: "Hangi sınavların öncelikli olduğunun ve hazırlık sırasının belirlenmesi." },
            { title: "Üniversite hedefi", text: "Ülke, bölüm ve üniversite seçeneklerinin öğrenci profiline göre incelenmesi." },
            { title: "Düzenli takip", text: "Planın öğrenci performansı ve değişen ihtiyaçlara göre güncellenmesi." },
          ]} />
        </div>
      </section>
      <ProcessSection
        title="Danışmanlık görüşmeden ibaret değil, takip edilen bir çalışma sistemi"
        text="Her adım öğrencinin akademik profiline göre şekillenir ve ilerleme verileriyle yeniden değerlendirilir."
        steps={[
          { title: "Profil analizi", text: "Akademik geçmiş, hedefler, güçlü alanlar ve ihtiyaçlar değerlendirilir." },
          { title: "Strateji ve öncelikler", text: "Sınav, ders ve başvuru adımları önem sırasına yerleştirilir." },
          { title: "Uygulama desteği", text: "Öğrenci belirlenen görevler ve görüşmelerle süreci yürütür." },
          { title: "İlerleme değerlendirmesi", text: "Sonuçlar gözden geçirilir ve bir sonraki çalışma hedefi güncellenir." },
        ]}
      />
      <FeaturePanelSection
        eyebrow="Danışmanlık çıktıları"
        title="Görüşmelerin sonunda öğrenci ne kazanır?"
        text="Danışmanlık, genel öneriler yerine öğrencinin karar vermesini ve harekete geçmesini kolaylaştıran somut çıktılar üretir."
        items={[
          { title: "Akademik profil özeti", text: "Güçlü alanlar, gelişim ihtiyaçları ve hedeflerle ilgili temel değerlendirmeler bir araya getirilir." },
          { title: "Önceliklendirilmiş yol haritası", text: "Ders, sınav ve başvuru kararları önem sırasına göre yapılandırılır." },
          { title: "Ülke ve üniversite karşılaştırması", text: "Öğrencinin hedefleriyle uyumlu seçenekler ortak ölçütler üzerinden değerlendirilir." },
          { title: "Gelişim özeti", text: "Tamamlanan adımlar, açık kalan ihtiyaçlar ve sıradaki hedefler görünür hale getirilir." },
        ]}
      />
      <FaqSection items={[
        { question: "Danışmanlık ile özel ders aynı hizmet mi?", answer: "Hayır. Danışmanlık planlama ve takip sürecidir; özel ders ihtiyaç duyulan akademik alanlarda ayrıca yürütülür." },
        { question: "Üniversite başvurusunun hangi aşamaları kapsanıyor?", answer: "Kapsam; öğrencinin hedef ülkesi, bölümü ve mevcut ihtiyacına göre ilk görüşmede netleştirilir." },
        { question: "Veli görüşmeleri yapılıyor mu?", answer: "Programın yapısına göre düzenli öğrenci ve veli değerlendirmeleri planlanabilir." },
      ]} />
      <CtaBand title="Öğrencinin akademik planını birlikte netleştirelim" text="İlk görüşmede mevcut durumu, hedefi ve öncelikli karar noktalarını değerlendirelim." />
      <Footer />
    </main>
  );
}
