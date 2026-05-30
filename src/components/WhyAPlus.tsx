const features = [
  {
    title: "Kişisel yol haritası",
    text: "Öğrencinin hedefi, başlangıç seviyesi ve sınav tarihine göre haftalık bir çalışma planı oluşturulur.",
  },
  {
    title: "Deneme ve analiz sistemi",
    text: "Deneme sonuçları yalnızca skor olarak değil; konu, süre yönetimi ve hata tipi bazında değerlendirilir.",
  },
  {
    title: "Uzman eğitmen kadrosu",
    text: "Her sınav için alanına odaklanan, sınav formatını ve öğrenci psikolojisini bilen eğitmenlerle çalışılır.",
  },
  {
    title: "Veli bilgilendirme",
    text: "Süreç boyunca öğrencinin gelişimi, eksikleri ve bir sonraki hedefleri düzenli olarak aileyle paylaşılır.",
  },
];

const steps = [
  "Seviye analizi",
  "Kişisel plan",
  "Ders + ödev takibi",
  "Deneme analizi",
  "Hedef skor",
];

export default function WhyAPlus() {
  return (
    <section
      id="neden-aplus"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f4f9ff 100%)",
        padding: "96px 24px",
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
            textAlign: "center",
            maxWidth: "760px",
            margin: "0 auto 52px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              background: "#eef6ff",
              color: "#2f80ed",
              border: "1px solid #d7e9ff",
              borderRadius: "999px",
              padding: "8px 14px",
              fontSize: "13px",
              fontWeight: 900,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "18px",
            }}
          >
            Neden A Plus?
          </div>

          <h2
            style={{
              color: "#06122b",
              fontSize: "clamp(36px, 4vw, 58px)",
              lineHeight: "1.05",
              letterSpacing: "-0.045em",
              fontWeight: 950,
              margin: 0,
            }}
          >
            Sadece ders değil, uçtan uca akademik takip sistemi
          </h2>

          <p
            style={{
              color: "#475569",
              fontSize: "17px",
              lineHeight: "1.85",
              margin: "22px auto 0",
              maxWidth: "680px",
            }}
          >
            A Plus Academy’de öğrenciler yalnızca konu anlatımı almaz. Her
            öğrenci için hedef, plan, deneme, analiz ve geri bildirim döngüsü
            birlikte yürütülür.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
            gap: "28px",
            alignItems: "stretch",
          }}
          className="why-layout"
        >
          <div
            style={{
              background: "#06122b",
              borderRadius: "36px",
              padding: "34px",
              color: "#ffffff",
              position: "relative",
              overflow: "hidden",
              minHeight: "560px",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "320px",
                height: "320px",
                borderRadius: "999px",
                background: "rgba(47, 128, 237, 0.24)",
                right: "-140px",
                top: "-120px",
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              <p
                style={{
                  color: "#93c5fd",
                  fontSize: "13px",
                  fontWeight: 900,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  margin: "0 0 14px",
                }}
              >
                A Plus çalışma modeli
              </p>

              <h3
                style={{
                  fontSize: "36px",
                  lineHeight: "1.08",
                  letterSpacing: "-0.04em",
                  fontWeight: 950,
                  margin: "0 0 28px",
                  maxWidth: "420px",
                }}
              >
                Her öğrencinin süreci görünür ve ölçülebilir olmalı.
              </h3>

              <div
                style={{
                  display: "grid",
                  gap: "14px",
                  marginTop: "34px",
                }}
              >
                {steps.map((step, index) => (
                  <div
                    key={step}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "48px 1fr",
                      gap: "14px",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "16px",
                        background:
                          index === steps.length - 1
                            ? "#2f80ed"
                            : "rgba(255,255,255,0.1)",
                        border:
                          index === steps.length - 1
                            ? "none"
                            : "1px solid rgba(255,255,255,0.16)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        fontWeight: 950,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div
                      style={{
                        background:
                          index === steps.length - 1
                            ? "rgba(47, 128, 237, 0.18)"
                            : "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: "18px",
                        padding: "15px 18px",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          color: "#ffffff",
                          fontSize: "16px",
                          fontWeight: 900,
                        }}
                      >
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "34px",
                  padding: "22px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: "24px",
                }}
              >
                <p
                  style={{
                    color: "#cbd5e1",
                    fontSize: "15px",
                    lineHeight: "1.75",
                    margin: 0,
                  }}
                >
                  Bu sistem sayesinde öğrenci hangi konuda eksik olduğunu,
                  hangi denemede neden puan kaybettiğini ve bir sonraki hafta
                  neye odaklanması gerektiğini net şekilde görür.
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "20px",
            }}
            className="why-feature-grid"
          >
            {features.map((feature, index) => (
              <article
                key={feature.title}
                style={{
                  background: "#ffffff",
                  border: "1px solid #dbeafe",
                  borderRadius: "30px",
                  padding: "28px",
                  boxShadow: "0 16px 42px rgba(15, 23, 42, 0.06)",
                  minHeight: index === 0 || index === 3 ? "270px" : "230px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "18px",
                      background: index % 2 === 0 ? "#2f80ed" : "#06122b",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                      fontWeight: 950,
                      marginBottom: "22px",
                    }}
                  >
                    A+
                  </div>

                  <h3
                    style={{
                      color: "#06122b",
                      fontSize: "24px",
                      lineHeight: "1.15",
                      fontWeight: 950,
                      letterSpacing: "-0.03em",
                      margin: "0 0 14px",
                    }}
                  >
                    {feature.title}
                  </h3>

                  <p
                    style={{
                      color: "#475569",
                      fontSize: "15px",
                      lineHeight: "1.75",
                      margin: 0,
                    }}
                  >
                    {feature.text}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: "26px",
                    height: "6px",
                    width: "100%",
                    background: "#eef6ff",
                    borderRadius: "999px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${55 + index * 12}%`,
                      height: "100%",
                      background: index % 2 === 0 ? "#2f80ed" : "#06122b",
                      borderRadius: "999px",
                    }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 950px) {
          .why-layout {
            grid-template-columns: 1fr !important;
          }

          .why-feature-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}