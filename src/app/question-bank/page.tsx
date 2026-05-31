import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Soru Bankası | APlus Academy",
  description:
    "APlus Academy deneme, soru bankası ve konu analiz sistemiyle öğrencilerin gelişimini takip eder.",
};

const features = [
  ["Deneme analizi", "Skor, konu eksiği, süre yönetimi ve hata tipi birlikte değerlendirilir."],
  ["Konu bazlı takip", "Öğrencinin hangi başlıkta tekrar yapması gerektiği netleşir."],
  ["Hedef skor planı", "Deneme sonuçları haftalık çalışma planına dönüştürülür."],
];

const exams = ["Digital SAT", "AP", "IB", "IELTS", "TOEFL", "A-Level", "IGCSE", "GMAT"];

export default function QuestionBankPage() {
  return (
    <main>
      <Navbar />
      <section style={heroSection}>
        <div style={container}>
          <p style={eyebrow}>Soru Bankası</p>
          <h1 style={heroTitle}>Deneme, soru çözümü ve analiz tek sistemde</h1>
          <p style={heroText}>
            Öğrencinin sadece kaç net yaptığına değil, hangi konuda neden puan
            kaybettiğine bakıyoruz. Böylece her deneme yeni bir çalışma planına dönüşür.
          </p>
          <div style={buttonRow}>
            <Link href="/contact" style={primaryButton}>Ücretsiz deneme planla</Link>
            <Link href="/exams" style={secondaryButton}>Sınavları incele</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "76px 24px" }}>
        <div style={container}>
          <div style={statsGrid}>
            <div style={statCard}><strong>5.000+</strong><span>Soru ve deneme</span></div>
            <div style={statCard}><strong>8+</strong><span>Sınav alanı</span></div>
            <div style={statCard}><strong>Haftalık</strong><span>Analiz ve takip</span></div>
          </div>

          <div style={featureGrid}>
            {features.map(([title, text], index) => (
              <article key={title} style={{ ...featureCard, background: index === 1 ? "#FDE8F1" : "#EAF4FF" }}>
                <h2 style={featureTitle}>{title}</h2>
                <p style={featureText}>{text}</p>
              </article>
            ))}
          </div>

          <div style={examBand}>
            <h2 style={bandTitle}>Desteklenen sınavlar</h2>
            <div style={pillRow}>
              {exams.map((exam) => <span key={exam} style={pill}>{exam}</span>)}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

const container: React.CSSProperties = { maxWidth: "1080px", margin: "0 auto" };
const heroSection: React.CSSProperties = {
  background: "linear-gradient(135deg, #EAF4FF 0%, #FDE8F1 52%, #DDF6F3 100%)",
  padding: "84px 24px",
};
const eyebrow: React.CSSProperties = {
  color: "#4997E6",
  fontSize: "13px",
  fontWeight: 950,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  margin: "0 0 16px",
};
const heroTitle: React.CSSProperties = {
  color: "#0B1238",
  fontSize: "clamp(42px, 5vw, 70px)",
  lineHeight: 1.04,
  fontWeight: 950,
  margin: 0,
  maxWidth: "820px",
};
const heroText: React.CSSProperties = {
  color: "#45546D",
  fontSize: "18px",
  lineHeight: 1.8,
  margin: "24px 0 0",
  maxWidth: "700px",
};
const buttonRow: React.CSSProperties = { display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "32px" };
const primaryButton: React.CSSProperties = {
  background: "#4997E6",
  color: "#ffffff",
  borderRadius: "999px",
  padding: "14px 22px",
  fontSize: "14px",
  fontWeight: 950,
  textDecoration: "none",
};
const secondaryButton: React.CSSProperties = {
  background: "#ffffff",
  color: "#0B1238",
  border: "1px solid #DDEAF4",
  borderRadius: "999px",
  padding: "14px 22px",
  fontSize: "14px",
  fontWeight: 950,
  textDecoration: "none",
};
const statsGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))",
  gap: "16px",
  marginBottom: "28px",
};
const statCard: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #DDEAF4",
  borderRadius: "22px",
  padding: "24px",
  display: "grid",
  gap: "6px",
  color: "#45546D",
  boxShadow: "0 14px 36px rgba(73,151,230,0.08)",
};
const featureGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
  gap: "18px",
};
const featureCard: React.CSSProperties = {
  border: "1px solid #DDEAF4",
  borderRadius: "24px",
  padding: "26px",
};
const featureTitle: React.CSSProperties = { color: "#0B1238", fontSize: "24px", fontWeight: 950, margin: "0 0 12px" };
const featureText: React.CSSProperties = { color: "#45546D", fontSize: "15px", lineHeight: 1.75, margin: 0 };
const examBand: React.CSSProperties = {
  marginTop: "28px",
  background: "#DDF6F3",
  border: "1px solid #9BE4DE",
  borderRadius: "26px",
  padding: "28px",
};
const bandTitle: React.CSSProperties = { color: "#0B1238", fontSize: "26px", fontWeight: 950, margin: "0 0 16px" };
const pillRow: React.CSSProperties = { display: "flex", flexWrap: "wrap", gap: "8px" };
const pill: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #DDEAF4",
  borderRadius: "999px",
  color: "#1F2A44",
  fontSize: "13px",
  fontWeight: 850,
  padding: "8px 12px",
};
