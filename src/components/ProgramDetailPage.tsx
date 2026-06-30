import type { CSSProperties } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FeaturePanelSection } from "@/components/MarketingSections";

type ProgramDetailPageProps = {
  badge: string;
  title: string;
  intro: string;
  metrics: Array<[string, string]>;
  focusTitle: string;
  focusText: string;
  focusItems: string[];
  pathway: Array<[string, string, string]>;
  faqs: Array<[string, string]>;
};

export default function ProgramDetailPage({
  badge,
  title,
  intro,
  metrics,
  focusTitle,
  focusText,
  focusItems,
  pathway,
  faqs,
}: ProgramDetailPageProps) {
  return (
    <main>
      <Navbar />

      <section style={heroSection}>
        <div style={heroGrid} className="program-hero-grid">
          <div>
            <Link href="/" style={backButton}>← Ana sayfaya dön</Link>
            <div style={badgeStyle}>{badge}</div>
            <h1 style={heroTitle} className="program-hero-title">{title}</h1>
            <p style={heroText}>{intro}</p>
            <div style={buttonRow}>
              <Link href="/contact" style={primaryButton}>Görüşme planla</Link>
              <Link href="/question-bank" style={secondaryButton}>Deneme sistemini incele</Link>
            </div>
          </div>

          <aside style={metricPanel} className="program-metric-panel">
            <p style={panelEyebrow}>Program özeti</p>
            <div style={metricGrid} className="program-metric-grid">
              {metrics.map(([label, value]) => (
                <div key={label} style={metricBox}>
                  <span style={metricLabel}>{label}</span>
                  <strong style={metricValue}>{value}</strong>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section style={{ padding: "86px 24px", background: "#ffffff" }}>
        <div style={splitGrid}>
          <div style={focusPanel}>
            <p style={panelEyebrow}>{focusTitle}</p>
            <h2 style={sectionTitle}>{focusText}</h2>
          </div>

          <div style={itemGrid}>
            {focusItems.map((item, index) => (
              <article key={item} style={itemCard}>
                <span style={numberStyle}>{String(index + 1).padStart(2, "0")}</span>
                <h3 style={itemTitle}>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "86px 24px", background: "#F7FBFF" }}>
        <div style={container}>
          <div style={{ marginBottom: "34px", maxWidth: "760px" }}>
            <p style={panelEyebrow}>Yol haritası</p>
            <h2 style={sectionTitle}>Süreç ölçülebilir adımlarla ilerler</h2>
          </div>

          <div style={pathwayGrid}>
            {pathway.map(([step, heading, text]) => (
              <article key={heading} style={pathwayCard}>
                <span style={numberStyle}>{step}</span>
                <h3 style={itemTitle}>{heading}</h3>
                <p style={smallText}>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <p style={panelEyebrow}>Program seçenekleri</p>
            <h2 style={sectionTitle}>Öğrencinin ihtiyacına göre farklı çalışma modelleri</h2>
            <p style={smallText}>
              Başlangıç seviyesi, ders ihtiyacı ve hedefe göre birebir, küçük grup
              veya interaktif online çalışma modeli belirlenir.
            </p>
          </div>
          <div className="card-grid card-grid-3">
            {[
              ["Birebir akademik destek", "Seviye tespiti ve konu ihtiyaçlarına göre öğrenciye özel ders akışı."],
              ["Küçük grup dersleri", "Benzer seviyedeki öğrenciler için etkileşimli ve sınırlı katılımlı çalışma ortamı."],
              ["İnteraktif online ders", "Canlı anlatım, ekran paylaşımı, dijital tahta ve derse özel materyallerle çalışma."],
            ].map(([heading, text], index) => (
              <article className="content-card" key={heading}>
                <h3>{heading}</h3>
                <p>{text}</p>
                <div className="tag-row">
                  <span className="tag">{["Kişisel plan", "Maksimum 6 öğrenci", "Canlı ve etkileşimli"][index]}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FeaturePanelSection
        eyebrow="Ders dışı akademik destek"
        title="Ders saati dışında da devam eden takip sistemi"
        text="Ders anlatımı; düzenli pratik, ölçme, geri bildirim ve gelişim paylaşımıyla tamamlanır."
        items={[
          { title: "Güncel kaynaklar", text: "Programın sınav veya müfredat yapısına uygun dijital kaynaklar ve soru setleri kullanılır." },
          { title: "Ödev ve geri bildirim", text: "Ders sonrasında verilen çalışmalar takip edilir, anlaşılmayan noktalar sonraki çalışmaya taşınır." },
          { title: "Deneme ve eksik analizi", text: "Uygun programlarda sınav formatındaki çalışmalar değerlendirilerek öncelikli eksikler belirlenir." },
          { title: "Öğrenci ve veli bilgilendirmesi", text: "Gelişim, tamamlanan çalışmalar ve sıradaki akademik hedefler düzenli biçimde paylaşılır." },
        ]}
      />

      <section style={{ padding: "86px 24px" }}>
        <div style={faqGrid}>
          <div>
            <p style={panelEyebrow}>Sık sorulan sorular</p>
            <h2 style={sectionTitle}>Program hakkında merak edilenler</h2>
          </div>

          <div style={{ display: "grid", gap: "14px" }}>
            {faqs.map(([question, answer]) => (
              <article key={question} style={faqCard}>
                <h3 style={faqTitle}>{question}</h3>
                <p style={smallText}>{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 86px" }}>
        <div style={ctaBand}>
          <div>
            <p style={panelEyebrow}>Başlangıç planı</p>
            <h2 style={{ ...sectionTitle, marginBottom: 0 }}>
              Öğrencinin hedefi ve mevcut seviyesine göre en doğru programı birlikte belirleyelim.
            </h2>
          </div>
          <Link href="/contact" style={primaryButton}>Görüşme planla</Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 760px) {
          .program-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }

          .program-hero-title {
            font-size: 38px !important;
            line-height: 1.08 !important;
          }

          .program-metric-panel {
            padding: 22px !important;
            border-radius: 26px !important;
          }
        }

        @media (max-width: 420px) {
          .program-hero-title {
            font-size: 34px !important;
          }

          .program-metric-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <Footer />
    </main>
  );
}

const container: CSSProperties = {
  maxWidth: "1180px",
  margin: "0 auto",
};

const heroSection: CSSProperties = {
  background: "linear-gradient(135deg, #EAF4FF 0%, #FDE8F1 52%, #DDF6F3 100%)",
  padding: "88px 24px",
};

const heroGrid: CSSProperties = {
  ...container,
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) minmax(min(380px, 100%), 0.8fr)",
  gap: "38px",
  alignItems: "center",
};

const backButton: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  color: "#2F6FC2",
  background: "#ffffff",
  border: "1px solid #DDEAF4",
  borderRadius: "999px",
  padding: "9px 14px",
  fontSize: "14px",
  fontWeight: 900,
  textDecoration: "none",
  marginBottom: "18px",
  whiteSpace: "nowrap",
};

const badgeStyle: CSSProperties = {
  display: "inline-flex",
  color: "#2F6FC2",
  background: "#ffffff",
  border: "1px solid #DDEAF4",
  borderRadius: "999px",
  padding: "9px 16px",
  fontSize: "13px",
  fontWeight: 950,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  marginBottom: "22px",
};

const heroTitle: CSSProperties = {
  color: "#0B1238",
  fontSize: "clamp(42px, 5vw, 72px)",
  lineHeight: 1.03,
  fontWeight: 950,
  margin: 0,
};

const heroText: CSSProperties = {
  color: "#45546D",
  fontSize: "18px",
  lineHeight: 1.8,
  margin: "24px 0 0",
};

const buttonRow: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
  marginTop: "32px",
};

const primaryButton: CSSProperties = {
  background: "#2F6FC2",
  color: "#ffffff",
  borderRadius: "999px",
  padding: "14px 22px",
  fontSize: "14px",
  fontWeight: 950,
  textDecoration: "none",
  whiteSpace: "nowrap",
};

const secondaryButton: CSSProperties = {
  background: "#ffffff",
  color: "#0B1238",
  border: "1px solid #DDEAF4",
  borderRadius: "999px",
  padding: "14px 22px",
  fontSize: "14px",
  fontWeight: 950,
  textDecoration: "none",
};

const metricPanel: CSSProperties = {
  background: "#ffffff",
  border: "1px solid #DDEAF4",
  borderRadius: "32px",
  padding: "28px",
  boxShadow: "0 24px 70px rgba(73,151,230,0.12)",
};

const panelEyebrow: CSSProperties = {
  color: "#1F5AA6",
  fontSize: "13px",
  fontWeight: 950,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  margin: "0 0 14px",
};

const metricGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "12px",
};

const metricBox: CSSProperties = {
  background: "#F7FBFF",
  border: "1px solid #DDEAF4",
  borderRadius: "20px",
  padding: "16px",
};

const metricLabel: CSSProperties = {
  color: "#45546D",
  display: "block",
  fontSize: "12px",
  marginBottom: "6px",
};

const metricValue: CSSProperties = {
  color: "#0B1238",
  fontSize: "18px",
  fontWeight: 950,
};

const splitGrid: CSSProperties = {
  ...container,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
  gap: "26px",
  alignItems: "stretch",
};

const focusPanel: CSSProperties = {
  background: "#DDF6F3",
  border: "1px solid #9BE4DE",
  borderRadius: "30px",
  padding: "30px",
};

const sectionTitle: CSSProperties = {
  color: "#0B1238",
  fontSize: "clamp(32px, 4vw, 50px)",
  lineHeight: 1.08,
  fontWeight: 950,
  margin: 0,
};

const itemGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))",
  gap: "14px",
};

const itemCard: CSSProperties = {
  background: "#ffffff",
  border: "1px solid #DDEAF4",
  borderRadius: "22px",
  padding: "22px",
};

const numberStyle: CSSProperties = {
  color: "#1F5AA6",
  fontSize: "13px",
  fontWeight: 950,
};

const itemTitle: CSSProperties = {
  color: "#0B1238",
  fontSize: "21px",
  lineHeight: 1.2,
  fontWeight: 950,
  margin: "14px 0 0",
};

const pathwayGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
  gap: "16px",
};

const pathwayCard: CSSProperties = {
  background: "#ffffff",
  border: "1px solid #DDEAF4",
  borderRadius: "24px",
  padding: "24px",
};

const smallText: CSSProperties = {
  color: "#45546D",
  fontSize: "15px",
  lineHeight: 1.75,
  margin: "12px 0 0",
};

const faqGrid: CSSProperties = {
  ...container,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
  gap: "28px",
};

const faqCard: CSSProperties = {
  background: "#ffffff",
  border: "1px solid #DDEAF4",
  borderRadius: "22px",
  padding: "22px",
};

const faqTitle: CSSProperties = {
  color: "#0B1238",
  fontSize: "18px",
  fontWeight: 950,
  margin: 0,
};

const ctaBand: CSSProperties = {
  ...container,
  background: "linear-gradient(135deg, #EAF4FF 0%, #FDE8F1 52%, #DDF6F3 100%)",
  borderRadius: "30px",
  padding: "34px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
  gap: "24px",
  alignItems: "center",
};
