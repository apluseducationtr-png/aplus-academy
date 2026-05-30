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
        background: "linear-gradient(135deg, #EBF4FF 0%, #FEE8F0 50%, #E0F7F6 100%)",
        padding: "4rem 2rem 3.5rem",
      }}>
        <div style={{
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
              background: "#fff", border: "1.5px solid #e8ecf0",
              borderRadius: "100px", padding: "5px 14px",
              fontSize: "12.5px", fontWeight: 700, color: "#4a5568",
              marginBottom: "1.5rem",
            }}>
              <span style={{
                background: "#3DBFB8", color: "#fff",
                padding: "2px 8px", borderRadius: "20px", fontSize: "11px"
              }}>YENİ</span>
              2008&apos;den Beri 10.000+ Başarılı Öğrenci
            </div>

            <h1 style={{
              fontFamily: "var(--font-nunito)",
              fontSize: "2.8rem", fontWeight: 900,
              color: "#1a1a2e", lineHeight: 1.15,
              marginBottom: "1.2rem",
            }}>
              Hedef <span style={{ color: "#4A90D9" }}>Puana</span> Ulaşmanın{" "}
              En <span style={{ color: "#E8467C" }}>Akıllı</span> Yolu
            </h1>

            <p style={{
              color: "#4a5568", fontSize: "15.5px",
              lineHeight: 1.7, fontWeight: 500,
              marginBottom: "2rem", maxWidth: "440px",
            }}>
              SAT, IB, IELTS, YÖS ve 13+ sınav için kişiselleştirilmiş
              birebir dersler, küçük grup kursları ve dijital araçlar.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/contact" style={{
                background: "#4A90D9", color: "#fff",
                padding: "12px 26px", borderRadius: "100px",
                fontWeight: 800, fontSize: "14px", textDecoration: "none",
                fontFamily: "var(--font-nunito)",
              }}>Ücretsiz Görüşme Ayarla</Link>
              <Link href="/question-bank" style={{
                background: "transparent", color: "#1a1a2e",
                padding: "12px 24px", borderRadius: "100px",
                fontWeight: 700, fontSize: "14px", textDecoration: "none",
                border: "2px solid #e8ecf0",
                fontFamily: "var(--font-nunito)",
              }}>Ücretsiz Deneme →</Link>
            </div>
          </div>

          {/* RIGHT — Search + Tags + Stats */}
          <div>
            {/* Search Bar */}
            <div style={{
              display: "flex", background: "#fff",
              borderRadius: "100px", border: "2px solid #e8ecf0",
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
                background: "#4A90D9", color: "#fff",
                border: "none", padding: "0 24px",
                fontSize: "13.5px", fontWeight: 700,
                textDecoration: "none", display: "flex",
                alignItems: "center",
                fontFamily: "var(--font-nunito)",
              }}>Ara →</Link>
            </div>

            {/* Quick Tags */}
            <div style={{
              display: "flex", gap: "8px",
              flexWrap: "wrap", marginBottom: "2rem",
            }}>
              {["📐 SAT", "🎓 IB", "🗣 IELTS", "📝 TOEFL", "🇹🇷 YÖS", "📊 GMAT", "🏫 A-Level"].map((tag) => (
                <Link key={tag} href="/exams" style={{
                  background: "#fff", border: "1.5px solid #e8ecf0",
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
              border: "1.5px solid #e8ecf0",
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
                    fontSize: "1.3rem", fontWeight: 900, color: "#1a1a2e",
                  }}>{s.n}</div>
                  <div style={{
                    fontSize: "11px", color: "#8898aa",
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
        <div style={{
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
                fontSize: "13.5px", color: "#1a1a2e",
              }}>{cat.name}</div>
              <div style={{ fontSize: "11.5px", color: "#8898aa", marginTop: "2px" }}>{cat.count}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "3.5rem 2rem", background: "#f8fafc" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span style={sectionLabelStyle}>Süreç</span>
          <h2 style={sectionTitleStyle}>3 Adımda Hedef Puan</h2>
        </div>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: "14px", maxWidth: "860px", margin: "0 auto",
        }}>
          {steps.map((step) => (
            <div key={step.title} style={{
              background: "#fff", borderRadius: "16px",
              border: "2px solid #e8ecf0", padding: "1.6rem",
              textAlign: "center",
            }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "50%",
                background: "#4A90D9", color: "#fff",
                fontFamily: "var(--font-nunito)", fontWeight: 900,
                fontSize: "1.1rem", display: "flex", alignItems: "center",
                justifyContent: "center", margin: "0 auto 1rem",
              }}>{step.num}</div>
              <h3 style={{
                fontFamily: "var(--font-nunito)", fontWeight: 800,
                fontSize: "15px", color: "#1a1a2e", marginBottom: "0.4rem",
              }}>{step.title}</h3>
              <p style={{ fontSize: "13px", color: "#4a5568", lineHeight: 1.65 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{
        background: "linear-gradient(135deg, #4A90D9 0%, #2d5fa8 100%)",
        padding: "4rem 2rem", textAlign: "center",
      }}>
        <h2 style={{
          fontFamily: "var(--font-nunito)", fontSize: "2rem",
          fontWeight: 900, color: "#fff", marginBottom: "0.7rem",
        }}>İlk Adımı Bugün Atın 🚀</h2>
        <p style={{
          color: "rgba(255,255,255,0.75)", fontSize: "14.5px",
          marginBottom: "2rem", fontWeight: 500,
        }}>Ücretsiz 15 dakikalık görüşme · Taahhüt yok · 24 saat içinde dönüş</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
          <Link href="/contact" style={{
            background: "#fff", color: "#4A90D9",
            padding: "12px 26px", borderRadius: "100px",
            fontWeight: 800, fontSize: "14px", textDecoration: "none",
            fontFamily: "var(--font-nunito)",
          }}>Ücretsiz Görüşme Ayarla</Link>
          <Link href="/question-bank" style={{
            background: "transparent", color: "#fff",
            padding: "12px 24px", borderRadius: "100px",
            fontWeight: 700, fontSize: "14px", textDecoration: "none",
            border: "2px solid rgba(255,255,255,0.4)",
            fontFamily: "var(--font-nunito)",
          }}>Ücretsiz Deneme Sınavı</Link>
        </div>
      </section>
      <ExamPrograms />
      <Testimonials />
      <WhyAPlus />
      <Footer />
    </main>
  );
}

// ── Data ──────────────────────────────────────────────
const categories = [
  { name: "ABD Sınavları", count: "SAT, ACT, AP, GMAT, GRE", icon: "🎯", bg: "#EBF4FF", border: "#D0E8FF" },
  { name: "IB & A-Level", count: "IB, A-Level, IGCSE", icon: "🎓", bg: "#FEE8F0", border: "#fac8d8" },
  { name: "İngilizce Sınavları", count: "IELTS, TOEFL, PTE", icon: "🗣", bg: "#E0F7F6", border: "#a8e8e5" },
  { name: "Tıp & Hukuk", count: "UCAT, LNAT, IMAT", icon: "🏥", bg: "#F0EBFF", border: "#c8b8e8" },
  { name: "YÖS", count: "Türkiye Üniversiteleri", icon: "🇹🇷", bg: "#FFF0E6", border: "#fac8a0" },
  { name: "Soru Bankası", count: "5.000+ soru & denemeler", icon: "📚", bg: "#FFFBE6", border: "#f8e098" },
];

const steps = [
  { num: "1", title: "Ücretsiz Tanı", desc: "15 dakikalık görüşmede seviyenizi, hedefinizi ve zaman planlamanızı değerlendiriyoruz." },
  { num: "2", title: "Kişisel Plan", desc: "Size özel haftalık ders programı, konu ağırlıkları ve deneme takvimi hazırlanır." },
  { num: "3", title: "Hedefe Ulaş", desc: "Düzenli denemeler, canlı geri bildirim ve %100 ücret iade garantisi." },
];

// ── Styles ────────────────────────────────────────────
const sectionLabelStyle: React.CSSProperties = {
  fontSize: "12px", fontWeight: 800, letterSpacing: "0.1em",
  textTransform: "uppercase", color: "#4A90D9",
  marginBottom: "0.5rem", display: "block",
  fontFamily: "var(--font-nunito)",
};

const sectionTitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-nunito)", fontSize: "1.9rem",
  fontWeight: 900, color: "#1a1a2e", marginBottom: "0.4rem",
};