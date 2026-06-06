import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CardGrid,
  CtaBand,
  PageHero,
  PlaceholderSection,
  ProcessSection,
  SectionHeading,
} from "@/components/MarketingSections";

const programs = [
  { eyebrow: "Üniversite kabul sınavı", title: "Digital SAT", text: "Math ve Reading & Writing hazırlığı; seviye tespit, ders, ödev ve deneme takibi.", href: "/sinavlar/digital-sat", tags: ["Birebir", "Küçük grup", "Deneme"] },
  { eyebrow: "Advanced Placement", title: "AP Programları", text: "Ders bazlı konu desteği, MCQ ve FRQ pratiği, okul sınavları ve final hazırlığı.", href: "/sinavlar/ap", tags: ["20+ ders", "MCQ", "FRQ"] },
  { eyebrow: "Uluslararası diploma", title: "IB Diploma", text: "HL/SL ders desteği ile IA, EE, TOK ve predicted grade sürecinin birlikte takibi.", href: "/sinavlar/ib", tags: ["HL / SL", "IA / EE", "TOK"] },
  { eyebrow: "Uluslararası müfredat", title: "A-Level & IGCSE", text: "Cambridge, Edexcel ve AQA derslerinde okul başarısı ve final sınavı desteği.", href: "/sinavlar/a-level-igcse", tags: ["Past papers", "Okul desteği"] },
  { eyebrow: "Dil yeterliliği", title: "IELTS & TOEFL", text: "Writing, speaking, reading ve listening alanlarında hedef skor odaklı program.", href: "/sinavlar/ielts-toefl", tags: ["Writing feedback", "Speaking"] },
  { eyebrow: "Tıp ve hukuk", title: "IMAT, UCAT & LNAT", text: "Reasoning, science, reading ve essay becerileri için sınava özel çalışma planı.", href: "/sinavlar/imat-ucat-lnat", tags: ["UK", "İtalya", "Reasoning"] },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Uluslararası akademik hazırlık"
        title="Sınav, okul ve üniversite hedefi tek bir akademik planda"
        intro="A Plus Academy; uluslararası sınav hazırlığını, okul desteğini, deneme analizini ve düzenli öğrenci takibini kişisel bir yol haritasında birleştirir."
        secondary={{ label: "Programları incele", href: "/exams" }}
        panelTitle="A Plus çalışma modelinin temelleri"
        panelItems={[
          "Alanında uzman eğitmenlerle birebir veya küçük grup dersleri",
          "Seviye ve hedefe göre kişisel ders ve çalışma planı",
          "Ödev, deneme ve konu eksiklerinin düzenli takibi",
          "Öğrenci ve veli için görünür gelişim süreci",
        ]}
      />

      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Programlar"
            title="Öğrencinin hedefi hangi sistemdeyse, hazırlık o sisteme göre kurulur"
            text="Bu alan program kataloğunun ana girişi olacak. Her program sayfasında kapsam, format, süreç, eğitmen ve paket bilgileri yer alacak."
            align="center"
          />
          <CardGrid items={programs} columns={3} />
        </div>
      </section>

      <ProcessSection
        title="Ders vermekten önce doğru başlangıç noktasını belirliyoruz"
        text="Sürecin her adımı öğrencinin hedef skoru, mevcut seviyesi, okul yükü ve sınav tarihine göre şekillenir."
        steps={[
          { title: "Tanışma ve ihtiyaç analizi", text: "Hedef sınav, mevcut durum, takvim ve ders ihtiyacı netleştirilir." },
          { title: "Seviye tespit ve eğitmen eşleşmesi", text: "Öğrencinin ihtiyacına uygun ders alanı ve eğitmen belirlenir." },
          { title: "Kişisel akademik plan", text: "Ders, ödev, deneme ve tekrar temposu birlikte oluşturulur." },
          { title: "Takip ve güncelleme", text: "Sonuçlara göre plan düzenli olarak gözden geçirilir." },
        ]}
      />

      <PlaceholderSection
        eyebrow="Neden A Plus?"
        title="İddia yerine doğrulanabilir deneyim göstereceğiz"
        text="Bu bölüm, içerik aşamasında gerçek kurum bilgileri ve izinli öğrenci verileriyle doldurulacak."
        items={[
          "Kurucular ve A Plus hikâyesi",
          "Eğitmen profilleri ve uzmanlıkları",
          "Doğrulanmış öğrenci sonuçları",
          "Veli ve öğrenci görüşleri",
        ]}
      />

      <section className="section section-soft">
        <div className="site-container">
          <SectionHeading
            eyebrow="Tek sistem, farklı ihtiyaçlar"
            title="Sadece sınav hazırlığı değil"
            text="A Plus’ın bütün hizmet alanlarını ana sayfada görünür kılan ikinci katman."
          />
          <CardGrid columns={4} items={[
            { title: "Sınav hazırlığı", text: "Uluslararası sınavların formatına ve hedef skora göre hazırlık." },
            { title: "Okul ve GPA desteği", text: "Ders, quiz, sınav ve dönem planının düzenli takibi." },
            { title: "Deneme ve analiz", text: "Yanlışların konu, süre ve hata tipi bazında değerlendirilmesi." },
            { title: "Akademik rehberlik", text: "Sınav, ders ve üniversite hedeflerinin ortak takvimde yönetilmesi." },
          ]} />
        </div>
      </section>

      <CtaBand
        title="Öğrenci için doğru başlangıç planını birlikte çıkaralım"
        text="İlk görüşmede hedefi, sınav tarihini ve mevcut ihtiyacı netleştirelim."
      />
      <Footer />
    </main>
  );
}
