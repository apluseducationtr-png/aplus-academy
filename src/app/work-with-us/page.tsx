import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Eğitmen Ol | APlus Academy",
  description:
    "APlus Academy eğitmen ağına katılın. SAT, AP, IB, IELTS, TOEFL ve uluslararası okul derslerinde uzman eğitmen başvuruları.",
};

const expectations = [
  "Alanında güçlü akademik geçmiş",
  "Öğrenci takibi ve düzenli raporlama disiplini",
  "Online veya yüz yüze ders verebilme esnekliği",
  "Sınav formatlarına hakimiyet",
];

export default function WorkWithUsPage() {
  return (
    <main>
      <Navbar />
      <section style={heroSection}>
        <div style={container}>
          <p style={eyebrow}>Eğitmen Ol</p>
          <h1 style={heroTitle}>A Plus öğrencilerine sistemli ve hedef odaklı destek veren ekibe katılın</h1>
          <p style={heroText}>
            Öğrenci takibini önemseyen, sınav formatlarını bilen ve güçlü iletişim kuran
            eğitmenlerle uzun vadeli çalışıyoruz.
          </p>
          <Link href="/contact" style={primaryButton}>Başvuru için iletişime geç</Link>
        </div>
      </section>

      <section style={{ padding: "76px 24px" }}>
        <div style={grid}>
          {expectations.map((item, index) => (
            <article key={item} style={{ ...card, background: index % 2 === 0 ? "#EAF4FF" : "#FDE8F1" }}>
              <span style={number}>{String(index + 1).padStart(2, "0")}</span>
              <h2 style={cardTitle}>{item}</h2>
            </article>
          ))}
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
  maxWidth: "900px",
};
const heroText: React.CSSProperties = {
  color: "#45546D",
  fontSize: "18px",
  lineHeight: 1.8,
  margin: "24px 0 32px",
  maxWidth: "720px",
};
const primaryButton: React.CSSProperties = {
  background: "#4997E6",
  color: "#ffffff",
  borderRadius: "999px",
  padding: "14px 22px",
  fontSize: "14px",
  fontWeight: 950,
  textDecoration: "none",
};
const grid: React.CSSProperties = {
  maxWidth: "1080px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
  gap: "18px",
};
const card: React.CSSProperties = {
  border: "1px solid #DDEAF4",
  borderRadius: "24px",
  padding: "26px",
  minHeight: "190px",
};
const number: React.CSSProperties = {
  color: "#4997E6",
  fontSize: "13px",
  fontWeight: 950,
};
const cardTitle: React.CSSProperties = {
  color: "#0B1238",
  fontSize: "24px",
  lineHeight: 1.2,
  fontWeight: 950,
  margin: "18px 0 0",
};
