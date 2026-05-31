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
  href: "/sinavlar/ap",
},
  {
  title: "IB Diploma",
  category: "IB & Okul Destek",
  description:
    "IB Math AA/AI, Physics, Chemistry, Biology, Economics, Business ve IA / EE / TOK desteği.",
  tags: ["HL / SL", "IA / EE", "Okul destek"],
  href: "/sinavlar/ib",
},
  {
    title: "IELTS & TOEFL",
    category: "İngilizce Yeterlilik",
    description:
      "Listening, Reading, Writing ve Speaking becerileri için hedef skor odaklı hazırlık.",
    tags: ["IELTS 7.5+", "TOEFL 100+", "Speaking"],
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
        background: "linear-gradient(180deg, #F7FBFF 0%, #ffffff 100%)",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
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
                background: "#EAF4FF",
                color: "#4997E6",
                border: "1px solid #CFE7FF",
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
                color: "#0B1238",
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
              border: "1px solid #D7ECFF",
              borderRadius: "28px",
              padding: "26px",
              boxShadow: "0 18px 45px rgba(15, 23, 42, 0.06)",
            }}
          >
            <p
              style={{
                color: "#45546D",
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
                    background: item === "Birebir Ders" ? "#4997E6" : "#F7FBFF",
                    color: item === "Birebir Ders" ? "#ffffff" : "#1F2A44",
                    border: item === "Birebir Ders" ? "none" : "1px solid #DDEAF4",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
            gap: "22px",
          }}
        >
          {programs.map((program) => (
            <article
              key={program.title}
              style={{
                background: "#ffffff",
                border: "1px solid #DDEAF4",
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
                  background: "linear-gradient(135deg, #EAF4FF 0%, #FDE8F1 55%, #DDF6F3 100%)",
                  color: "#0B1238",
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
                  color: "#4997E6",
                  fontSize: "12px",
                  fontWeight: 800,
                  margin: "0 0 8px",
                }}
              >
                {program.category}
              </p>

              <h3
                style={{
                  color: "#0B1238",
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
                  color: "#45546D",
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
                      color: "#1F2A44",
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
      color: "#4997E6",
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
      color: "#4997E6",
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
            background: "linear-gradient(135deg, #EAF4FF 0%, #FDE8F1 55%, #DDF6F3 100%)",
            borderRadius: "32px",
            padding: "34px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                color: "#4997E6",
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
                color: "#0B1238",
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
                color: "#0B1238",
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
