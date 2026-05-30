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
        background: "#06122b",
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
          background: "rgba(47, 128, 237, 0.18)",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "42px",
            alignItems: "center",
            marginBottom: "48px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                background: "rgba(147, 197, 253, 0.14)",
                color: "#93c5fd",
                border: "1px solid rgba(147, 197, 253, 0.28)",
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
                color: "#ffffff",
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
              color: "#cbd5e1",
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
            gridTemplateColumns: "minmax(0, 1.25fr) minmax(320px, 0.75fr)",
            gap: "24px",
          }}
          className="testimonial-layout"
        >
          <article
            style={{
              background: "#ffffff",
              borderRadius: "36px",
              padding: "34px",
              boxShadow: "0 28px 80px rgba(0, 0, 0, 0.28)",
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
                    color: "#2f80ed",
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
                    color: "#06122b",
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
                  background: "#eff6ff",
                  color: "#2f80ed",
                  border: "1px solid #dbeafe",
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
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "26px",
                  padding: "24px",
                }}
              >
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "13px",
                    fontWeight: 800,
                    margin: "0 0 8px",
                  }}
                >
                  Başlangıç
                </p>

                <div
                  style={{
                    color: "#94a3b8",
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
                  background: "#2f80ed",
                  color: "#ffffff",
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
                  background: "#06122b",
                  borderRadius: "26px",
                  padding: "24px",
                }}
              >
                <p
                  style={{
                    color: "#93c5fd",
                    fontSize: "13px",
                    fontWeight: 800,
                    margin: "0 0 8px",
                  }}
                >
                  Hedef sonuç
                </p>

                <div
                  style={{
                    color: "#ffffff",
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
                  background: "#2f80ed",
                  color: "#ffffff",
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
                    color: "#334155",
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
                        color: "#334155",
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
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.14)",
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
                        color: "#ffffff",
                        fontSize: "22px",
                        fontWeight: 950,
                        margin: "0 0 4px",
                      }}
                    >
                      {item.exam}
                    </h3>

                    <p
                      style={{
                        color: "#93c5fd",
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
                      color: "#cbd5e1",
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
                      color: "#94a3b8",
                      fontSize: "28px",
                      fontWeight: 950,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {item.before}
                  </span>

                  <span
                    style={{
                      color: "#60a5fa",
                      fontSize: "20px",
                      fontWeight: 950,
                    }}
                  >
                    →
                  </span>

                  <span
                    style={{
                      color: "#ffffff",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
          }}
        >
          {trackingItems.map((item) => (
            <div
              key={item.title}
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.14)",
                borderRadius: "24px",
                padding: "22px",
              }}
            >
              <p
                style={{
                  color: "#60a5fa",
                  fontSize: "13px",
                  fontWeight: 950,
                  margin: "0 0 12px",
                }}
              >
                {item.number}
              </p>

              <h3
                style={{
                  color: "#ffffff",
                  fontSize: "18px",
                  fontWeight: 950,
                  margin: "0 0 8px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
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