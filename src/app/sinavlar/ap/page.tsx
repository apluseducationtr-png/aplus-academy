import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stemSubjects = [
  "AP Calculus AB / BC",
  "AP Physics 1 / 2 / C",
  "AP Chemistry",
  "AP Biology",
  "AP Statistics",
  "AP Computer Science A",
];

const humanitiesSubjects = [
  "AP Microeconomics",
  "AP Macroeconomics",
  "AP Psychology",
  "AP English Language",
  "AP English Literature",
  "AP World / US / European History",
];

const labItems = [
  {
    title: "MCQ pratiği",
    text: "Konu bilgisi, hız ve seçenek eleme stratejileri birlikte çalışılır.",
  },
  {
    title: "FRQ cevap dili",
    text: "Puan kazandıran açıklama formatı ve rubric mantığı öğretilir.",
  },
  {
    title: "Çıkmış soru analizi",
    text: "College Board tarzı soru dili ve sık tekrar eden soru kalıpları incelenir.",
  },
  {
    title: "Final tekrar planı",
    text: "Sınava yakın dönemde konu tekrarları ve deneme çözüm temposu netleştirilir.",
  },
];

const timeline = [
  {
    phase: "01",
    title: "Ders seçimi",
    text: "Öğrencinin aldığı AP dersi, okul müfredatı ve hedef skoru belirlenir.",
  },
  {
    phase: "02",
    title: "Konu haritası",
    text: "Ünite ünite eksikler çıkarılır ve haftalık çalışma planı oluşturulur.",
  },
  {
    phase: "03",
    title: "MCQ + FRQ",
    text: "Konu öğrenimi sınav formatına uygun soru çözümüyle desteklenir.",
  },
  {
    phase: "04",
    title: "Sınav provası",
    text: "Final dönemde deneme, tekrar ve strateji çalışmaları yoğunlaşır.",
  },
];

const forWho = [
  "AP sınavında 4 veya 5 hedefleyen öğrenciler",
  "Okul AP derslerinde GPA desteğine ihtiyaç duyan öğrenciler",
  "FRQ cevap formatında zorlanan öğrenciler",
  "Sınava kısa süre kala yoğun tekrar kampı arayan öğrenciler",
];

const faqs = [
  {
    q: "AP dersleri okul desteği olarak da alınabilir mi?",
    a: "Evet. AP programları yalnızca final sınavına değil, okul derslerine ve dönem içi sınavlara destek olacak şekilde de planlanabilir.",
  },
  {
    q: "FRQ çalışması her AP dersi için yapılıyor mu?",
    a: "FRQ ağırlığı derse göre değişir; ancak cevap formatı, açıklama kalitesi ve rubric mantığı AP hazırlığının önemli bir parçasıdır.",
  },
  {
    q: "AP kamp programları açılıyor mu?",
    a: "Sınav dönemine yakın AP Calculus, Physics, Economics, Statistics ve benzeri derslerde yoğun tekrar ve soru çözüm kampları açılabilir.",
  },
];

