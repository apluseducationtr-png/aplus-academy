import Navbar from "@/components/Navbar";
import ExamPrograms from "@/components/ExamPrograms";
import Testimonials from "@/components/Testimonials";
import WhyAPlus from "@/components/WhyAPlus";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #EAF4FF 0%, #FDE8F1 50%, #DDF6F3 100%)",
        padding: "4rem 2rem 3.5rem",
      }}>
        <div className="home-hero-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          maxWidth: "1100px",
          margin: "0 auto",
          alignItems: "center",
        }}>
          {/* LEFT — Heading + Description */}
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              background: "#fff", border: "1.5px solid #DDEAF4",
              borderRadius: "100px", padding: "5px 14px",
              fontSize: "12.5px", fontWeight: 700, color: "#4a5568",
              marginBottom: "1.5rem",
            }}>
              <span style={{
                background: "#44C7BE", color: "#fff",
                padding: "2px 8px", borderRadius: "20px", fontSize: "11px"
              }}>YENİ</span>
              2008&apos;den Beri 10.000+ Başarılı Öğrenci
            </div>

            <h1 style={{
              fontFamily: "var(--font-nunito)",
              fontSize: "2.8rem", fontWeight: 900,
              color: "#0B1238", lineHeight: 1.15,
              marginBottom: "1.2rem",
            }}>
              Hedef <span style={{ color: "#4997E6" }}>Puana</span> Ulaşmanın{" "}
              En <span style={{ color: "#EF4A85" }}>Akıllı</span> Yolu
            </h1>

            <p style={{
              color: "#4a5568", fontSize: "15.5px",
              lineHeight: 1.7, fontWeight: 500,
              marginBottom: "2rem", maxWidth: "440px",
            }}>
              SAT, IB, IELTS ve 12+ sınav için kişiselleştirilmiş
              birebir dersler, küçük grup kursları ve dijital araçlar.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/contact" style={{
                background: "#4997E6", color: "#fff",
                padding: "12px 26px", borderRadius: "100px",
                fontWeight: 800, fontSize: "14px", textDecoration: "none",
                fontFamily: "var(--font-nunito)",
              }}>Ücretsiz Görüşme Ayarla</Link>
              <Link href="/question-bank" style={{
                background: "transparent", color: "#0B1238",
                padding: "12px 24px", borderRadius: "100px",
                fontWeight: 700, fontSize: "14px", textDecoration: "none",
                border: "2px solid #DDEAF4",
                fontFamily: "var(--font-nunito)",
              }}>Ücretsiz Deneme →</Link>
            </div>
          </div>

          {/* RIGHT — Search + Tags + Stats */}
          <div>
            {/* Search Bar */}
            <div className="home-search" style={{
              display: "flex", background: "#fff",
              borderRadius: "100px", border: "2px solid #DDEAF4",
              overflow: "hidden", marginBottom: "1rem",
              boxShadow: "0 4px 20px rgba(74,144,217,0.1)",
            }}>
              <input
                placeholder="Hangi sınava hazırlanmak istiyorsunuz?"
                style={{
                  flex: 1, border: "none", padding: "14px 20px",
                  fontSize: "14px", outline: "none",
                  fontFamily: "var(--font-nunito-sans)",
                }}
              />
              <Link href="/exams" style={{
                background: "#4997E6", color: "#fff",
                border: "none", padding: "0 24px",
                fontSize: "13.5px", fontWeight: 700,
                textDecoration: "none", display: "flex",
                alignItems: "center",
                fontFamily: "var(--font-nunito)",
              }}>Ara →</Link>
            </div>

            {/* Quick Tags */}
            <div className="home-stat-grid" style={{
              display: "flex", gap: "8px",
              flexWrap: "wrap", marginBottom: "2rem",
            }}>
              {["📐 SAT", "🎓 IB", "🗣 IELTS", "📝 TOEFL", "📊 GMAT", "🏫 A-Level"].map((tag) => (
                <Link key={tag} href="/exams" style={{
                  background: "#fff", border: "1.5px solid #DDEAF4",
                  color: "#4a5568", fontSize: "12.5px", fontWeight: 700,
                  padding: "6px 14px", borderRadius: "100px",
                  textDecoration: "none",
                  fontFamily: "var(--font-nunito)",
                }}>{tag}</Link>
              ))}
            </div>

            {/* Stats */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1rem",
              background: "#fff",
              borderRadius: "16px",
              padding: "1.2rem",
              border: "1.5px solid #DDEAF4",
            }}>
              {[
                { n: "10.000+", l: "Başarılı Öğrenci" },
                { n: "%94", l: "Hedef Tutturma" },
                { n: "50+", l: "Ülkeden Öğrenci" },
                { n: "4.9 ⭐", l: "Google Puanı" },
              ].map((s) => (
                <div key={s.l} style={{ textAlign: "center" }}>
                  <div style={{
                    fontFamily: "var(--font-nunito)",
                    fontSize: "1.3rem", fontWeight: 900, color: "#0B1238",
                  }}>{s.n}</div>
                  <div style={{
                    fontSize: "11px", color: "#7B8EA7",
                    fontWeight: 600, marginTop: "2px",
                  }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXAM CATEGORIES */}
      <section style={{ padding: "3.5rem 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span style={sectionLabelStyle}>Kategoriler</span>
          <h2 style={sectionTitleStyle}>Hangi Sınav Grubuna Hazırlanıyorsunuz?</h2>
        </div>
        <div className="home-category-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(145px, 1fr))",
          gap: "12px", maxWidth: "960px", margin: "0 auto",
        }}>
          {categories.map((cat) => (
            <Link key={cat.name} href="/exams" style={{
              borderRadius: "16px", padding: "1.3rem 1.1rem",
              textAlign: "center", textDecoration: "none",
              background: cat.bg, border: `2px solid ${cat.border}`,
              display: "block", transition: "transform 0.15s",
            }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{cat.icon}</div>
              <div style={{
                fontFamily: "var(--font-nunito)", fontWeight: 800,
                fontSize: "13.5px", color: "#0B1238",
              }}>{cat.name}</div>
              <div style={{ fontSize: "11.5px", color: "#7B8EA7", marginTop: "2px" }}>{cat.count}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "3.5rem 2rem", background: "#F7FBFF" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span style={sectionLabelStyle}>Süreç</span>
          <h2 style={sectionTitleStyle}>3 Adımda Hedef Puan</h2>
        </div>
        <div className="home-step-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: "14px", maxWidth: "860px", margin: "0 auto",
        }}>
          {steps.map((step) => (
            <div key={step.title} style={{
              background: "#fff", borderRadius: "16px",
              border: "2px solid #DDEAF4", padding: "1.6rem",
              textAlign: "center",
            }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "50%",
                background: "#4997E6", color: "#fff",
                fontFamily: "var(--font-nunito)", fontWeight: 900,
                fontSize: "1.1rem", display: "flex", alignItems: "center",
                justifyContent: "center", margin: "0 auto 1rem",
              }}>{step.num}</div>
              <h3 style={{
                fontFamily: "var(--font-nunito)", fontWeight: 800,
                fontSize: "15px", color: "#0B1238", marginBottom: "0.4rem",
              }}>{step.title}</h3>
              <p style={{ fontSize: "13px", color: "#4a5568", lineHeight: 1.65 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{
        background: "linear-gradient(135deg, #EAF4FF 0%, #FDE8F1 52%, #DDF6F3 100%)",
        padding: "4rem 2rem", textAlign: "center",
      }}>
        <h2 style={{
          fontFamily: "var(--font-nunito)", fontSize: "2rem",
          fontWeight: 900, color: "#0B1238", marginBottom: "0.7rem",
        }}>İlk Adımı Bugün Atın 🚀</h2>
        <p style={{
          color: "#45546D", fontSize: "14.5px",
          marginBottom: "2rem", fontWeight: 500,
        }}>Ücretsiz 15 dakikalık görüşme · Taahhüt yok · 24 saat içinde dönüş</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
          <Link href="/contact" style={{
            background: "#4997E6", color: "#fff",
            padding: "12px 26px", borderRadius: "100px",
            fontWeight: 800, fontSize: "14px", textDecoration: "none",
            fontFamily: "var(--font-nunito)",
          }}>Ücretsiz Görüşme Ayarla</Link>
          <Link href="/question-bank" style={{
            background: "#fff", color: "#0B1238",
            padding: "12px 24px", borderRadius: "100px",
            fontWeight: 700, fontSize: "14px", textDecoration: "none",
            border: "2px solid #DDEAF4",
            fontFamily: "var(--font-nunito)",
          }}>Ücretsiz Deneme Sınavı</Link>
        </div>
      </section>
      <ExamPrograms />
      <Testimonials />
      <WhyAPlus />
      <Footer />

      <style>{`
        .home-hero-grid,
        .home-hero-grid > *,
        .home-search,
        .home-search input,
        .home-category-grid,
        .home-step-grid,
        .home-stat-grid {
          min-width: 0;
        }

        .home-hero-grid h1,
        .home-category-grid,
        .home-step-grid {
          overflow-wrap: anywhere;
        }

        @media (max-width: 900px) {
          .home-hero-grid,
          .home-step-grid {
            grid-template-columns: 1fr !important;
          }

          .home-stat-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 640px) {
          .home-hero-grid {
            gap: 2rem !important;
          }

          .home-hero-grid h1 {
            font-size: 2.35rem !important;
            line-height: 1.18 !important;
          }

          .home-search {
            border-radius: 22px !important;
            flex-direction: column !important;
          }

          .home-search a {
            justify-content: center !important;
            padding: 12px 20px !important;
          }

          .home-category-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

// ── Data ──────────────────────────────────────────────
const categories = [
  { name: "ABD Sınavları", count: "SAT, ACT, AP, GMAT, GRE", icon: "🎯", bg: "#EAF4FF", border: "#CFE7FF" },
  { name: "IB & A-Level", count: "IB, A-Level, IGCSE", icon: "🎓", bg: "#FDE8F1", border: "#F8BFD4" },
  { name: "İngilizce Sınavları", count: "IELTS, TOEFL, PTE", icon: "🗣", bg: "#DDF6F3", border: "#9BE4DE" },
  { name: "Tıp & Hukuk", count: "UCAT, LNAT, IMAT", icon: "🏥", bg: "#EEE7FF", border: "#CBBBF0" },
  { name: "Soru Bankası", count: "5.000+ soru & denemeler", icon: "📚", bg: "#FFF8DC", border: "#F6D36E" },
];

const steps = [
  { num: "1", title: "Ücretsiz Tanı", desc: "15 dakikalık görüşmede seviyenizi, hedefinizi ve zaman planlamanızı değerlendiriyoruz." },
  { num: "2", title: "Kişisel Plan", desc: "Size özel haftalık ders programı, konu ağırlıkları ve deneme takvimi hazırlanır." },
  { num: "3", title: "Hedefe Ulaş", desc: "Düzenli denemeler, canlı geri bildirim ve %100 ücret iade garantisi." },
];

// ── Styles ────────────────────────────────────────────
const sectionLabelStyle: React.CSSProperties = {
  fontSize: "12px", fontWeight: 800, letterSpacing: "0.1em",
  textTransform: "uppercase", color: "#4997E6",
  marginBottom: "0.5rem", display: "block",
  fontFamily: "var(--font-nunito)",
};

const sectionTitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-nunito)", fontSize: "1.9rem",
  fontWeight: 900, color: "#0B1238", marginBottom: "0.4rem",
};
