import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sınavlar | APlus Academy",
  description:
    "APlus Academy SAT, AP, IB, IELTS, TOEFL, A-Level, IGCSE, IMAT, UCAT, LNAT, GMAT ve GRE hazırlık programları.",
};

const examGroups = [
  {
    title: "ABD Sınavları",
    text: "SAT, ACT, AP, GMAT ve GRE için hedef skor odaklı hazırlık.",
    color: "#EAF4FF",
    border: "#CFE7FF",
    items: ["Digital SAT", "ACT", "AP", "GMAT", "GRE"],
    href: "/sinavlar/digital-sat",
  },
  {
    title: "IB & A-Level",
    text: "IB Diploma, A-Level ve IGCSE dersleri için okul destek ve sınav hazırlığı.",
    color: "#FDE8F1",
    border: "#F8BFD4",
    items: ["IB", "A-Level", "IGCSE"],
    href: "/sinavlar/ib",
  },
  {
    title: "İngilizce Sınavları",
    text: "IELTS, TOEFL ve PTE için speaking, writing, reading ve listening desteği.",
    color: "#DDF6F3",
    border: "#9BE4DE",
    items: ["IELTS", "TOEFL", "PTE"],
  },
  {
    title: "Tıp & Hukuk",
    text: "IMAT, UCAT ve LNAT için reasoning, science, reading ve essay hazırlığı.",
    color: "#EEE7FF",
    border: "#CBBBF0",
    items: ["IMAT", "UCAT", "LNAT"],
  },
  {
    title: "Okul Destek",
    text: "Uluslararası okul öğrencileri için GPA, ders takibi ve sınav programı.",
    color: "#FFF8DC",
    border: "#F6D36E",
    items: ["Math", "Physics", "Chemistry", "Economics"],
  },
];

export default function ExamsPage() {
  return (
    <main>
      <Navbar />
      <section style={heroSection}>
        <div style={container}>
          <Link href="/" style={backLink}>← Ana sayfaya dön</Link>
          <p style={eyebrow}>Sınav Programları</p>
          <h1 style={heroTitle}>Hedefinize uygun sınav hazırlık yolunu birlikte seçelim</h1>
          <p style={heroText}>
            Her öğrencinin hedefi, takvimi ve başlangıç seviyesi farklıdır. Bu yüzden
            programlar ders, deneme, analiz ve takip adımlarıyla kişiselleştirilir.
          </p>
        </div>
      </section>

      <section style={{ padding: "76px 24px", background: "#ffffff" }}>
        <div style={gridContainer}>
          {examGroups.map((group) => (
            <article
              key={group.title}
              style={{
                ...card,
                background: group.color,
                border: `2px solid ${group.border}`,
              }}
            >
              <h2 style={cardTitle}>{group.title}</h2>
              <p style={cardText}>{group.text}</p>
              <div style={pillRow}>
                {group.items.map((item) => (
                  <span key={item} style={pill}>{item}</span>
                ))}
              </div>
              {group.href ? (
                <Link href={group.href} style={textLink}>Detayları incele →</Link>
              ) : (
                <Link href="/contact" style={textLink}>Program sor →</Link>
              )}
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}

const container: React.CSSProperties = {
  maxWidth: "1080px",
  margin: "0 auto",
};

const gridContainer: React.CSSProperties = {
  maxWidth: "1080px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
  gap: "18px",
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
  fontSize: "clamp(42px, 5vw, 70px)",
  lineHeight: 1.04,
  fontWeight: 950,
  margin: 0,
  maxWidth: "860px",
};

const heroText: React.CSSProperties = {
  color: "#45546D",
  fontSize: "18px",
  lineHeight: 1.8,
  margin: "24px 0 0",
  maxWidth: "720px",
};

const card: React.CSSProperties = {
  borderRadius: "24px",
  padding: "26px",
  minHeight: "290px",
  display: "flex",
  flexDirection: "column",
};

const cardTitle: React.CSSProperties = {
  color: "#0B1238",
  fontSize: "26px",
  lineHeight: 1.15,
  fontWeight: 950,
  margin: "0 0 14px",
};

const cardText: React.CSSProperties = {
  color: "#45546D",
  fontSize: "15px",
  lineHeight: 1.75,
  margin: 0,
  flex: 1,
};

const pillRow: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  marginTop: "22px",
};

const pill: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #DDEAF4",
  borderRadius: "999px",
  color: "#1F2A44",
  fontSize: "12px",
  fontWeight: 800,
  padding: "6px 10px",
};

const textLink: React.CSSProperties = {
  color: "#4997E6",
  fontSize: "14px",
  fontWeight: 950,
  marginTop: "24px",
  textDecoration: "none",
};