export default function APPage() {
  return (
    <main style={{ background: "#ffffff", color: "#06122b" }}>
      <Navbar />

      <section
        style={{
          background: "#06122b",
          color: "#ffffff",
          padding: "92px 24px",
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
            background: "rgba(47,128,237,0.22)",
            right: "-180px",
            top: "-210px",
          }}
        />

        <div
          className="ap-hero-unique"
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.95fr) minmax(360px, 1.05fr)",
            gap: "48px",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "16px",
                marginBottom: "30px",
              }}
            >
              <Link href="/" style={backButtonDark}>
                ← Ana sayfaya dön
              </Link>

              <div style={blueBadgeDark}>AP Hazırlık Programları</div>
            </div>

            <h1
              style={{
                fontSize: "clamp(40px, 4.8vw, 70px)",
                lineHeight: "1.02",
                letterSpacing: "-0.06em",
                fontWeight: 950,
                margin: 0,
                maxWidth: "780px",
              }}
            >
              AP’de 4-5 hedefi için ders bazlı hazırlık ve FRQ stratejisi
            </h1>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "18px",
                lineHeight: "1.85",
                margin: "26px 0 0",
                maxWidth: "690px",
              }}
            >
              A Plus Academy AP programları, öğrencinin aldığı derse göre
              kişiselleştirilir. Konu anlatımı, okul desteği, MCQ pratiği, FRQ
              cevap formatı ve final tekrar süreci birlikte planlanır.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginTop: "34px",
              }}
            >
              <Link href="/iletisim" style={primaryButton}>
                Ücretsiz Görüşme Planla
              </Link>

              <Link href="/question-bank" style={darkSecondaryButton}>
                AP Deneme Sistemini İncele
              </Link>
            </div>
          </div>

          <div
            style={{
              background: "#ffffff",
              color: "#06122b",
              borderRadius: "40px",
              padding: "30px",
              boxShadow: "0 34px 95px rgba(0,0,0,0.32)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "18px",
                alignItems: "flex-start",
                marginBottom: "24px",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#2f80ed",
                    fontSize: "13px",
                    fontWeight: 950,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    margin: "0 0 10px",
                  }}
                >
                  AP command center
                </p>

                <h2
                  style={{
                    fontSize: "32px",
                    lineHeight: "1.08",
                    letterSpacing: "-0.045em",
                    fontWeight: 950,
                    margin: 0,
                  }}
                >
                  Ders, okul ve sınav aynı planda takip edilir
                </h2>
              </div>

              <div
                style={{
                  width: "58px",
                  height: "58px",
                  borderRadius: "20px",
                  background: "#06122b",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: 950,
                  flexShrink: 0,
                }}
              >
                AP
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "14px",
              }}
            >
              <MetricBox label="Hedef skor" value="4-5" />
              <MetricBox label="Format" value="MCQ + FRQ" />
              <MetricBox label="Ders alanı" value="20+ AP" />
              <MetricBox label="Destek" value="Okul + sınav" />
            </div>

            <div
              style={{
                marginTop: "20px",
                display: "grid",
                gap: "12px",
              }}
            >
              <ProgressRow label="Konu takibi" value="92%" />
              <ProgressRow label="FRQ pratiği" value="84%" />
              <ProgressRow label="Deneme analizi" value="76%" />
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "linear-gradient(180deg, #f4f9ff 0%, #ffffff 100%)",
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
            <div style={blueBadgeLight}>AP ders alanları</div>

            <h2
              style={{
                color: "#06122b",
                fontSize: "clamp(36px, 4vw, 58px)",
                lineHeight: "1.05",
                letterSpacing: "-0.045em",
                fontWeight: 950,
                margin: "18px 0 0",
              }}
            >
              Her AP dersi aynı şekilde çalışılmaz
            </h2>

            <p
              style={{
                color: "#475569",
                fontSize: "17px",
                lineHeight: "1.8",
                margin: "20px auto 0",
                maxWidth: "680px",
              }}
            >
              Calculus, Physics, Economics veya English gibi farklı AP dersleri
              için soru tipi, FRQ dili ve tekrar stratejisi farklı planlanır.
            </p>
          </div>

          <div
            className="subject-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "24px",
            }}
          >
            <SubjectPanel title="STEM & quantitative AP" subjects={stemSubjects} dark />
            <SubjectPanel
              title="Social sciences & English AP"
              subjects={humanitiesSubjects}
            />
          </div>
        </div>
      </section>

      <section style={{ padding: "90px 24px" }}>
        <div
          className="frq-lab"
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.92fr) minmax(0, 1.08fr)",
            gap: "28px",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              background: "#06122b",
              color: "#ffffff",
              borderRadius: "38px",
              padding: "36px",
              minHeight: "520px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "300px",
                height: "300px",
                borderRadius: "999px",
                background: "rgba(47,128,237,0.2)",
                right: "-140px",
                bottom: "-140px",
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              <p
                style={{
                  color: "#93c5fd",
                  fontSize: "13px",
                  fontWeight: 950,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  margin: "0 0 18px",
                }}
              >
                AP sınav laboratuvarı
              </p>

              <h2
                style={{
                  fontSize: "clamp(34px, 4vw, 52px)",
                  lineHeight: "1.04",
                  letterSpacing: "-0.05em",
                  fontWeight: 950,
                  margin: 0,
                }}
              >
                AP başarısı sadece konu bilmekle gelmez
              </h2>

              <p
                style={{
                  color: "#cbd5e1",
                  fontSize: "16px",
                  lineHeight: "1.85",
                  margin: "24px 0 0",
                }}
              >
                AP sınavlarında öğrencinin bilgiyi doğru formatta, doğru
                açıklama diliyle ve süre içinde kullanabilmesi gerekir. Bu
                nedenle MCQ ve FRQ çalışmaları birlikte yürütülür.
              </p>
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 1,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: "28px",
                padding: "24px",
                marginTop: "30px",
              }}
            >
              <p
                style={{
                  color: "#93c5fd",
                  fontSize: "13px",
                  fontWeight: 900,
                  margin: "0 0 8px",
                }}
              >
                Temel odak
              </p>

              <p
                style={{
                  color: "#ffffff",
                  fontSize: "22px",
                  lineHeight: "1.35",
                  fontWeight: 950,
                  margin: 0,
                }}
              >
                Konu bilgisi + sınav formatı + puanlama mantığı
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "18px",
            }}
            className="lab-grid"
          >
            {labItems.map((item, index) => (
              <article
                key={item.title}
                style={{
                  background: "#ffffff",
                  border: "1px solid #dbeafe",
                  borderRadius: "30px",
                  padding: "28px",
                  boxShadow: "0 16px 42px rgba(15, 23, 42, 0.06)",
                  minHeight: index === 0 || index === 3 ? "260px" : "220px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "18px",
                    background: index % 2 === 0 ? "#2f80ed" : "#06122b",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: 950,
                    marginBottom: "22px",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3
                    style={{
                      color: "#06122b",
                      fontSize: "24px",
                      lineHeight: "1.15",
                      letterSpacing: "-0.035em",
                      fontWeight: 950,
                      margin: "0 0 12px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: "#475569",
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
          background: "#f8fbff",
          padding: "90px 24px",
        }}
      >
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <div
            className="timeline-head"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 0.85fr) minmax(0, 1.15fr)",
              gap: "34px",
              alignItems: "end",
              marginBottom: "38px",
            }}
          >
            <div>
              <div style={blueBadgeLight}>Hazırlık akışı</div>

              <h2
                style={{
                  color: "#06122b",
                  fontSize: "clamp(34px, 4vw, 54px)",
                  lineHeight: "1.05",
                  letterSpacing: "-0.045em",
                  fontWeight: 950,
                  margin: "18px 0 0",
                }}
              >
                AP süreci aşama aşama takip edilir
              </h2>
            </div>

            <p
              style={{
                color: "#475569",
                fontSize: "16px",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              Program, öğrencinin hangi AP dersini aldığına ve sınava ne kadar
              süre kaldığına göre farklılaşır. Ama her öğrencide süreç aynı
              temel mantıkla takip edilir.
            </p>
          </div>

          <div
            className="timeline-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "16px",
            }}
          >
            {timeline.map((item, index) => (
              <article
                key={item.title}
                style={{
                  background: index === 0 ? "#06122b" : "#ffffff",
                  color: index === 0 ? "#ffffff" : "#06122b",
                  border: index === 0 ? "none" : "1px solid #dbeafe",
                  borderRadius: "28px",
                  padding: "24px",
                  minHeight: "250px",
                  boxShadow: "0 14px 36px rgba(15, 23, 42, 0.055)",
                }}
              >
                <p
                  style={{
                    color: index === 0 ? "#93c5fd" : "#2f80ed",
                    fontSize: "13px",
                    fontWeight: 950,
                    margin: "0 0 18px",
                  }}
                >
                  {item.phase}
                </p>

                <h3
                  style={{
                    fontSize: "22px",
                    lineHeight: "1.15",
                    letterSpacing: "-0.035em",
                    fontWeight: 950,
                    margin: "0 0 12px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: index === 0 ? "#cbd5e1" : "#475569",
                    fontSize: "14px",
                    lineHeight: "1.7",
                    margin: 0,
                  }}
                >
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "90px 24px" }}>
        <div
          className="forwho-grid"
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
            gap: "28px",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              background: "#06122b",
              color: "#ffffff",
              borderRadius: "36px",
              padding: "34px",
            }}
          >
            <p
              style={{
                color: "#93c5fd",
                fontSize: "13px",
                fontWeight: 950,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                margin: "0 0 16px",
              }}
            >
              Kimler için uygun?
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
              AP dersini daha stratejik yönetmek isteyen öğrenciler
            </h2>
          </div>

          <div style={{ display: "grid", gap: "14px" }}>
            {forWho.map((item, index) => (
              <div
                key={item}
                style={{
                  background: "#ffffff",
                  border: "1px solid #dbeafe",
                  borderRadius: "24px",
                  padding: "22px",
                  display: "grid",
                  gridTemplateColumns: "46px 1fr",
                  gap: "16px",
                  alignItems: "center",
                  boxShadow: "0 12px 32px rgba(15, 23, 42, 0.045)",
                }}
              >
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "16px",
                    background: index === 0 ? "#2f80ed" : "#eff6ff",
                    color: index === 0 ? "#ffffff" : "#2f80ed",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 950,
                  }}
                >
                  {index + 1}
                </div>

                <p
                  style={{
                    color: "#06122b",
                    fontSize: "16px",
                    lineHeight: "1.55",
                    fontWeight: 850,
                    margin: 0,
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#f4f9ff",
          padding: "86px 24px",
        }}
      >
        <div
          className="ap-faq"
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
                color: "#2f80ed",
                fontSize: "13px",
                fontWeight: 950,
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
              AP hazırlığı hakkında merak edilenler
            </h2>
          </div>

          <div style={{ display: "grid", gap: "14px" }}>
            {faqs.map((faq) => (
              <article
                key={faq.q}
                style={{
                  background: "#ffffff",
                  border: "1px solid #dbeafe",
                  borderRadius: "24px",
                  padding: "24px",
                }}
              >
                <h3
                  style={{
                    color: "#06122b",
                    fontSize: "18px",
                    fontWeight: 950,
                    margin: "0 0 10px",
                  }}
                >
                  {faq.q}
                </h3>

                <p
                  style={{
                    color: "#475569",
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
          className="ap-cta"
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            background: "#06122b",
            color: "#ffffff",
            borderRadius: "38px",
            padding: "46px",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) auto",
            gap: "28px",
            alignItems: "center",
            boxShadow: "0 28px 80px rgba(15, 23, 42, 0.18)",
          }}
        >
          <div>
            <p
              style={{
                color: "#93c5fd",
                fontSize: "13px",
                fontWeight: 950,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                margin: "0 0 12px",
              }}
            >
              AP yol haritanızı oluşturalım
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
              Öğrencinin AP dersine, hedef skoruna ve sınav tarihine göre en
              doğru başlangıç planını birlikte belirleyelim.
            </h2>
          </div>

          <Link href="/iletisim" style={whiteButton}>
            Görüşme Planla
          </Link>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 950px) {
          .ap-hero-unique,
          .subject-grid,
          .frq-lab,
          .timeline-head,
          .forwho-grid,
          .ap-faq,
          .ap-cta {
            grid-template-columns: 1fr !important;
          }

          .timeline-grid,
          .lab-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

function MetricBox({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        background: "#f8fbff",
        border: "1px solid #dbeafe",
        borderRadius: "22px",
        padding: "18px",
      }}
    >
      <p
        style={{
          color: "#64748b",
          fontSize: "13px",
          margin: "0 0 8px",
        }}
      >
        {label}
      </p>

      <strong
        style={{
          color: "#06122b",
          fontSize: "18px",
          fontWeight: 950,
        }}
      >
        {value}
      </strong>
    </div>
  );
}

function ProgressRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
          marginBottom: "8px",
        }}
      >
        <span
          style={{
            color: "#334155",
            fontSize: "13px",
            fontWeight: 850,
          }}
        >
          {label}
        </span>

        <span
          style={{
            color: "#2f80ed",
            fontSize: "13px",
            fontWeight: 950,
          }}
        >
          {value}
        </span>
      </div>

      <div
        style={{
          height: "8px",
          background: "#eff6ff",
          borderRadius: "999px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: value,
            height: "100%",
            background: "#2f80ed",
            borderRadius: "999px",
          }}
        />
      </div>
    </div>
  );
}

