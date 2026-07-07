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
        intro="Eğitmen seçiminde alan bilgisi, sınav deneyimi, öğrenci iletişimi ve düzenli takip disiplini birlikte değerlendirilir."
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
          <SectionHeading eyebrow="Aranan profiller" title="Farklı sınav ve müfredatlar için alan uzmanları" text="Her eğitmenin kendi ders alanında güncel sınav yapısına, soru tiplerine ve öğrenci ihtiyaçlarına hâkim olması beklenir." />
          <CardGrid columns={3} items={[
            { title: "AP", text: "STEM, Economics, English, sosyal bilimler, sanat ve diğer AP derslerinde uzman eğitmenler." },
            { title: "IB", text: "HL/SL dersleri ile IB core ve okul değerlendirme süreçlerine hâkim eğitmenler." },
            { title: "Digital SAT & ACT", text: "Math, Reading, Writing ve English alanlarında sınav formatına hâkim eğitmenler." },
            { title: "İngilizce yeterlilik", text: "IELTS, TOEFL, Duolingo ve PTE sınavlarında beceri bazlı geri bildirim verebilen eğitmenler." },
            { title: "A-Level, IGCSE & GCSE", text: "Cambridge, Edexcel veya AQA board deneyimine sahip ders uzmanları." },
            { title: "Seçici kabul sınavları", text: "TMUA, ESAT, TARA, LNAT, IMAT ve UCAT bileşenlerinde uzman eğitmenler." },
          ]} />
        </div>
      </section>
      <ProcessSection title="Başvuru ve değerlendirme akışı" text="Adayın alan bilgisi, öğretim yaklaşımı ve takip disiplini birlikte değerlendirilecek." steps={[
        { title: "Başvuru", text: "CV, uzmanlık alanı ve uygun çalışma modeli alınır." },
        { title: "Ön görüşme", text: "Deneyim, iletişim ve sınav bilgisi değerlendirilir." },
        { title: "Örnek ders", text: "Adayın anlatım, soru çözümü ve öğrenci yaklaşımı gözlemlenir." },
        { title: "Eşleşme ve başlangıç", text: "Uygun program ve öğrenci profilleriyle çalışma başlatılır." },
      ]} />
      <CtaBand title="Uzmanlık alanınızı ve çalışma deneyiminizi paylaşın" text="İletişim sayfası üzerinden uzmanlık alanınızı, eğitim geçmişinizi ve çalışma deneyiminizi iletebilirsiniz." label="Eğitmen başvurusu" />
      <Footer />
    </main>
  );
}
