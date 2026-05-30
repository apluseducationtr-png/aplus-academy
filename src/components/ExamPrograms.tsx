import Link from "next/link";
const programs = [
  {
  title: "Digital SAT",
  category: "ABD Üniversite Başvuruları",
  description:
    "Bluebook formatına uygun denemeler, konu analizi ve hedef skora yönelik kişisel çalışma planı.",
  tags: ["1400+ hedef", "Math", "Reading & Writing"],
  href: "/sinavlar/digital-sat",
},
  {
    title: "AP Programları",
    category: "Advanced Placement",
    description:
      "AP Calculus, Physics, Economics, Chemistry, Biology, Statistics ve diğer AP dersleri için uzman destek.",
    tags: ["4-5 hedef", "FRQ", "MCQ"],
  },
  {
    title: "IB Diploma",
    category: "IB & Okul Destek",
    description:
      "IB Math AA/AI, Physics, Chemistry, Biology, Economics, Business ve IA / EE / TOK desteği.",
    tags: ["HL / SL", "IA / EE", "Okul destek"],
  },
  {
    title: "IELTS & TOEFL",
    category: "İngilizce Yeterlilik",
    description:
      "Listening, Reading, Writing ve Speaking becerileri için hedef skor odaklı hazırlık.",
    tags: ["IELTS 7.5+", "TOEFL 100+", "Speaking"],
  },
  {
    title: "YÖS",
    category: "Türkiye Üniversiteleri",
    description:
      "Uluslararası öğrenciler için matematik, geometri ve IQ ağırlıklı YÖS hazırlık programı.",
    tags: ["Matematik", "IQ", "Türkiye"],
  },
  {
    title: "IMAT, UCAT, LNAT",
    category: "Tıp & Hukuk Başvuruları",
    description:
      "Tıp ve hukuk hedefleyen öğrenciler için reasoning, reading, essay ve science odaklı hazırlık.",
    tags: ["Medicine", "Law", "UK / Italy"],
  },
  {
    title: "A-Level & IGCSE",
    category: "Uluslararası Müfredat",
    description:
      "Cambridge, Edexcel ve AQA müfredatlarına yönelik okul destek ve sınav hazırlık dersleri.",
    tags: ["A-Level", "IGCSE", "School"],
  },
  {
    title: "Okul Destek",
    category: "Lise & Uluslararası Okullar",
    description:
      "UAA, SAC, TAC, ACI ve uluslararası okul öğrencileri için ders, sınav ve GPA desteği.",
    tags: ["IB", "AP", "GPA"],
  },
];

export default function ExamPrograms() {
  return (
    <section
      id="programlar"
      style={{
        background: "linear-gradient(180deg, #f4f9ff 0%, #ffffff 100%)",
        padding: "90px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
            alignItems: "end",
            marginBottom: "42px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#eaf3ff",
                color: "#2f80ed",
                border: "1px solid #d7e9ff",
                borderRadius: "999px",
                padding: "8px 14px",
                fontSize: "13px",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              Programlarımız
            </div>

            <h2
              style={{
                fontSize: "clamp(34px, 4vw, 56px)",
                lineHeight: "1.05",
                letterSpacing: "-0.04em",
                fontWeight: 900,
                color: "#06122b",
                maxWidth: "620px",
                margin: 0,
              }}
            >
              Hedefinize uygun sınav hazırlık programını seçin
            </h2>
          </div>

          <div
            style={{
              background: "#ffffff",
              border: "1px solid #dbeafe",
              borderRadius: "28px",
              padding: "26px",
              boxShadow: "0 18px 45px rgba(15, 23, 42, 0.06)",
            }}
          >
            <p
              style={{
                color: "#475569",
                fontSize: "16px",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              A Plus Academy’de öğrencinin hedefi, mevcut seviyesi ve zaman
              planı analiz edilir. Ardından birebir ders, küçük grup veya
              deneme-analiz destekli kişisel bir hazırlık süreci oluşturulur.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginTop: "20px",
              }}
            >
              {["Birebir Ders", "Küçük Grup", "Deneme & Analiz"].map((item) => (
                <span
                  key={item}
                  style={{
                    background: item === "Birebir Ders" ? "#2f80ed" : "#f8fafc",
                    color: item === "Birebir Ders" ? "#ffffff" : "#334155",
                    border: item === "Birebir Ders" ? "none" : "1px solid #e2e8f0",
                    borderRadius: "999px",
                    padding: "9px 14px",
                    fontSize: "13px",
                    fontWeight: 800,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "22px",
          }}
        >
          {programs.map((program) => (
            <article
              key={program.title}
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "28px",
                padding: "26px",
                minHeight: "270px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 12px 35px rgba(15, 23, 42, 0.055)",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "16px",
                  background: "#06122b",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "18px",
                  marginBottom: "20px",
                }}
              >
                {program.title.charAt(0)}
              </div>

              <p
                style={{
                  color: "#2f80ed",
                  fontSize: "12px",
                  fontWeight: 800,
                  margin: "0 0 8px",
                }}
              >
                {program.category}
              </p>

              <h3
                style={{
                  color: "#06122b",
                  fontSize: "24px",
                  lineHeight: "1.15",
                  fontWeight: 900,
                  margin: "0 0 14px",
                }}
              >
                {program.title}
              </h3>

              <p
                style={{
                  color: "#475569",
                  fontSize: "15px",
                  lineHeight: "1.7",
                  margin: 0,
                  flex: 1,
                }}
              >
                {program.description}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginTop: "22px",
                }}
              >
                {program.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "#f1f5f9",
                      color: "#334155",
                      borderRadius: "999px",
                      padding: "6px 10px",
                      fontSize: "12px",
                      fontWeight: 700,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {program.href ? (
  <Link
    href={program.href}
    style={{
      marginTop: "22px",
      color: "#2f80ed",
      fontSize: "14px",
      fontWeight: 900,
      textAlign: "left",
      textDecoration: "none",
    }}
  >
    Detayları İncele →
  </Link>
) : (
  <button
    style={{
      marginTop: "22px",
      background: "transparent",
      border: "none",
      padding: 0,
      color: "#2f80ed",
      fontSize: "14px",
      fontWeight: 900,
      textAlign: "left",
      cursor: "pointer",
    }}
  >
    Detayları İncele →
  </button>
)}
            </article>
          ))}
        </div>

        <div
          style={{
            marginTop: "34px",
            background: "#06122b",
            borderRadius: "32px",
            padding: "34px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                color: "#93c5fd",
                fontSize: "13px",
                fontWeight: 900,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                margin: "0 0 12px",
              }}
            >
              Nereden başlayacağınızı bilmiyor musunuz?
            </p>

            <h3
              style={{
                color: "#ffffff",
                fontSize: "30px",
                lineHeight: "1.15",
                fontWeight: 900,
                margin: 0,
                maxWidth: "620px",
              }}
            >
              Öğrencinin seviyesine ve hedef skoruna göre en doğru programı
              birlikte belirleyelim.
            </h3>
          </div>

          <div style={{ textAlign: "right" }}>
            <button
              style={{
                background: "#ffffff",
                color: "#06122b",
                border: "none",
                borderRadius: "999px",
                padding: "15px 24px",
                fontSize: "14px",
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              Ücretsiz Görüşme Planla
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}