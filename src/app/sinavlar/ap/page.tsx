import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StudentTestimonials from "@/components/StudentTestimonials";

const apCourseCategories = [
  {
    title: "Sanat",
    officialTitle: "Arts",
    description: "Görsel üretim, sanat tarihi ve müzik teorisi odaklı AP dersleri.",
    courses: [
      "AP 2-D Art and Design",
      "AP 3-D Art and Design",
      "AP Drawing",
      "AP Art History",
      "AP Music Theory",
    ],
  },
  {
    title: "İngilizce",
    officialTitle: "English",
    description: "Akademik okuma, retorik analiz, yazma ve edebiyat incelemesi.",
    courses: [
      "AP English Language and Composition",
      "AP English Literature and Composition",
    ],
  },
  {
    title: "Tarih ve Sosyal Bilimler",
    officialTitle: "History and Social Sciences",
    description: "Tarih, ekonomi, psikoloji, coğrafya ve siyaset alanlarını kapsayan dersler.",
    courses: [
      "AP African American Studies",
      "AP Comparative Government and Politics",
      "AP European History",
      "AP Human Geography",
      "AP Macroeconomics",
      "AP Microeconomics",
      "AP Psychology",
      "AP United States Government and Politics",
      "AP United States History",
      "AP World History: Modern",
    ],
  },
  {
    title: "Matematik ve Bilgisayar Bilimleri",
    officialTitle: "Math and Computer Science",
    description: "Matematiksel modelleme, analiz, istatistik ve bilgisayar bilimi dersleri.",
    courses: [
      "AP Calculus AB",
      "AP Calculus BC",
      "AP Computer Science A",
      "AP Computer Science Principles",
      "AP Precalculus",
      "AP Statistics",
    ],
  },
  {
    title: "Fen Bilimleri",
    officialTitle: "Sciences",
    description: "Biyoloji, kimya, çevre bilimi ve farklı fizik yaklaşımlarını içeren dersler.",
    courses: [
      "AP Biology",
      "AP Chemistry",
      "AP Environmental Science",
      "AP Physics 1: Algebra-Based",
      "AP Physics 2: Algebra-Based",
      "AP Physics C: Electricity and Magnetism",
      "AP Physics C: Mechanics",
    ],
  },
  {
    title: "Dünya Dilleri ve Kültürleri",
    officialTitle: "AP World Languages and Cultures",
    description: "Dil yeterliliğini kültürel bağlam, iletişim ve metin analiziyle birleştiren dersler.",
    courses: [
      "AP Chinese Language and Culture",
      "AP French Language and Culture",
      "AP German Language and Culture",
      "AP Italian Language and Culture",
      "AP Japanese Language and Culture",
      "AP Latin",
      "AP Spanish Language and Culture",
      "AP Spanish Literature and Culture",
    ],
  },
  {
    title: "AP Capstone Diploma Programı",
    officialTitle: "AP Capstone Diploma Program",
    description: "Araştırma, akademik argüman, kaynak değerlendirme ve sunum becerilerine odaklanır.",
    courses: ["AP Research", "AP Seminar"],
  },
  {
    title: "AP Career Kickstart",
    officialTitle: "AP Career Kickstart",
    description: "İşletme, kişisel finans ve siber güvenlik alanlarında kariyer bağlantılı dersler.",
    courses: ["AP Business with Personal Finance", "AP Cybersecurity"],
  },
];

