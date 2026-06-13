import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const subjectGroups = [
  "Mathematics AA — HL / SL",
  "Mathematics AI — HL / SL",
  "Biology — HL / SL",
  "Chemistry — HL / SL",
  "Physics — HL / SL",
  "Computer Science — HL / SL",
  "Environmental Systems and Societies — HL / SL",
  "Sports, Exercise and Health Science — HL / SL",
  "Business Management — HL / SL",
  "Economics — HL / SL",
  "History — HL / SL",
  "Geography — HL / SL",
  "Global Politics — HL / SL",
  "Psychology — HL / SL",
  "Philosophy — HL / SL",
  "Digital Society — HL / SL",
  "Language A: Literature — HL / SL",
  "Language A: Language and Literature — HL / SL",
  "Language B — HL / SL",
  "Language ab initio — SL",
  "Visual Arts / Music / Theatre / Film / Dance — HL / SL",
];

const coreItems = [
  {
    title: "IA desteği",
    text: "Konu ve araştırma sorusu seçimi, metodoloji, veri analizi, yapı, akademik yazım ve kaynak gösterme konusunda rehberlik.",
  },
  {
    title: "EE planlama",
    text: "Araştırma sorusunu rafine etme, kaynak tarama stratejisi, taslak planı, kriter analizi ve RPPF refleksiyon süreci.",
  },
  {
    title: "TOK & Essay",
    text: "Prescribed Title ve Exhibition prompt analizi, bilgi soruları, argüman-karşı argüman dengesi ve gerçek hayat örnekleri.",
  },
];

const pathway = [
  ["01", "Seviye ve hedef analizi", "Öğrencinin HL/SL dersleri, okul temposu ve hedef üniversite planı değerlendirilir."],
  ["02", "Ders bazlı çalışma planı", "Her ders için konu eksikleri, sınav takvimi ve haftalık çalışma düzeni oluşturulur."],
  ["03", "IA / EE / TOK takibi", "IB core süreçleri sadece son döneme bırakılmaz; düzenli ara hedeflerle takip edilir."],
  ["04", "Sınav ve GPA dengesi", "Okul sınavları, predicted grade hedefi ve final sınav hazırlığı birlikte planlanır."],
];

const focusAreas = [
  {
    title: "HL / SL ders desteği",
    text: "Öğrencinin aldığı seviyeye göre konu yoğunluğu ve soru tipi farklılaştırılır.",
  },
  {
    title: "Okul sınavlarına hazırlık",
    text: "Ara sınavlar, mock exam ve final dönemi için okul müfredatına paralel destek verilir.",
  },
  {
    title: "Predicted grade hedefi",
    text: "Üniversite başvuruları için kritik olan predicted grade süreci planlı takip edilir.",
  },
  {
    title: "Akademik yazım desteği",
    text: "IA, EE ve TOK süreçlerinde yapı, argüman ve akademik ifade kalitesi geliştirilir.",
  },
];

const faqs = [
  {
    q: "IB desteği sadece final sınavına yönelik mi?",
    a: "Hayır. IB desteği okul sınavları, IA, EE, TOK, predicted grade ve final sınav sürecini birlikte kapsayacak şekilde planlanabilir.",
  },
  {
    q: "HL ve SL dersler ayrı mı planlanıyor?",
    a: "Evet. HL ve SL derslerin konu derinliği ve soru tipi farklı olduğu için çalışma planı öğrencinin seviyesine göre hazırlanır.",
  },
  {
    q: "IA ve EE desteği veriliyor mu?",
    a: "Evet. Konu ve araştırma sorusu seçimi, metodoloji, yapı, veri analizi, akademik yazım, kaynak kullanımı ve süreç takibi alanlarında rehberlik verilir.",
  },
  {
    q: "Mathematics AA ve AI arasındaki fark nedir?",
    a: "AA teorik matematik, cebir, ispat ve analitik düşünmeye; AI ise veri analizi, modelleme, istatistik ve matematiğin gerçek dünya uygulamalarına odaklanır. AA sınavının bir bölümü hesap makinesizken AI tamamen hesap makinesi temellidir.",
  },
  {
    q: "A Plus öğrencinin IA, EE veya TOK çalışmasını yazar mı?",
    a: "Hayır. Destek akademik dürüstlük sınırları içindedir. Öğrenciye yöntem, yapı, analiz ve düşünme süreci öğretilir; metin yazma, veri üretme veya çalışmayı öğrenci adına tamamlama yapılmaz.",
  },
];

