import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CardGrid, CtaBand, PageHero, ProcessSection, SectionHeading } from "@/components/MarketingSections";

export const metadata: Metadata = {
  title: "A Plus Academy Eğitmen Başvurusu",
  description: "A Plus Academy eğitmen ağına katılmak için çalışma modeli ve başvuru süreci.",
};

export default function WorkWithUsPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Eğitmen ağı"
        title="Alan bilgisi kadar öğrenci takibini de önemseyen eğitmenlerle çalışıyoruz"
        intro="Kariyer sayfası; aranan uzmanlıkları, çalışma modelini, seçim sürecini ve başvuru beklentilerini açık biçimde gösterecek."
        primary={{ label: "Başvuru iletişimi", href: "/contact" }}
        secondary={{ label: "Programları incele", href: "/exams" }}
        panelItems={[
          "Uluslararası sınav veya müfredat uzmanlığı",
          "Online ve/veya yüz yüze ders verebilme",
          "Ödev, geri bildirim ve raporlama disiplini",
          "Uzun vadeli öğrenci iletişimi ve ekip çalışması",
        ]}
      />
      <section className="section">
        <div className="site-container">
          <SectionHeading eyebrow="Aranan profiller" title="Uzmanlık alanları yapısal olarak ayrıldı" text="Aktif ihtiyaçlar ve pozisyon detayları içerik aşamasında güncellenecek." />
          <CardGrid columns={3} items={[
            { title: "SAT & ACT", text: "Math veya Reading & Writing alanında sınav formatına hâkim eğitmenler." },
            { title: "AP & IB", text: "STEM, Economics, Business, English ve sosyal bilimler ders uzmanları." },
            { title: "A-Level & IGCSE", text: "Cambridge, Edexcel veya AQA board deneyimine sahip eğitmenler." },
            { title: "IELTS & TOEFL", text: "Akademik İngilizce ve sınav becerilerinde geri bildirim verebilen eğitmenler." },
            { title: "Tıp & hukuk sınavları", text: "IMAT, UCAT ve LNAT bileşenlerinde uzman eğitmenler." },
            { title: "Akademik danışmanlık", text: "Uluslararası eğitim ve üniversite hedefleri konusunda deneyimli danışmanlar." },
          ]} />
        </div>
      </section>
      <ProcessSection title="Başvuru ve değerlendirme akışı" text="Adayın alan bilgisi, öğretim yaklaşımı ve takip disiplini birlikte değerlendirilecek." steps={[
        { title: "Başvuru", text: "CV, uzmanlık alanı ve uygun çalışma modeli alınır." },
        { title: "Ön görüşme", text: "Deneyim, iletişim ve sınav bilgisi değerlendirilir." },
        { title: "Örnek ders", text: "Adayın anlatım, soru çözümü ve öğrenci yaklaşımı gözlemlenir." },
        { title: "Eşleşme ve başlangıç", text: "Uygun program ve öğrenci profilleriyle çalışma başlatılır." },
      ]} />
      <CtaBand title="Uzmanlık alanınızı ve çalışma deneyiminizi paylaşın" text="Başvuru formu hazırlanırken iletişim sayfası üzerinden eğitmen başvurusu bırakabilirsiniz." label="Eğitmen başvurusu" />
      <Footer />
    </main>
  );
}