function SubjectPanel({
  title,
  subjects,
  dark = false,
}: {
  title: string;
  subjects: string[];
  dark?: boolean;
}) {
  return (
    <div
      style={{
        background: dark ? "#06122b" : "#ffffff",
        color: dark ? "#ffffff" : "#06122b",
        border: dark ? "none" : "1px solid #dbeafe",
        borderRadius: "34px",
        padding: "32px",
        boxShadow: "0 18px 48px rgba(15, 23, 42, 0.06)",
      }}
    >
      <h3
        style={{
          fontSize: "30px",
          lineHeight: "1.1",
          fontWeight: 950,
          letterSpacing: "-0.04em",
          margin: "0 0 24px",
        }}
      >
        {title}
      </h3>

      <div style={{ display: "grid", gap: "12px" }}>
        {subjects.map((subject) => (
          <div
            key={subject}
            style={{
              background: dark ? "rgba(255,255,255,0.08)" : "#f8fbff",
              border: dark ? "1px solid rgba(255,255,255,0.14)" : "1px solid #dbeafe",
              borderRadius: "18px",
              padding: "16px 18px",
              color: dark ? "#ffffff" : "#06122b",
              fontSize: "15px",
              fontWeight: 900,
            }}
          >
            {subject}
          </div>
        ))}
      </div>
    </div>
  );
}

