import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Danışmanlık ve Rehberlik | APlus Academy",
  description:
    "APlus Academy danışmanlık ve rehberlik programı ile öğrencilere akademik hedef belirleme, sınav planlama, okul seçimi ve başvuru süreci desteği.",
};

const services = [
  {
    title: "Akademik Yol Haritası",
    text: "Öğrencinin hedefleri, ders yükü, sınav takvimi ve okul beklentileri birlikte değerlendirilir.",
    color: "#EAF4FF",
    border: "#CFE7FF",
  },
  {
    title: "Sınav ve Ders Planlama",
    text: "SAT, AP, IB, A-Level, IELTS ve TOEFL gibi süreçler için haftalık uygulanabilir çalışma planı oluşturulur.",
    color: "#FDE8F1",
    border: "#F8BFD4",
  },
  {
    title: "Üniversite Hedefi",
    text: "Ülke, bölüm, okul listesi ve başvuru zamanı öğrencinin profiline göre netleştirilir.",
    color: "#DDF6F3",
    border: "#9BE4DE",
  },
  {
    title: "Düzenli Takip",
    text: "Öğrencinin ilerlemesi, eksikleri ve bir sonraki adımları belirli aralıklarla gözden geçirilir.",
    color: "#EEE7FF",
    border: "#CBBBF0",
  },
];

const steps = [
  "Hedef ve mevcut durum analizi",
  "Kişisel sınav ve ders takvimi",
  "Okul ve bölüm listesi hazırlığı",
  "Aylık gelişim değerlendirmesi",
];

