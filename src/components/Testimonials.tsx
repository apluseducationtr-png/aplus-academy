const featuredResult = {
  exam: "Digital SAT",
  before: "1150",
  after: "1420",
  increase: "+270",
  period: "3 ay",
  quote:
    "Deneme analizleri ve haftalık takip sayesinde hangi konulara çalışmam gerektiğini net şekilde gördüm.",
  focus: ["Bluebook denemeleri", "Konu analizi", "Haftalık takip"],
};

const results = [
  {
    exam: "IELTS",
    before: "6.0",
    after: "8.0",
    period: "4 ay",
    label: "Writing & Speaking",
  },
  {
    exam: "IB Diploma",
    before: "34",
    after: "43",
    period: "8 ay",
    label: "HL / SL destek",
  },
  {
    exam: "AP",
    before: "3",
    after: "5",
    period: "1 dönem",
    label: "FRQ stratejisi",
  },
];

const trackingItems = [
  {
    number: "01",
    title: "Deneme analizi",
    text: "Her deneme sonrası konu bazlı hata analizi yapılır.",
  },
  {
    number: "02",
    title: "Kişisel yol haritası",
    text: "Öğrencinin hedef skoruna göre haftalık plan oluşturulur.",
  },
  {
    number: "03",
    title: "Veli bilgilendirme",
    text: "Süreç düzenli olarak öğrenci ve veliyle paylaşılır.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="basarilar"
      style={{
        background: "linear-gradient(135deg, #EAF4FF 0%, #FDE8F1 55%, #DDF6F3 100%)",
        padding: "96px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "520px",
          height: "520px",
          borderRadius: "999px",
          background: "rgba(68, 199, 190, 0.16)",
          top: "-220px",
          right: "-180px",
        }}
      />

      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
            gap: "42px",
            alignItems: "center",
            marginBottom: "48px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                background: "#EAF4FF",
                color: "#4997E6",
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
              Öğrenci Başarıları
            </div>

            <h2
              style={{
                color: "#0B1238",
                fontSize: "clamp(36px, 4vw, 58px)",
                lineHeight: "1.05",
                letterSpacing: "-0.045em",
                fontWeight: 950,
                margin: 0,
                maxWidth: "650px",
              }}
            >
              Başarıyı yalnızca dersle değil, sistemli takip ile büyütüyoruz
            </h2>
          </div>

          <p
            style={{
              color: "#45546D",
              fontSize: "17px",
              lineHeight: "1.85",
              margin: 0,
              maxWidth: "560px",
            }}
          >
            A Plus Academy’de öğrencilerin gelişimi deneme sonuçları, konu
            eksikleri, ödev takibi ve hedef skor planıyla düzenli olarak
            izlenir. Böylece süreç hem öğrenci hem de veli için görünür hale
            gelir.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.25fr) minmax(0, 0.75fr)",
            gap: "24px",
          }}
          className="testimonial-layout"
        >
          <article
            style={{
              background: "#ffffff",
              borderRadius: "36px",
              padding: "34px",
              boxShadow: "0 24px 70px rgba(73, 151, 230, 0.14)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "24px",
                alignItems: "flex-start",
                marginBottom: "36px",
              }}
              className="testimonial-feature-head"
            >
              <div>
                <p
                  style={{
                    color: "#4997E6",
                    fontSize: "13px",
                    fontWeight: 900,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    margin: "0 0 10px",
                  }}
                >
                  Öne çıkan gelişim
                </p>

                <h3
                  style={{
                    color: "#0B1238",
                    fontSize: "32px",
                    lineHeight: "1.1",
                    fontWeight: 950,
                    margin: 0,
                  }}
                >
                  {featuredResult.exam}
                </h3>
              </div>

              <div
                style={{
                  background: "#EEF7FF",
                  color: "#4997E6",
                  border: "1px solid #D7ECFF",
                  borderRadius: "999px",
                  padding: "10px 16px",
                  fontSize: "13px",
                  fontWeight: 900,
                  whiteSpace: "nowrap",
                }}
              >
                {featuredResult.period}
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr",
                gap: "18px",
                alignItems: "center",
                marginBottom: "34px",
              }}
              className="score-grid"
            >
              <div
                style={{
                  background: "#F7FBFF",
                  border: "1px solid #DDEAF4",
                  borderRadius: "26px",
                  padding: "24px",
                }}
              >
                <p
                  style={{
                    color: "#6E7F97",
                    fontSize: "13px",
                    fontWeight: 800,
                    margin: "0 0 8px",
                  }}
                >
                  Başlangıç
                </p>

                <div
                  style={{
                    color: "#7E91A9",
                    fontSize: "54px",
                    lineHeight: 1,
                    fontWeight: 950,
                    letterSpacing: "-0.06em",
                  }}
                >
                  {featuredResult.before}
                </div>
              </div>

              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "999px",
                  background: "#4997E6",
                  color: "#0B1238",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                  fontWeight: 950,
                }}
              >
                →
              </div>

              <div
                style={{
                  background: "linear-gradient(135deg, #EAF4FF 0%, #FDE8F1 55%, #DDF6F3 100%)",
                  borderRadius: "26px",
                  padding: "24px",
                }}
              >
                <p
                  style={{
                    color: "#4997E6",
                    fontSize: "13px",
                    fontWeight: 800,
                    margin: "0 0 8px",
                  }}
                >
                  Hedef sonuç
                </p>

                <div
                  style={{
                    color: "#0B1238",
                    fontSize: "64px",
                    lineHeight: 1,
                    fontWeight: 950,
                    letterSpacing: "-0.06em",
                  }}
                >
                  {featuredResult.after}
                </div>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "0.55fr 1fr",
                gap: "24px",
                alignItems: "stretch",
              }}
              className="quote-grid"
            >
              <div
                style={{
                  background: "#4997E6",
                  color: "#0B1238",
                  borderRadius: "26px",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 900,
                    margin: "0 0 8px",
                    opacity: 0.85,
                  }}
                >
                  Toplam artış
                </p>

                <div
                  style={{
                    fontSize: "46px",
                    lineHeight: 1,
                    fontWeight: 950,
                    letterSpacing: "-0.05em",
                  }}
                >
                  {featuredResult.increase}
                </div>
              </div>

              <div>
                <p
                  style={{
                    color: "#1F2A44",
                    fontSize: "17px",
                    lineHeight: "1.8",
                    margin: "0 0 20px",
                  }}
                >
                  “{featuredResult.quote}”
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                  }}
                >
                  {featuredResult.focus.map((item) => (
                    <span
                      key={item}
                      style={{
                        background: "#f1f5f9",
                        color: "#1F2A44",
                        borderRadius: "999px",
                        padding: "8px 12px",
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
          </article>

          <div
            style={{
              display: "grid",
              gap: "16px",
            }}
          >
            {results.map((item) => (
              <article
                key={item.exam}
                style={{
                  background: "#ffffff",
                  border: "1px solid #DDEAF4",
                  borderRadius: "28px",
                  padding: "24px",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                    marginBottom: "18px",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        color: "#0B1238",
                        fontSize: "22px",
                        fontWeight: 950,
                        margin: "0 0 4px",
                      }}
                    >
                      {item.exam}
                    </h3>

                    <p
                      style={{
                        color: "#4997E6",
                        fontSize: "13px",
                        fontWeight: 800,
                        margin: 0,
                      }}
                    >
                      {item.label}
                    </p>
                  </div>

                  <span
                    style={{
                      color: "#45546D",
                      fontSize: "13px",
                      fontWeight: 800,
                    }}
                  >
                    {item.period}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      color: "#7E91A9",
                      fontSize: "28px",
                      fontWeight: 950,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {item.before}
                  </span>

                  <span
                    style={{
                      color: "#78B7F4",
                      fontSize: "20px",
                      fontWeight: 950,
                    }}
                  >
                    →
                  </span>

                  <span
                    style={{
                      color: "#0B1238",
                      fontSize: "42px",
                      lineHeight: 1,
                      fontWeight: 950,
                      letterSpacing: "-0.05em",
                    }}
                  >
                    {item.after}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: "28px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
            gap: "16px",
          }}
        >
          {trackingItems.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#ffffff",
                border: "1px solid #DDEAF4",
                borderRadius: "24px",
                padding: "22px",
              }}
            >
              <p
                style={{
                  color: "#78B7F4",
                  fontSize: "13px",
                  fontWeight: 950,
                  margin: "0 0 12px",
                }}
              >
                {item.number}
              </p>

              <h3
                style={{
                  color: "#0B1238",
                  fontSize: "18px",
                  fontWeight: 950,
                  margin: "0 0 8px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#45546D",
                  fontSize: "14px",
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonial-layout {
            grid-template-columns: 1fr !important;
          }

          .score-grid {
            grid-template-columns: 1fr !important;
          }

          .quote-grid {
            grid-template-columns: 1fr !important;
          }

          .testimonial-feature-head {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
}