const labItems = [
  {
    title: "MCQ ve FRQ",
    text: "Yazılı sınavlarda çoktan seçmeli ve açık uçlu bölümler dersin resmî yapısına göre çalışılır.",
  },
  {
    title: "Portfolyo",
    text: "Art and Design derslerinde eser seçimi, süreç dokümantasyonu ve portfolyo beklentileri takip edilir.",
  },
  {
    title: "Performans görevi",
    text: "Capstone ve ilgili derslerde araştırma, sunum ve performans görevleri akademik dürüstlük içinde desteklenir.",
  },
  {
    title: "Resmî soru ve ölçütler",
    text: "Yayımlanmış sorular, puanlama ölçütleri ve dersin değerlendirme dili birlikte analiz edilir.",
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
    title: "Derse özel değerlendirme",
    text: "Konu öğrenimi; sınav, FRQ, portfolyo veya performans görevi formatıyla desteklenir.",
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
  "Dersin sınav, FRQ, portfolyo veya görev formatında zorlanan öğrenciler",
  "Sınava kısa süre kala yoğun tekrar kampı arayan öğrenciler",
];

const faqs = [
  {
    q: "AP dersleri okul desteği olarak da alınabilir mi?",
    a: "Evet. Öğrencinin kendi okulunda aldığı AP derslerindeki yazılı, quiz ve projelere yönelik nokta atışı destek verilir; final sınav hazırlığı aynı plana dahil edilebilir.",
  },
  {
    q: "FRQ çalışması her AP dersi için yapılıyor mu?",
    a: "Hayır. College Board değerlendirme yapısı derse göre değişir. Bazı derslerde MCQ ve FRQ, Art and Design derslerinde portfolyo, Capstone derslerinde ise araştırma ve performans görevleri öne çıkar.",
  },
  {
    q: "AP kamp programları açılıyor mu?",
    a: "Evet. Sınav dönemine yakın ders bazlı yoğun tekrar, soru çözümü, MCQ ve FRQ odaklı AP kamp programları düzenlenir.",
  },
  {
    q: "Laboratuvar desteği veriliyor mu?",
    a: "AP programlarında MCQ ve FRQ desteği verilir; fiziksel laboratuvar uygulaması hizmet kapsamına dahil değildir.",
  },
];

export default function APPage() {
  return (
    <main style={{ background: "#ffffff", color: "#0B1238" }}>
      <Navbar />

      <section
        style={{
          background: "linear-gradient(135deg, #EAF4FF 0%, #FDE8F1 55%, #DDF6F3 100%)",
          color: "#0B1238",
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
            background: "rgba(68, 199, 190, 0.16)",
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
            gridTemplateColumns: "minmax(0, 0.95fr) minmax(0, 1.05fr)",
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
              AP’de 4-5 hedefi için ders bazlı hazırlık ve değerlendirme stratejisi
            </h1>

            <p
              style={{
                color: "#45546D",
                fontSize: "18px",
                lineHeight: "1.85",
                margin: "26px 0 0",
                maxWidth: "690px",
              }}
            >
              A Plus Academy AP programları, öğrencinin aldığı derse göre
              kişiselleştirilir. Konu anlatımı ve okul desteği; dersin sınav,
              FRQ, portfolyo veya performans görevi yapısına göre planlanır.
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
                Görüşme Planla
              </Link>

              <Link href="/question-bank" style={darkSecondaryButton}>
                AP Deneme Sistemini İncele
              </Link>
            </div>
          </div>

          <div
            style={{
              background: "#ffffff",
              color: "#0B1238",
              borderRadius: "40px",
              padding: "30px",
              boxShadow: "0 30px 90px rgba(73,151,230,0.18)",
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
                    color: "#2F6FC2",
                    fontSize: "13px",
                    fontWeight: 950,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    margin: "0 0 10px",
                  }}
                >
                  AP program özeti
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
                  background: "linear-gradient(135deg, #EAF4FF 0%, #FDE8F1 55%, #DDF6F3 100%)",
                  color: "#0B1238",
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
              <MetricBox label="Resmî katalog" value="42 AP dersi" />
              <MetricBox label="Ders alanı" value="8 kategori" />
              <MetricBox label="Destek" value="Okul + sınav" />
            </div>

            <div
              style={{
                marginTop: "20px",
                display: "grid",
                gap: "12px",
              }}
            >
              <ProgramFocus label="Ünite bazlı konu ve beceri takibi" />
              <ProgramFocus label="Derse özgü değerlendirme formatı" />
              <ProgramFocus label="Resmî sorular ve puanlama ölçütleri" />
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "linear-gradient(180deg, #F7FBFF 0%, #ffffff 100%)",
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
            <div style={blueBadgeLight}>College Board AP ders kataloğu</div>

            <h2
              style={{
                color: "#0B1238",
                fontSize: "clamp(36px, 4vw, 58px)",
                lineHeight: "1.05",
                letterSpacing: "-0.045em",
                fontWeight: 950,
                margin: "18px 0 0",
              }}
            >
              42 AP dersi, sekiz resmî kategori
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
              Aşağıdaki ders adları ve sınıflandırma College Board’un güncel AP
              Courses and Exams kataloğunu temel alır. A Plus Academy’de destek
              kapsamı, öğrencinin dersi ve eğitmen uygunluğuna göre netleştirilir.
            </p>
          </div>

          <div
            className="ap-category-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "24px",
            }}
          >
            {apCourseCategories.map((category) => (
              <CourseCategoryCard key={category.officialTitle} {...category} />
            ))}
          </div>

          <p
            style={{
              color: "#5F718A",
              fontSize: "13px",
              lineHeight: "1.7",
              margin: "24px 0 0",
              textAlign: "center",
            }}
          >
            Kaynak: {" "}
            <a
              href="https://apstudents.collegeboard.org/courses"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#1F5AA6", fontWeight: 900 }}
            >
              College Board AP Courses and Exams
            </a>
          </p>
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
              background: "linear-gradient(135deg, #EAF4FF 0%, #FDE8F1 55%, #DDF6F3 100%)",
              color: "#0B1238",
              borderRadius: "38px",
              padding: "36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
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
                background: "rgba(68, 199, 190, 0.16)",
                right: "-140px",
                bottom: "-140px",
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
                Her AP dersi kendi değerlendirme yapısıyla çalışılır
              </h2>

              <p
                style={{
                  color: "#45546D",
                  fontSize: "16px",
                  lineHeight: "1.85",
                  margin: "24px 0 0",
                }}
              >
                AP değerlendirmesi her derste aynı değildir. Yazılı sınavlar,
                FRQ bölümleri, portfolyolar ve performans görevleri için gereken
                beceriler dersin resmî yapısına göre ayrı ayrı ele alınır.
              </p>
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 1,
                background: "#ffffff",
                border: "1px solid #DDEAF4",
                borderRadius: "28px",
                padding: "24px",
                marginTop: "30px",
              }}
            >
              <p
                style={{
                  color: "#2F6FC2",
                  fontSize: "13px",
                  fontWeight: 900,
                  margin: "0 0 8px",
                }}
              >
                Temel odak
              </p>

              <p
                style={{
                  color: "#0B1238",
                  fontSize: "22px",
                  lineHeight: "1.35",
                  fontWeight: 950,
                  margin: 0,
                }}
              >
                Konu bilgisi + derse özel format + puanlama ölçütleri
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
                  border: "1px solid #D7ECFF",
                  borderRadius: "30px",
                  padding: "28px",
                  boxShadow: "0 16px 42px rgba(15, 23, 42, 0.06)",
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
                    background: index % 2 === 0 ? "#2F6FC2" : "#C93670",
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
                      color: "#0B1238",
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
          background: "#FAFCFF",
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
                  color: "#0B1238",
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
                color: "#45546D",
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
            {timeline.map((item) => (
              <article
                key={item.title}
                style={{
                  background: "#ffffff",
                  color: "#0B1238",
                  border: "1px solid #D7ECFF",
                  borderRadius: "28px",
                  padding: "24px",
                  boxShadow: "0 14px 36px rgba(15, 23, 42, 0.055)",
                }}
              >
                <p
                  style={{
                    color: "#2F6FC2",
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
                    color: "#45546D",
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
              background: "linear-gradient(135deg, #EAF4FF 0%, #FDE8F1 55%, #DDF6F3 100%)",
              color: "#0B1238",
              borderRadius: "36px",
              padding: "34px",
            }}
          >
            <p
              style={{
                color: "#2F6FC2",
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
                  border: "1px solid #D7ECFF",
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
                    background: "#EEF7FF",
                    color: "#2F6FC2",
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
                    color: "#0B1238",
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
          background: "#F7FBFF",
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
                color: "#2F6FC2",
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

      <StudentTestimonials
        soft={false}
        title="AP öğrencilerimizin deneyimleri"
        intro="Sınav formatı, FRQ geri bildirimi ve ders bazlı hazırlığın öğrencilerimizin sonuçlarına nasıl yansıdığı."
        testimonials={[
          { name: "Burak", program: "AP Öğrencisi", quote: "Halil Hoca sadece matematik kısmına değil, sınavın yapısına da son derece hakimdi. Çözdüğüm FRQ sorularını tek tek değerlendirdi ve nasıl yazmam gerektiği konusunda ciddi geri bildirimler verdi. Böylece AB'den 2 olan notumu BC'de 5'e çıkardım." },
          { name: "Defne", program: "AP Öğrencisi", quote: "Halil Hoca karmaşık ekonomi kavramlarını günlük olaylarla ilişkilendirmeme yardımcı oldu. AP Macro ve Micro'dan, ardından AP Calculus BC'den 5 aldım. Bu başarılar Duke'a kabulümde önemli rol oynadı." },
          { name: "Merve", program: "AP Öğrencisi", quote: "Halil Hoca ile AP Macroeconomics, Microeconomics ve AP Calculus BC çalıştık ve hepsinden 5 aldım. Stanford'a girdim. Tüm yardım ve desteği için kendisine çok teşekkür ederim." },
        ]}
      />

      <section style={{ padding: "86px 24px" }}>
        <div
          className="ap-cta"
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
              Öğrencinin AP dersine, hedef skoruna ve mevcut seviyesine göre en
              doğru başlangıç planını birlikte belirleyelim.
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
          .ap-hero-unique,
          .ap-category-grid,
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

        @media (max-width: 600px) {
          .ap-hero-unique h1 {
            font-size: 38px !important;
            line-height: 1.08 !important;
            letter-spacing: -0.045em !important;
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
        background: "#FAFCFF",
        border: "1px solid #D7ECFF",
        borderRadius: "22px",
        padding: "18px",
      }}
    >
      <p
        style={{
          color: "#5F718A",
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
  );
}

function ProgramFocus({ label }: { label: string }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "34px 1fr",
        gap: "12px",
        alignItems: "center",
        padding: "12px 14px",
        border: "1px solid #D7ECFF",
        borderRadius: "16px",
        background: "#FAFCFF",
      }}
    >
      <span
        aria-hidden
        style={{
          display: "grid",
          width: "34px",
          height: "34px",
          placeItems: "center",
          borderRadius: "11px",
          background: "#EAF4FF",
          color: "#1F5AA6",
          fontSize: "15px",
          fontWeight: 950,
        }}
      >
        ✓
      </span>
      <span style={{ color: "#1F2A44", fontSize: "13px", fontWeight: 850 }}>
        {label}
      </span>
    </div>
  );
}

function CourseCategoryCard({
  title,
  officialTitle,
  description,
  courses,
}: {
  title: string;
  officialTitle: string;
  description: string;
  courses: string[];
}) {
  return (
    <article
      className="ap-category-card"
      style={{
        background: "#ffffff",
        color: "#0B1238",
        border: "1px solid #D7ECFF",
        borderRadius: "34px",
        padding: "32px",
        boxShadow: "0 18px 48px rgba(15, 23, 42, 0.06)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          alignItems: "flex-start",
          marginBottom: "22px",
        }}
      >
        <div>
          <p
            style={{
              color: "#2F6FC2",
              fontSize: "12px",
              fontWeight: 900,
              letterSpacing: ".1em",
              margin: "0 0 8px",
              textTransform: "uppercase",
            }}
          >
            {officialTitle}
          </p>
          <h3
            style={{
              fontSize: "28px",
              lineHeight: "1.1",
              fontWeight: 950,
              letterSpacing: "-0.04em",
              margin: 0,
            }}
          >
            {title}
          </h3>
        </div>
        <span
          style={{
            flexShrink: 0,
            padding: "8px 11px",
            border: "1px solid #CFE7FF",
            borderRadius: "999px",
            background: "#EAF4FF",
            color: "#1F5AA6",
            fontSize: "12px",
            fontWeight: 950,
          }}
        >
          {courses.length} ders
        </span>
      </div>

      <p
        style={{
          color: "#45546D",
          fontSize: "14px",
          lineHeight: "1.7",
          margin: "0 0 22px",
        }}
      >
        {description}
      </p>

      <div style={{ display: "grid", gap: "12px" }}>
        {courses.map((course) => (
          <div
            key={course}
            className="ap-course-item"
            style={{
              background: "#ffffff",
              border: "1px solid #D7ECFF",
              borderRadius: "18px",
              padding: "16px 18px",
              color: "#0B1238",
              fontSize: "15px",
              fontWeight: 900,
            }}
          >
            {course}
          </div>
        ))}
      </div>
    </article>
  );
}

const backButtonDark = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  color: "#0B1238",
  background: "#ffffff",
  border: "1px solid #DDEAF4",
  borderRadius: "999px",
  padding: "9px 14px",
  fontSize: "14px",
  fontWeight: 900,
  textDecoration: "none",
  boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
};

const blueBadgeDark = {
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

const blueBadgeLight = {
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

const darkSecondaryButton = {
  background: "#ffffff",
  color: "#0B1238",
  border: "1px solid #DDEAF4",
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