export default function GuidancePage() {
  return (
    <main>
      <Navbar />
      <section style={heroSection}>
        <div style={container}>
          <Link href="/" style={backLink}>← Ana sayfaya dön</Link>
          <p style={eyebrow}>Danışmanlık / Rehberlik</p>
          <h1 style={heroTitle}>Öğrencinin hedefini netleştiren kişisel akademik rehberlik</h1>
          <p style={heroText}>
            A Plus Academy danışmanlık süreci, öğrencinin sınav hazırlığını, okul derslerini
            ve üniversite hedeflerini tek bir plan içinde takip eder.
          </p>
          <div style={heroActions}>
            <Link href="/contact" style={primaryButton}>Ücretsiz Görüşme Ayarla</Link>
            <Link href="/exams" style={secondaryButton}>Programları İncele</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "76px 24px", background: "#ffffff" }}>
        <div style={sectionHeader}>
          <p style={eyebrow}>Kapsam</p>
          <h2 style={sectionTitle}>Rehberlik sürecinde neleri birlikte planlıyoruz?</h2>
        </div>
        <div style={serviceGrid}>
          {services.map((service) => (
            <article
              key={service.title}
              style={{
                ...serviceCard,
                background: service.color,
                border: `2px solid ${service.border}`,
              }}
            >
              <h3 style={cardTitle}>{service.title}</h3>
              <p style={cardText}>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={processSection}>
        <div style={processLayout}>
          <div>
            <p style={eyebrow}>Süreç</p>
            <h2 style={sectionTitle}>Plan sade, takip düzenli, hedef görünür</h2>
            <p style={processText}>
              Danışmanlık yalnızca tavsiye vermek değildir. Öğrencinin haftalık gerçekliği,
              sınav tarihleri ve okul sorumlulukları birlikte yönetilir.
            </p>
          </div>
          <div style={stepList}>
            {steps.map((step, index) => (
              <div key={step} style={stepItem}>
                <span style={stepNumber}>{String(index + 1).padStart(2, "0")}</span>
                <p style={stepText}>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={ctaSection}>
        <h2 style={ctaTitle}>Öğrenciniz için doğru yolu birlikte belirleyelim</h2>
        <p style={ctaText}>İlk görüşmede hedef, takvim ve ihtiyaçlarınızı netleştirelim.</p>
        <Link href="/contact" style={primaryButton}>Danışmanlık Görüşmesi Planla</Link>
      </section>
      <Footer />
    </main>
  );
}

const container: React.CSSProperties = {
  maxWidth: "1080px",
  margin: "0 auto",
};

const heroSection: React.CSSProperties = {
  background: "linear-gradient(135deg, #EAF4FF 0%, #FDE8F1 52%, #DDF6F3 100%)",
  padding: "76px 24px",
};

const backLink: React.CSSProperties = {
  display: "inline-flex",
  marginBottom: "22px",
  color: "#4997E6",
  background: "#ffffff",
  border: "1px solid #DDEAF4",
  borderRadius: "999px",
  padding: "9px 14px",
  fontSize: "14px",
  fontWeight: 900,
  textDecoration: "none",
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
  fontSize: "clamp(40px, 5vw, 68px)",
  lineHeight: 1.04,
  fontWeight: 950,
  margin: 0,
  maxWidth: "900px",
};

const heroText: React.CSSProperties = {
  color: "#45546D",
  fontSize: "18px",
  lineHeight: 1.8,
  margin: "24px 0 0",
  maxWidth: "720px",
};

const heroActions: React.CSSProperties = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  marginTop: "30px",
};

const primaryButton: React.CSSProperties = {
  background: "#4997E6",
  color: "#ffffff",
  padding: "13px 24px",
  borderRadius: "999px",
  fontSize: "14px",
  fontWeight: 900,
  textDecoration: "none",
  display: "inline-flex",
};

const secondaryButton: React.CSSProperties = {
  background: "#ffffff",
  color: "#0B1238",
  padding: "13px 22px",
  borderRadius: "999px",
  border: "1.5px solid #DDEAF4",
  fontSize: "14px",
  fontWeight: 900,
  textDecoration: "none",
  display: "inline-flex",
};

const sectionHeader: React.CSSProperties = {
  maxWidth: "760px",
  margin: "0 auto 34px",
  textAlign: "center",
};

const sectionTitle: React.CSSProperties = {
  color: "#0B1238",
  fontSize: "clamp(30px, 4vw, 48px)",
  lineHeight: 1.1,
  fontWeight: 950,
  margin: 0,
};

const serviceGrid: React.CSSProperties = {
  maxWidth: "1080px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
  gap: "18px",
};

const serviceCard: React.CSSProperties = {
  borderRadius: "24px",
  padding: "26px",
  minHeight: "230px",
};

const cardTitle: React.CSSProperties = {
  color: "#0B1238",
  fontSize: "24px",
  lineHeight: 1.15,
  fontWeight: 950,
  margin: "0 0 14px",
};

const cardText: React.CSSProperties = {
  color: "#45546D",
  fontSize: "15px",
  lineHeight: 1.75,
  margin: 0,
};

const processSection: React.CSSProperties = {
  background: "#F7FBFF",
  padding: "76px 24px",
};

const processLayout: React.CSSProperties = {
  maxWidth: "1080px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) minmax(280px, 420px)",
  gap: "34px",
  alignItems: "start",
};

const processText: React.CSSProperties = {
  color: "#45546D",
  fontSize: "16px",
  lineHeight: 1.8,
  margin: "22px 0 0",
  maxWidth: "620px",
};

const stepList: React.CSSProperties = {
  display: "grid",
  gap: "12px",
};

const stepItem: React.CSSProperties = {
  background: "#ffffff",
  border: "1.5px solid #DDEAF4",
  borderRadius: "20px",
  padding: "18px",
  display: "grid",
  gridTemplateColumns: "48px 1fr",
  gap: "14px",
  alignItems: "center",
};

const stepNumber: React.CSSProperties = {
  width: "48px",
  height: "48px",
  borderRadius: "16px",
  background: "#EAF4FF",
  color: "#4997E6",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 950,
};

const stepText: React.CSSProperties = {
  color: "#0B1238",
  fontSize: "15px",
  fontWeight: 900,
  margin: 0,
};

const ctaSection: React.CSSProperties = {
  background: "linear-gradient(135deg, #EAF4FF 0%, #FDE8F1 52%, #DDF6F3 100%)",
  padding: "70px 24px",
  textAlign: "center",
};

const ctaTitle: React.CSSProperties = {
  color: "#0B1238",
  fontSize: "clamp(30px, 4vw, 48px)",
  lineHeight: 1.1,
  fontWeight: 950,
  margin: "0 auto 14px",
  maxWidth: "760px",
};

const ctaText: React.CSSProperties = {
  color: "#45546D",
  fontSize: "16px",
  lineHeight: 1.7,
  margin: "0 auto 26px",
  maxWidth: "560px",
};
