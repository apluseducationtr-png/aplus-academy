import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const programStats = [
  ["Hedef Skor", "1400+"],
  ["Format", "Digital SAT"],
  ["Deneme", "Bluebook uyumlu"],
  ["Takip", "Haftalık analiz"],
];

const roadmap = [
  {
    step: "01",
    title: "Seviye analizi",
    text: "Öğrencinin Math ve Reading & Writing seviyesi ilk deneme ve görüşme ile analiz edilir.",
  },
  {
    step: "02",
    title: "Kişisel plan",
    text: "Hedef skor, okul yoğunluğu ve öncelikli eksiklere göre düzenli çalışma planı hazırlanır.",
  },
  {
    step: "03",
    title: "Ders + ödev takibi",
    text: "Birebir veya küçük grup dersleri, düzenli ödev ve konu tekrarlarıyla desteklenir.",
  },
  {
    step: "04",
    title: "Deneme analizi",
    text: "Her deneme sonrası konu bazlı eksikler, süre yönetimi ve hata tipleri incelenir.",
  },
];

const mathTopics = [
  "Algebra",
  "Advanced Math",
  "Problem Solving & Data Analysis",
  "Geometry & Trigonometry",
];

const verbalTopics = [
  "Information and Ideas",
  "Craft and Structure",
  "Expression of Ideas",
  "Standard English Conventions",
];

const advantages = [
  {
    title: "Bluebook formatına uygun hazırlık",
    text: "Öğrenci sınavdan önce dijital arayüze, adaptif yapıya ve zaman yönetimine alışır.",
  },
  {
    title: "Konu bazlı eksik analizi",
    text: "Yanlışlar sadece skor olarak değil, hangi beceriden puan kaybettirdiğiyle değerlendirilir.",
  },
  {
    title: "Hedef skora göre tempo",
    text: "1300, 1400 veya 1500+ hedeflerine göre farklı çalışma yoğunluğu planlanır.",
  },
];

const faqs = [
  {
    q: "Digital SAT hazırlığına ne zaman başlanmalı?",
    a: "Öğrencinin mevcut seviyesine göre değişir. 10. ve 11. sınıfta başlayan öğrenciler için süreç daha rahat ve ölçülebilir ilerler.",
  },
  {
    q: "Dersler online mı yüz yüze mi?",
    a: "Program hem online hem de yüz yüze yürütülebilir. Öğrencinin okul programına göre esnek ders planı yapılır.",
  },
  {
    q: "Deneme sınavları nasıl takip ediliyor?",
    a: "Denemelerden sonra öğrencinin konu bazlı eksikleri, süre yönetimi ve tekrar etmesi gereken alanlar analiz edilir.",
  },
];

export default function DigitalSATPage() {
  return (
    <main style={{ background: "#ffffff", color: "#0B1238" }}>
      <Navbar />

      <section
        style={{
          background:
            "radial-gradient(circle at 82% 18%, rgba(47,128,237,0.18), transparent 34%), linear-gradient(180deg, #F7FBFF 0%, #ffffff 100%)",
          padding: "92px 24px 78px",
          overflow: "hidden",
        }}
      >
        <div
          className="sat-hero"
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 0.95fr)",
            gap: "52px",
            alignItems: "center",
          }}
        >
          <div>
            <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "16px",
    marginBottom: "28px",
  }}
>
  <Link
    href="/"
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      color: "#2F6FC2",
      background: "#ffffff",
      border: "1px solid #D7ECFF",
      borderRadius: "999px",
      padding: "9px 14px",
      fontSize: "14px",
      fontWeight: 900,
      textDecoration: "none",
      boxShadow: "0 8px 24px rgba(15, 23, 42, 0.04)",
    }}
  >
    ← Ana sayfaya dön
  </Link>

  <div
    style={{
      display: "inline-flex",
      background: "#EAF4FF",
      color: "#2F6FC2",
      border: "1px solid #CFE7FF",
      borderRadius: "999px",
      padding: "9px 16px",
      fontSize: "13px",
      fontWeight: 900,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
    }}
  >
    Digital SAT Hazırlık Programı
  </div>
