import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StudentTestimonials from "@/components/StudentTestimonials";
import {
  CardGrid,
  CtaBand,
  PageHero,
  ProcessSection,
  SectionHeading,
} from "@/components/MarketingSections";

const programs = [
  { eyebrow: "Üniversite kabul sınavı", title: "Digital SAT", text: "Math ve Reading & Writing hazırlığı; seviye tespit, ders, ödev ve deneme takibi.", href: "/sinavlar/digital-sat", tags: ["Birebir", "Küçük grup", "Deneme"] },
  { eyebrow: "Advanced Placement", title: "AP Programları", text: "Ders bazlı konu desteği, MCQ ve FRQ pratiği, okul sınavları ve final hazırlığı.", href: "/sinavlar/ap", tags: ["20+ ders", "MCQ", "FRQ"] },
  { eyebrow: "Uluslararası diploma", title: "IB Diploma", text: "HL/SL ders desteği ile IA, EE, TOK ve predicted grade sürecinin birlikte takibi.", href: "/sinavlar/ib", tags: ["HL / SL", "IA / EE", "TOK"] },
  { eyebrow: "Uluslararası müfredat", title: "A-Level & IGCSE", text: "Cambridge, Edexcel ve AQA derslerinde okul başarısı ve final sınavı desteği.", href: "/sinavlar/a-level-igcse", tags: ["Past papers", "Okul desteği"] },
  { eyebrow: "Dil yeterliliği", title: "IELTS & TOEFL", text: "Writing, speaking, reading ve listening alanlarında hedef skor odaklı program.", href: "/sinavlar/ielts-toefl", tags: ["Writing feedback", "Speaking"] },
  { eyebrow: "Tıp ve hukuk", title: "IMAT & LNAT", text: "Science, reasoning, reading ve essay becerileri için sınava özel çalışma planı.", href: "/sinavlar/imat-ucat-lnat", tags: ["UK", "İtalya", "Reasoning"] },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Uluslararası akademik hazırlık"
        title="Sınav, okul ve üniversite hedefi tek bir akademik planda"
        intro="A Plus Academy; uluslararası sınav hazırlığını, okul desteğini, deneme analizini ve düzenli öğrenci takibini kişisel bir akademik yol haritasında birleştirir."
        secondary={{ label: "Programları incele", href: "/exams" }}
        panelTitle="A Plus çalışma modelinin temelleri"
        panelItems={[
          "Yüksek kıdeme ve akademi deneyimine sahip uzman eğitmenler",
          "Seviye ve hedefe göre kişisel ders ve çalışma planı",
          "Ödev, deneme ve konu eksiklerinin düzenli takibi",
          "Maksimum 6 kişilik grup dersleri",
        ]}
      />

      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Programlar"
            title="Öğrencinin hedefi hangi sistemdeyse, hazırlık o sisteme göre kurulur"
            text="SAT, AP, IB, A-Level, IGCSE, dil sınavları, tıp-hukuk sınavları ve lisansüstü testler için hedefe özel hazırlık programları."
            align="center"
          />
          <CardGrid items={programs} columns={3} />
        </div>
      </section>

      <ProcessSection
        title="Ders vermekten önce doğru başlangıç noktasını belirliyoruz"
        text="Sürecin her adımı öğrencinin hedef skoru, mevcut seviyesi, okul yükü ve öncelikli ihtiyaçlarına göre şekillenir."
        steps={[
          { title: "Tanışma ve ihtiyaç analizi", text: "Hedef sınav, mevcut durum ve ders ihtiyacı netleştirilir." },
          { title: "Seviye tespit ve eğitmen eşleşmesi", text: "Öğrencinin ihtiyacına uygun ders alanı ve eğitmen belirlenir." },
          { title: "Kişisel akademik plan", text: "Ders, ödev, deneme ve tekrar temposu birlikte oluşturulur." },
          { title: "Takip ve güncelleme", text: "Sonuçlara göre plan düzenli olarak gözden geçirilir." },
        ]}
      />

      <section className="section">
        <div className="site-container about-layout">
          <div>
            <SectionHeading
              eyebrow="A Plus Academy"
              title="Sadece ders anlatmıyor, bütün akademik süreci yönetiyoruz"
              text="A Plus Academy, öğrencilerin yurt dışı eğitim ve uluslararası akademik hedeflerine giden yolda potansiyellerini en üst seviyeye çıkarmak amacıyla kuruldu."
            />
            <p className="about-copy">
              Klasik öğretmenlik anlayışının ötesine geçerek deneme analizinden
              ödev performansına, zaman yönetiminden sınav stratejisine kadar
              her adımı planlanmış bütüncül bir akademik takip ve mentorluk
              sistemi sunuyoruz. Veli, öğrenci ve kurum arasındaki şeffaf bilgi
              akışıyla süreci görünür, ölçülebilir ve güvenli hale getiriyoruz.
            </p>
            <div className="tag-row">
              <span className="tag">Kurucu: Halil Toprak</span>
              <span className="tag">İstanbul + Online</span>
              <span className="tag">Birebir + Küçük grup</span>
            </div>
          </div>
          <div className="fact-grid">
            {[
              ["500+", "Bugüne kadar çalışılan öğrenci"],
              ["6", "Grup derslerinde maksimum öğrenci"],
              ["2", "İstanbul'da yüz yüze eğitim ofisi"],
              ["4.6 / 5", "9 Google değerlendirmesinden puan"],
            ].map(([value, label]) => (
              <div className="fact-card" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Online eğitim deneyimi"
            title="Dersin içeriğini dijital ortamın imkânlarıyla güçlendiriyoruz"
            text="Online ders modeli; canlı etkileşim, dijital araçlar, derse özel kaynaklar ve ders sonrası takip bileşenlerini bir araya getirir."
          />
          <CardGrid columns={4} items={[
            { title: "Canlı ve etkileşimli ders", text: "Öğrenci, eğitmenle gerçek zamanlı iletişim kurar; soru çözümü ve konu anlatımı birlikte ilerler." },
            { title: "Ekran paylaşımı ve dijital tahta", text: "Grafik, denklem, metin ve soru çözümleri ekranda adım adım görünür hale getirilir." },
            { title: "Derse özel kaynaklar", text: "Sınav formatına ve konu ihtiyacına uygun dijital materyal ve çalışma soruları kullanılır." },
            { title: "Ders sonrası takip", text: "Ödev, yanlış sorular ve eksik konular sonraki çalışmanın önceliklerine dönüştürülür." },
          ]} />
        </div>
      </section>

      <section className="section section-soft">
        <div className="site-container">
          <SectionHeading
            eyebrow="Tek sistem, farklı ihtiyaçlar"
            title="Sadece sınav hazırlığı değil"
            text="Ders saatleriyle sınırlı kalmayan; sınav, okul, analiz ve danışmanlığı aynı akademik planda buluşturan yaklaşım."
          />
          <CardGrid columns={4} items={[
            { title: "Sınav hazırlığı", text: "Uluslararası sınavların formatına ve hedef skora göre hazırlık." },
            { title: "Okul ve GPA desteği", text: "Ders, quiz, sınav ve dönem planının düzenli takibi." },
            { title: "Deneme ve analiz", text: "Yanlışların konu, süre ve hata tipi bazında değerlendirilmesi." },
            { title: "Akademik rehberlik", text: "Sınav, ders ve üniversite hedeflerinin ortak bir akademik planda yönetilmesi." },
          ]} />
        </div>
      </section>

      <StudentTestimonials
        testimonials={[
          { name: "Ela", program: "SAT Öğrencisi", quote: "Zayıf yönlerimi kolayca tespit etti ve özellikle problem çözme becerilerimi geliştirmek için birlikte çalıştık. Halil hocam ile çalıştığım için çok mutluyum ve onu şiddetle tavsiye ediyorum.", href: "/sinavlar/digital-sat" },
          { name: "Serhat", program: "IB Öğrencisi", quote: "IB özel derslerinde konu hakimiyetinin yanında IB deneyimi çok önemli. Halil Hoca her türlü sorunumu çözmeme yardım etti; olumlu ve sabırlı yaklaşımıyla sınavlara en iyi şekilde hazırlanmamı sağladı.", href: "/sinavlar/ib" },
          { name: "Emre", program: "AP Öğrencisi", quote: "Hazırlık süreci zor ve göz korkutucu görünse de Halil Hoca sayesinde iyi bir başarı elde edeceğime güvenim tamdı. Beklediğim gibi 5 aldım ve hedeflerime yönelik önemli bir adımı tamamladım.", href: "/sinavlar/ap" },
        ]}
      />

      <CtaBand
        title="Öğrenci için doğru başlangıç planını birlikte çıkaralım"
        text="İlk görüşmede hedefi, mevcut seviyeyi ve öncelikli ihtiyacı netleştirelim."
      />
      <Footer />
      <style>{`
        .about-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(320px, .9fr);
          gap: 48px;
          align-items: center;
        }
        .about-copy {
          max-width: 720px;
          color: var(--slate);
          font-size: 16px;
          line-height: 1.85;
        }
        .fact-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }
        .fact-card {
          min-height: 170px;
          padding: 24px;
          border: 1px solid var(--border);
          border-radius: 24px;
          background: var(--hero-gradient);
        }
        .fact-card strong {
          display: block;
          color: var(--ink);
          font-family: var(--font-nunito);
          font-size: 38px;
          font-weight: 950;
        }
        .fact-card span {
          display: block;
          margin-top: 12px;
          color: var(--slate);
          font-size: 14px;
          line-height: 1.5;
        }
        @media (max-width: 850px) {
          .about-layout { grid-template-columns: 1fr; }
        }
        @media (max-width: 520px) {
          .fact-grid { grid-template-columns: 1fr; }
          .fact-card { min-height: 0; }
        }
      `}</style>
    </main>
  );
}