const backButtonDark = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  color: "#ffffff",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.16)",
  borderRadius: "999px",
  padding: "9px 14px",
  fontSize: "14px",
  fontWeight: 900,
  textDecoration: "none",
  boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
};

const blueBadgeDark = {
  display: "inline-flex",
  background: "rgba(147,197,253,0.14)",
  color: "#93c5fd",
  border: "1px solid rgba(147,197,253,0.28)",
  borderRadius: "999px",
  padding: "9px 16px",
  fontSize: "13px",
  fontWeight: 950,
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
};

const blueBadgeLight = {
  display: "inline-flex",
  background: "#eaf3ff",
  color: "#2f80ed",
  border: "1px solid #d7e9ff",
  borderRadius: "999px",
  padding: "9px 16px",
  fontSize: "13px",
  fontWeight: 950,
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
};

const primaryButton = {
  background: "#2f80ed",
  color: "#ffffff",
  borderRadius: "999px",
  padding: "14px 22px",
  fontSize: "14px",
  fontWeight: 950,
  textDecoration: "none",
};

const darkSecondaryButton = {
  background: "rgba(255,255,255,0.08)",
  color: "#ffffff",
  border: "1px solid rgba(255,255,255,0.18)",
  borderRadius: "999px",
  padding: "14px 22px",
  fontSize: "14px",
  fontWeight: 950,
  textDecoration: "none",
};

const whiteButton = {
  background: "#ffffff",
  color: "#06122b",
  borderRadius: "999px",
  padding: "15px 24px",
  fontSize: "14px",
  fontWeight: 950,
  textDecoration: "none",
  whiteSpace: "nowrap" as const,
};