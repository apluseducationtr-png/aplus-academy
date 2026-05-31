import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "İletişim | APlus Academy",
  description:
    "APlus Academy ile ücretsiz görüşme planlayın. Online ve yüz yüze eğitim seçenekleri hakkında bilgi alın.",
};

const contactItems = [
  ["Telefon", "+90 552 519 55 50"],
  ["E-posta", "info@aplusacademy.com"],
  ["Konum", "İstanbul, Türkiye"],
  ["Eğitim", "Online & yüz yüze"],
];

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <section style={heroSection}>
        <div style={layout}>
          <div>
            <p style={eyebrow}>İletişim</p>
            <h1 style={heroTitle}>Öğrenci için en doğru başlangıç planını birlikte belirleyelim</h1>
            <p style={heroText}>
              Hedef sınavı, mevcut seviye ve takvimi konuşarak ilk yol haritasını çıkarıyoruz.
              Görüşme ücretsizdir ve herhangi bir taahhüt gerektirmez.
            </p>
            <div style={infoGrid}>
              {contactItems.map(([label, value]) => (
                <div key={label} style={infoCard}>
                  <span style={infoLabel}>{label}</span>
                  <strong style={infoValue}>{value}</strong>
                </div>
              ))}
            </div>
          </div>

          <form style={formCard}>
            <label style={fieldLabel}>
              Ad Soyad
              <input style={inputStyle} placeholder="Öğrenci veya veli adı" />
            </label>
            <label style={fieldLabel}>
              Telefon / WhatsApp
              <input style={inputStyle} placeholder="+90 ..." />
            </label>
            <label style={fieldLabel}>
              İlgilenilen program
              <select style={inputStyle} defaultValue="">
                <option value="" disabled>Program seçin</option>
                <option>Digital SAT</option>
                <option>AP</option>
                <option>IB</option>
                <option>IELTS / TOEFL</option>
                <option>A-Level / IGCSE</option>
                <option>Diğer</option>
              </select>
            </label>
            <label style={fieldLabel}>
              Not
              <textarea style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }} placeholder="Hedefiniz ve sınav tarihiniz..." />
            </label>
            <button type="button" style={submitButton}>Görüşme talebi gönder</button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}

const heroSection: React.CSSProperties = {
  background: "linear-gradient(135deg, #EAF4FF 0%, #FDE8F1 52%, #DDF6F3 100%)",
  padding: "84px 24px",
};
const layout: React.CSSProperties = {
  maxWidth: "1080px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(360px, 100%), 1fr))",
  gap: "28px",
  alignItems: "start",
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
  fontSize: "clamp(40px, 5vw, 66px)",
  lineHeight: 1.05,
  fontWeight: 950,
  margin: 0,
};
const heroText: React.CSSProperties = {
  color: "#45546D",
  fontSize: "18px",
  lineHeight: 1.8,
  margin: "24px 0 0",
};
const infoGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(210px, 100%), 1fr))",
  gap: "12px",
  marginTop: "28px",
};
const infoCard: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #DDEAF4",
  borderRadius: "18px",
  padding: "18px",
};
const infoLabel: React.CSSProperties = { color: "#4997E6", fontSize: "12px", fontWeight: 950 };
const infoValue: React.CSSProperties = { display: "block", color: "#0B1238", fontSize: "16px", marginTop: "6px" };
const formCard: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #DDEAF4",
  borderRadius: "28px",
  padding: "26px",
  display: "grid",
  gap: "16px",
  boxShadow: "0 24px 70px rgba(73,151,230,0.12)",
};
const fieldLabel: React.CSSProperties = {
  display: "grid",
  gap: "8px",
  color: "#0B1238",
  fontSize: "13px",
  fontWeight: 900,
};
const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "1px solid #DDEAF4",
  borderRadius: "14px",
  padding: "12px 14px",
  color: "#0B1238",
  font: "inherit",
  outline: "none",
  background: "#FAFCFF",
};
const submitButton: React.CSSProperties = {
  background: "#4997E6",
  color: "#ffffff",
  border: "none",
  borderRadius: "999px",
  padding: "14px 20px",
  fontSize: "14px",
  fontWeight: 950,
  cursor: "pointer",
};