</div>
            <h1
              style={{
                fontSize: "clamp(40px, 4.8vw, 68px)",
                lineHeight: "1.04",
                letterSpacing: "-0.065em",
                fontWeight: 950,
                margin: 0,
                maxWidth: "760px",
              }}
            >
              SAT skorunu hedefe taşıyan kişisel hazırlık sistemi
            </h1>

            <p
              style={{
                color: "#45546D",
                fontSize: "18px",
                lineHeight: "1.85",
                margin: "26px 0 0",
                maxWidth: "680px",
              }}
            >
              A Plus Academy Digital SAT programı; Bluebook uyumlu denemeler,
              konu bazlı analizler, haftalık takip ve hedef skora göre
              kişiselleştirilmiş ders planından oluşur.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginTop: "34px",
              }}
            >
              <Link href="/contact" style={primaryButton}>
                Seviye Analizi Planla
              </Link>

              <Link href="/question-bank" style={secondaryButton}>
                Deneme Sistemini İncele
              </Link>
            </div>
          </div>

          <div
            style={{
              background: "linear-gradient(135deg, #EAF4FF 0%, #FDE8F1 55%, #DDF6F3 100%)",
              borderRadius: "40px",
              padding: "30px",
              color: "#0B1238",
              boxShadow: "0 30px 90px rgba(73,151,230,0.16)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "260px",
                height: "260px",
                borderRadius: "999px",
                background: "rgba(239, 74, 133, 0.14)",
                top: "-120px",
                right: "-100px",
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              <p
                style={{
                  color: "#2F6FC2",
                  fontSize: "13px",
                  fontWeight: 900,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  margin: "0 0 20px",
                }}
              >
                Skor yolculuğu
              </p>

              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #DDEAF4",
                  borderRadius: "30px",
                  padding: "26px",
                  marginBottom: "18px",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto 1fr",
                    alignItems: "center",
                    gap: "16px",
                  }}
                  className="score-row"
                >
                  <div>
                    <p style={scoreLabel}>Başlangıç</p>
                    <strong style={scoreSmall}>1150</strong>
                  </div>

                  <div
                    className="score-connector"
                    style={{
                      width: "54px",
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#1F5AA6",
                      fontSize: "26px",
                      fontWeight: 950,
                    }}
                  >
                    →
                  </div>

                  <div>
                    <p style={scoreLabel}>Hedef</p>
                    <strong style={scoreLarge}>1400+</strong>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: "12px",
                }}
              >
                {programStats.map(([label, value]) => (
                  <div
                    key={label}
                    style={{
                      background: "#ffffff",
                      border: "1px solid #DDEAF4",
                      borderRadius: "22px",
                      padding: "18px",
                    }}
                  >
                    <p
                      style={{
                        color: "#45546D",
                        fontSize: "13px",
                        margin: "0 0 8px",
                      }}
                    >
                      {label}
                    </p>

                    <strong
                      style={{
                        color: "#0B1238",
                        fontSize: "18px",
                        fontWeight: 950,
                      }}
                    >
                      {value}
                    </strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "86px 24px" }}>
        <div
          className="sat-roadmap"
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.88fr) minmax(0, 1.12fr)",
            gap: "34px",
            alignItems: "start",
          }}
        >
          <div
            style={{
              background: "#FAFCFF",
              border: "1px solid #D7ECFF",
              borderRadius: "34px",
              padding: "34px",
              position: "sticky",
              top: "110px",
            }}
          >
            <p
              style={{
                color: "#2F6FC2",
                fontSize: "13px",
                fontWeight: 900,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                margin: "0 0 16px",
              }}
            >
              Program nasıl ilerler?
            </p>

            <h2
              style={{
                fontSize: "42px",
                lineHeight: "1.05",
                letterSpacing: "-0.045em",
                fontWeight: 950,
                margin: "0 0 18px",
              }}
            >
              Her öğrenci için aynı program değil, kişisel yol haritası
            </h2>

            <p
              style={{
                color: "#45546D",
                fontSize: "16px",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              Digital SAT hazırlığında amaç yalnızca konu anlatmak değil;
              öğrencinin doğru zamanda doğru beceriye odaklanmasını sağlamaktır.
            </p>
          </div>

          <div style={{ display: "grid", gap: "16px" }}>
            {roadmap.map((item) => (
              <article
                key={item.title}
                style={{
                  background: "#ffffff",
                  color: "#0B1238",
                  border: "1px solid #DDEAF4",
                  borderRadius: "30px",
                  padding: "28px",
                  boxShadow: "0 16px 42px rgba(15, 23, 42, 0.06)",
                  display: "grid",
                  gridTemplateColumns: "70px 1fr",
                  gap: "18px",
                  alignItems: "start",
                }}
              >
                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    borderRadius: "20px",
                    background: "#EEF7FF",
                    color: "#2F6FC2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "15px",
                    fontWeight: 950,
                  }}
                >
                  {item.step}
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: "24px",
                      lineHeight: "1.15",
                      fontWeight: 950,
                      margin: "0 0 10px",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: "#45546D",
                      fontSize: "15px",
                      lineHeight: "1.75",
                      margin: 0,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#F7FBFF",
          padding: "90px 24px",
        }}
      >
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center",
              maxWidth: "760px",
              margin: "0 auto 46px",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                background: "#EAF4FF",
                color: "#2F6FC2",
                border: "1px solid #CFE7FF",
                borderRadius: "999px",
                padding: "8px 14px",
                fontSize: "13px",
                fontWeight: 900,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "18px",
              }}
            >
              İçerik ve konu takibi
            </div>

            <h2
              style={{
                fontSize: "clamp(36px, 4vw, 58px)",
                lineHeight: "1.05",
                letterSpacing: "-0.045em",
                fontWeight: 950,
                margin: 0,
              }}
            >
              Digital SAT iki ana beceri alanında takip edilir
            </h2>
          </div>

          <div
            className="topic-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "24px",
            }}
          >
            <TopicPanel title="Math" topics={mathTopics} />
            <TopicPanel title="Reading & Writing" topics={verbalTopics} />
          </div>
        </div>
      </section>

      <section style={{ padding: "90px 24px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <div
            className="advantages-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
              gap: "28px",
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                background: "linear-gradient(135deg, #EAF4FF 0%, #FDE8F1 55%, #DDF6F3 100%)",
                borderRadius: "36px",
                padding: "34px",
                color: "#0B1238",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#2F6FC2",
                    fontSize: "13px",
                    fontWeight: 900,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    margin: "0 0 16px",
                  }}
                >
                  A Plus farkı
                </p>

                <h2
                  style={{
                    fontSize: "42px",
                    lineHeight: "1.05",
                    letterSpacing: "-0.045em",
                    fontWeight: 950,
                    margin: 0,
                  }}
                >
                  SAT hazırlığında ölçülebilir ilerleme
                </h2>
              </div>

              <p
                style={{
                  color: "#45546D",
                  fontSize: "16px",
                  lineHeight: "1.8",
                  margin: "28px 0 0",
                }}
              >
                Ders, deneme ve analiz birbirinden ayrı değil; aynı sistemin
                parçaları olarak planlanır.
              </p>
            </div>

            <div style={{ display: "grid", gap: "16px" }}>
              {advantages.map((item, index) => (
                <article
                  key={item.title}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #DDEAF4",
                    borderRadius: "28px",
                    padding: "26px",
                    boxShadow: "0 16px 42px rgba(15, 23, 42, 0.055)",
                  }}
                >
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "16px",
                      background: index === 1 ? "#2F6FC2" : "#C93670",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 950,
                      marginBottom: "18px",
                    }}
                  >
                    A+
                  </div>

                  <h3
                    style={{
                      color: "#0B1238",
                      fontSize: "24px",
                      fontWeight: 950,
                      letterSpacing: "-0.03em",
                      margin: "0 0 10px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: "#45546D",
                      fontSize: "15px",
                      lineHeight: "1.75",
                      margin: 0,
                    }}
                  >
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#FAFCFF",
          padding: "86px 24px",
        }}
      >
        <div
          className="faq-grid"
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.8fr) minmax(0, 1.2fr)",
            gap: "34px",
          }}
        >
          <div>
            <p
              style={{
                color: "#2F6FC2",
                fontSize: "13px",
                fontWeight: 900,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                margin: "0 0 16px",
              }}
            >
              Sık sorulan sorular
            </p>

            <h2
              style={{
                fontSize: "42px",
                lineHeight: "1.05",
                letterSpacing: "-0.045em",
                fontWeight: 950,
                margin: 0,
              }}
            >
              Digital SAT hakkında merak edilenler
            </h2>
          </div>

          <div style={{ display: "grid", gap: "14px" }}>
            {faqs.map((faq) => (
              <article
                key={faq.q}
                style={{
                  background: "#ffffff",
                  border: "1px solid #D7ECFF",
                  borderRadius: "24px",
                  padding: "24px",
                }}
              >
                <h3
                  style={{
                    color: "#0B1238",
                    fontSize: "18px",
                    fontWeight: 950,
                    margin: "0 0 10px",
                  }}
                >
                  {faq.q}
                </h3>

                <p
                  style={{
                    color: "#45546D",
                    fontSize: "15px",
                    lineHeight: "1.75",
                    margin: 0,
                  }}
                >
                  {faq.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "86px 24px" }}>
        <div
          className="sat-cta"
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            background: "linear-gradient(135deg, #EAF4FF 0%, #FDE8F1 55%, #DDF6F3 100%)",
            color: "#0B1238",
            borderRadius: "38px",
            padding: "46px",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) auto",
            gap: "28px",
            alignItems: "center",
            boxShadow: "0 24px 70px rgba(73,151,230,0.14)",
          }}
        >
          <div>
            <p
              style={{
                color: "#2F6FC2",
                fontSize: "13px",
                fontWeight: 900,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                margin: "0 0 12px",
              }}
            >
              Digital SAT yol haritanızı oluşturalım
            </p>

            <h2
              style={{
                fontSize: "36px",
                lineHeight: "1.12",
                fontWeight: 950,
                letterSpacing: "-0.04em",
                margin: 0,
                maxWidth: "760px",
              }}
            >
              Öğrencinin hedef skoruna ve mevcut seviyesine göre en doğru
              başlangıç planını birlikte belirleyelim.
            </h2>
          </div>

          <Link href="/contact" style={whiteButton}>
            Görüşme Planla
          </Link>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 950px) {
          .sat-hero,
          .sat-roadmap,
          .topic-grid,
          .advantages-grid,
          .faq-grid,
          .sat-cta {
            grid-template-columns: 1fr !important;
          }

          .score-row {
            grid-template-columns: 1fr !important;
          }

          .score-connector {
            justify-content: flex-start !important;
            transform: rotate(90deg);
            transform-origin: 16px center;
          }
        }

        @media (max-width: 600px) {
          .sat-hero h1 {
            font-size: 38px !important;
            line-height: 1.08 !important;
            letter-spacing: -0.045em !important;
          }
        }
      `}</style>
    </main>
  );
}

function TopicPanel({
  title,
  topics,
}: {
  title: string;
  topics: string[];
}) {
  return (
    <div
      style={{
        background: "#ffffff",
        color: "#0B1238",
        border: "1px solid #D7ECFF",
        borderRadius: "34px",
        padding: "32px",
        boxShadow: "0 18px 48px rgba(15, 23, 42, 0.06)",
      }}
    >
      <h3
        style={{
          fontSize: "32px",
          lineHeight: "1.1",
          fontWeight: 950,
          letterSpacing: "-0.04em",
          margin: "0 0 24px",
        }}
      >
        {title}
      </h3>

      <div style={{ display: "grid", gap: "12px" }}>
        {topics.map((topic) => (
          <div
            key={topic}
            style={{
              background: "#F7FAFD",
              border: "1px solid #D7ECFF",
              borderRadius: "18px",
              padding: "16px 18px",
              color: "#0B1238",
              fontSize: "15px",
              fontWeight: 900,
            }}
          >
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
}

const primaryButton = {
  background: "#2F6FC2",
  color: "#ffffff",
  borderRadius: "999px",
  padding: "14px 22px",
  fontSize: "14px",
  fontWeight: 950,
  textDecoration: "none",
};

const secondaryButton = {
  background: "#ffffff",
  color: "#0B1238",
  border: "1px solid #D7ECFF",
  borderRadius: "999px",
  padding: "14px 22px",
  fontSize: "14px",
  fontWeight: 950,
  textDecoration: "none",
};

const whiteButton = {
  background: "#ffffff",
  color: "#0B1238",
  borderRadius: "999px",
  padding: "15px 24px",
  fontSize: "14px",
  fontWeight: 950,
  textDecoration: "none",
  whiteSpace: "nowrap" as const,
};

const scoreLabel = {
  color: "#45546D",
  fontSize: "13px",
  fontWeight: 900,
  margin: "0 0 8px",
};

const scoreSmall = {
  color: "#5F718A",
  fontSize: "46px",
  lineHeight: 1,
  fontWeight: 950,
  letterSpacing: "-0.055em",
};

const scoreLarge = {
  color: "#0B1238",
  fontSize: "52px",
  lineHeight: 1,
  fontWeight: 950,
  letterSpacing: "-0.055em",
};