export default function IBPage() {
  return (
    <main style={{ background: "#ffffff", color: "#0B1238" }}>
      <Navbar />

      <section
        style={{
          background:
            "radial-gradient(circle at 78% 18%, rgba(47,128,237,0.16), transparent 32%), linear-gradient(180deg, #F7FBFF 0%, #ffffff 100%)",
          padding: "92px 24px 86px",
        }}
      >
        <div
          className="ib-hero"
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 0.95fr)",
            gap: "48px",
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
              <Link href="/" style={backButton}>
                ← Ana sayfaya dön
              </Link>

              <div style={blueBadge}>IB Diploma & Okul Destek</div>
            </div>

            <h1
              style={{
                fontSize: "clamp(42px, 5vw, 72px)",
                lineHeight: "1.02",
                letterSpacing: "-0.06em",
                fontWeight: 950,
                margin: 0,
                maxWidth: "760px",
              }}
            >
              IB öğrencileri için ders, IA, EE ve sınav sürecini birlikte yöneten akademik destek
            </h1>

            <p
              style={{
                color: "#45546D",
                fontSize: "18px",
                lineHeight: "1.85",
                margin: "26px 0 0",
                maxWidth: "700px",
              }}
            >
              A Plus Academy IB programı; öğrencinin HL/SL derslerini, okul sınavlarını,
              IA/EE/TOK süreçlerini ve final sınav hazırlığını tek bir akademik yol
              haritası içinde takip eder.
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
                Ücretsiz Görüşme Planla
              </Link>

              <Link href="/question-bank" style={secondaryButton}>
                IB Takip Sistemini İncele
              </Link>
            </div>
          </div>

          <div
            style={{
              background: "linear-gradient(135deg, #EAF4FF 0%, #FDE8F1 55%, #DDF6F3 100%)",
              color: "#0B1238",
              borderRadius: "42px",
              padding: "34px",
              boxShadow: "0 30px 90px rgba(15, 23, 42, 0.22)",
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
                background: "rgba(239, 74, 133, 0.14)",
                top: "-140px",
                right: "-140px",
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              <p
                style={{
                  color: "#2F6FC2",
                  fontSize: "13px",
                  fontWeight: 950,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  margin: "0 0 18px",
                }}
              >
                IB akademik pusula
              </p>

              <h2
                style={{
                  fontSize: "34px",
                  lineHeight: "1.08",
                  letterSpacing: "-0.045em",
                  fontWeight: 950,
                  margin: "0 0 26px",
                }}
              >
                Ders, core ve final hazırlığı aynı planda
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: "14px",
                }}
              >
                <HeroMetric label="Ders seviyesi" value="HL / SL" />
                <HeroMetric label="Core destek" value="IA / EE / TOK" />
                <HeroMetric label="Hedef" value="40+" />
                <HeroMetric label="Takip" value="GPA + final" />
              </div>

              <div
                style={{
                  marginTop: "22px",
                  background: "#ffffff",
                  border: "1px solid #DDEAF4",
                  borderRadius: "28px",
                  padding: "24px",
                }}
              >
                <p
                  style={{
                    color: "#45546D",
                    fontSize: "15px",
                    lineHeight: "1.75",
                    margin: 0,
                  }}
                >
                  IB’de başarı yalnızca final sınavına hazırlanmakla değil; okul
                  performansı, IA/EE süreçleri ve uzun vadeli akademik planla birlikte
                  yönetilir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "90px 24px" }}>
        <div
          className="ib-core-grid"
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
              background: "linear-gradient(135deg, #EAF4FF 0%, #FDE8F1 55%, #DDF6F3 100%)",
              color: "#0B1238",
              borderRadius: "38px",
              padding: "38px",
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
                width: "320px",
                height: "320px",
                borderRadius: "999px",
                background: "rgba(68, 199, 190, 0.16)",
                right: "-150px",
                bottom: "-150px",
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              <p
                style={{
                  color: "#2F6FC2",
                  fontSize: "13px",
                  fontWeight: 950,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  margin: "0 0 18px",
                }}
              >
                IB core sistemi
              </p>

              <h2
                style={{
                  fontSize: "clamp(34px, 4vw, 54px)",
                  lineHeight: "1.04",
                  letterSpacing: "-0.05em",
                  fontWeight: 950,
                  margin: 0,
                }}
              >
                IA, EE ve TOK son ana bırakılmamalı
              </h2>

              <p
                style={{
                  color: "#45546D",
                  fontSize: "16px",
                  lineHeight: "1.85",
                  margin: "24px 0 0",
                }}
              >
                IB öğrencilerinin en çok zorlandığı nokta, ders yüküyle core
                çalışmalarını aynı anda yönetmektir. Bu nedenle süreç küçük hedeflere
                bölünerek takip edilir.
              </p>
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 1,
                marginTop: "34px",
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "12px",
              }}
              className="core-mini-grid"
            >
              <CoreBox title="IA" text="Internal Assessment" />
              <CoreBox title="EE" text="Extended Essay" />
              <CoreBox title="TOK" text="Theory of Knowledge" />
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gap: "18px",
            }}
          >
            {coreItems.map((item, index) => (
              <article
                key={item.title}
                style={{
                  background: "#ffffff",
                  border: "1px solid #D7ECFF",
                  borderRadius: "30px",
                  padding: "28px",
                  boxShadow: "0 16px 42px rgba(15, 23, 42, 0.06)",
                  display: "grid",
                  gridTemplateColumns: "58px 1fr",
                  gap: "18px",
                  alignItems: "start",
                }}
              >
                <div
                  style={{
                    width: "54px",
                    height: "54px",
                    borderRadius: "18px",
                    background: index === 0 ? "#2F6FC2" : "#EEF7FF",
                    color: index === 0 ? "#ffffff" : "#2F6FC2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 950,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3
                    style={{
                      color: "#0B1238",
                      fontSize: "25px",
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
              maxWidth: "780px",
              margin: "0 auto 44px",
            }}
          >
            <div style={blueBadge}>IB ders desteği</div>

            <h2
              style={{
                fontSize: "clamp(34px, 4vw, 56px)",
                lineHeight: "1.05",
                letterSpacing: "-0.045em",
                fontWeight: 950,
                margin: "20px 0 0",
              }}
            >
              HL / SL dersler için okul ve sınav odaklı destek
            </h2>

            <p
              style={{
                color: "#45546D",
                fontSize: "17px",
                lineHeight: "1.8",
                margin: "20px auto 0",
                maxWidth: "680px",
              }}
            >
              Her IB dersi için konu yoğunluğu, soru tipi ve okul beklentisi farklıdır.
              Bu yüzden destek programı öğrencinin ders kombinasyonuna göre şekillenir.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "16px",
            }}
          >
            {subjectGroups.map((subject, index) => (
              <div
                key={subject}
                style={{
                  background: index % 4 === 0 ? "#EAF4FF" : "#ffffff",
                  color: "#0B1238",
                  border: index % 4 === 0 ? "none" : "1px solid #D7ECFF",
                  borderRadius: "24px",
                  padding: "22px",
                  minHeight: "110px",
                  boxShadow: "0 12px 34px rgba(15, 23, 42, 0.05)",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "16px",
                  fontWeight: 900,
                  lineHeight: "1.35",
                }}
              >
                {subject}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "90px 24px" }}>
        <div
          className="focus-grid"
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.8fr) minmax(0, 1.2fr)",
            gap: "34px",
            alignItems: "start",
          }}
        >
          <div>
            <div style={blueBadge}>A Plus IB modeli</div>

            <h2
              style={{
                fontSize: "clamp(34px, 4vw, 54px)",
                lineHeight: "1.05",
                letterSpacing: "-0.045em",
                fontWeight: 950,
                margin: "20px 0 18px",
              }}
            >
              IB öğrencisinin aynı anda birden çok süreci yönetmesi gerekir
            </h2>

            <p
              style={{
                color: "#45546D",
                fontSize: "16px",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              Ders başarısı, IA/EE/TOK süreci, predicted grade hedefi ve final
              sınav hazırlığı birbirinden bağımsız düşünülmemelidir.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "18px",
            }}
            className="focus-card-grid"
          >
            {focusAreas.map((item, index) => (
              <article
                key={item.title}
                style={{
                  background: index === 0 ? "#EAF4FF" : "#ffffff",
                  color: "#0B1238",
                  border: index === 0 ? "none" : "1px solid #D7ECFF",
                  borderRadius: "30px",
                  padding: "28px",
                  minHeight: index === 0 || index === 3 ? "285px" : "245px",
                  boxShadow: "0 16px 42px rgba(15, 23, 42, 0.06)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "18px",
                    background: index === 0 ? "#2F6FC2" : "#EEF7FF",
                    color: index === 0 ? "#ffffff" : "#2F6FC2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 950,
                    marginBottom: "24px",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: "25px",
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
                      color: index === 0 ? "#45546D" : "#45546D",
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
          background: "#FAFCFF",
          padding: "90px 24px",
        }}
      >
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <div
            className="pathway-head"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 0.8fr) minmax(0, 1.2fr)",
              gap: "34px",
              alignItems: "end",
              marginBottom: "38px",
            }}
          >
            <div>
              <div style={blueBadge}>IB yol haritası</div>

              <h2
                style={{
                  fontSize: "clamp(34px, 4vw, 54px)",
                  lineHeight: "1.05",
                  letterSpacing: "-0.045em",
                  fontWeight: 950,
                  margin: "20px 0 0",
                }}
              >
                Süreç dönem boyunca aşamalı ilerler
              </h2>
            </div>

            <p
              style={{
                color: "#45546D",
                fontSize: "16px",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              IB’de başarı için yalnızca sınav haftasına odaklanmak yeterli değildir.
              Süreç; ders, core ve okul takvimiyle birlikte planlanmalıdır.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "16px",
            }}
            className="pathway-grid"
          >
            {pathway.map(([number, title, text], index) => (
              <article
                key={title}
                style={{
                  background: index === 0 ? "#EAF4FF" : "#ffffff",
                  color: "#0B1238",
                  border: index === 0 ? "none" : "1px solid #D7ECFF",
                  borderRadius: "28px",
                  padding: "24px",
                  minHeight: "260px",
                  boxShadow: "0 14px 36px rgba(15, 23, 42, 0.055)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "16px",
                    background: index === 0 ? "#2F6FC2" : "#EEF7FF",
                    color: index === 0 ? "#ffffff" : "#2F6FC2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 950,
                    marginBottom: "22px",
                  }}
                >
                  {number}
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: "23px",
                      lineHeight: "1.15",
                      fontWeight: 950,
                      letterSpacing: "-0.035em",
                      margin: "0 0 12px",
                    }}
                  >
                    {title}
                  </h3>

                  <p
                    style={{
                      color: index === 0 ? "#45546D" : "#45546D",
                      fontSize: "14px",
                      lineHeight: "1.7",
                      margin: 0,
                    }}
                  >
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#F7FBFF", padding: "90px 24px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <div style={{ maxWidth: "780px", marginBottom: "36px" }}>
            <div style={blueBadge}>Akademik dürüstlük</div>
            <h2
              style={{
                fontSize: "clamp(34px, 4vw, 52px)",
                lineHeight: "1.05",
                letterSpacing: "-0.045em",
                fontWeight: 950,
                margin: "20px 0 0",
              }}
            >
              IA, EE ve TOK desteğinde sınırlar nettir
            </h2>
            <p style={{ color: "#45546D", fontSize: "16px", lineHeight: 1.8, margin: "20px 0 0" }}>
              A Plus Academy, öğrencinin eleştirel düşünme ve bağımsız araştırma
              becerisini geliştirir. Çalışmayı öğrenci adına yazmak, veri üretmek
              veya kaynak gösterilmemiş içerik hazırlamak hizmet kapsamına girmez.
            </p>
          </div>

          <div className="ethics-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "16px" }}>
            {[
              ["IA", "Uygun analiz yöntemini ve formül mantığını öğretiriz; ham veriyi öğrenci adına analiz edip grafiklerini hazırlamayız."],
              ["EE", "Araştırma sorusu, kaynak stratejisi ve argüman akışına geri bildirim veririz; metni satır satır yeniden yazmayız."],
              ["TOK", "Başlığı ve kavramları Sokratik sorularla derinleştiririz; hazır argüman, örnek veya essay şablonu sunmayız."],
            ].map(([title, text]) => (
              <article key={title} style={{ background: "#ffffff", border: "1px solid #D7ECFF", borderRadius: "26px", padding: "26px" }}>
                <h3 style={{ color: "#0B1238", fontSize: "24px", fontWeight: 950, margin: 0 }}>{title}</h3>
                <p style={{ color: "#45546D", fontSize: "15px", lineHeight: 1.75, margin: "12px 0 0" }}>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#ffffff",
          padding: "90px 24px",
        }}
      >
        <div
          className="faq-grid"
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.78fr) minmax(0, 1.22fr)",
            gap: "34px",
          }}
        >
          <div>
            <div style={blueBadge}>Sık sorulan sorular</div>

            <h2
              style={{
                fontSize: "clamp(34px, 4vw, 52px)",
                lineHeight: "1.05",
                letterSpacing: "-0.045em",
                fontWeight: 950,
                margin: "20px 0 0",
              }}
            >
              IB desteği hakkında merak edilenler
            </h2>
          </div>

          <div style={{ display: "grid", gap: "14px" }}>
            {faqs.map((faq) => (
              <article
                key={faq.q}
                style={{
                  background: "#FAFCFF",
                  border: "1px solid #D7ECFF",
                  borderRadius: "26px",
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

      <section style={{ padding: "0 24px 90px" }}>
        <div
          className="ib-cta"
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            background: "linear-gradient(135deg, #EAF4FF 0%, #FDE8F1 55%, #DDF6F3 100%)",
            color: "#0B1238",
            borderRadius: "40px",
            padding: "48px",
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
                fontWeight: 950,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                margin: "0 0 12px",
              }}
            >
              IB yol haritanızı oluşturalım
            </p>

            <h2
              style={{
                fontSize: "36px",
                lineHeight: "1.12",
                fontWeight: 950,
                letterSpacing: "-0.04em",
                margin: 0,
                maxWidth: "780px",
              }}
            >
              Öğrencinin IB derslerine, IA/EE/TOK sürecine ve hedef puanına göre
              en doğru akademik planı birlikte belirleyelim.
            </h2>
          </div>

          <Link href="/contact" style={whiteButton}>
            Görüşme Planla
          </Link>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 980px) {
          .ib-hero,
          .ib-core-grid,
          .focus-grid,
          .pathway-head,
          .faq-grid,
          .ib-cta {
            grid-template-columns: 1fr !important;
          }

          .core-mini-grid,
          .focus-card-grid,
          .pathway-grid {
            grid-template-columns: 1fr !important;
          }

          .ethics-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 600px) {
          .ib-hero h1 {
            font-size: 38px !important;
            line-height: 1.08 !important;
            letter-spacing: -0.045em !important;
          }
        }
      `}</style>
    </main>
  );
}

function HeroMetric({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #DDEAF4",
        borderRadius: "22px",
        padding: "18px",
      }}
    >
      <p style={{ color: "#45546D", fontSize: "13px", margin: "0 0 8px" }}>
        {label}
      </p>
      <strong style={{ color: "#0B1238", fontSize: "18px", fontWeight: 950 }}>
        {value}
      </strong>
    </div>
  );
}

function CoreBox({ title, text }: { title: string; text: string }) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #DDEAF4",
        borderRadius: "22px",
        padding: "18px",
      }}
    >
      <h3
        style={{
          color: "#0B1238",
          fontSize: "28px",
          fontWeight: 950,
          margin: "0 0 8px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#45546D",
          fontSize: "13px",
          lineHeight: "1.55",
          margin: 0,
        }}
      >
        {text}
      </p>
    </div>
  );
}

const backButton = {
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
};

const blueBadge = {
  display: "inline-flex",
  background: "#EAF4FF",
  color: "#2F6FC2",
  border: "1px solid #CFE7FF",
  borderRadius: "999px",
  padding: "9px 16px",
  fontSize: "13px",
  fontWeight: 950,
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
};

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
