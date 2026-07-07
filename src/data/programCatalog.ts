export type ProgramCatalogItem = {
  title: string;
  menuText: string;
  eyebrow: string;
  eyebrowLang?: "tr" | "en";
  text: string;
  href: string;
  tags: string[];
};

export const programCatalog: ProgramCatalogItem[] = [
  {
    title: "AP Programları",
    menuText: "Ders bazlı okul, MCQ, FRQ ve değerlendirme desteği",
    eyebrow: "Advanced Placement",
    eyebrowLang: "en",
    text: "College Board kataloğundaki AP dersleri için okul desteği, konu takibi ve derse özgü değerlendirme hazırlığı.",
    href: "/sinavlar/ap",
    tags: ["42 AP dersi", "MCQ / FRQ", "Portfolyo"],
  },
  {
    title: "IB Diploma",
    menuText: "HL/SL dersleri ile IA, EE ve TOK desteği",
    eyebrow: "Uluslararası diploma",
    text: "HL/SL ders desteği, okul sınavları, IA, EE, TOK ve predicted grade sürecinin birlikte takibi.",
    href: "/sinavlar/ib",
    tags: ["HL / SL", "IA / EE", "TOK"],
  },
  {
    title: "Digital SAT & ACT",
    menuText: "Math, Reading, English ve sınav stratejisi",
    eyebrow: "ABD üniversite başvuruları",
    text: "Digital SAT ve ACT için seviye analizi, konu çalışması, sınav stratejisi ve düzenli deneme takibi.",
    href: "/sinavlar/digital-sat",
    tags: ["Digital SAT", "ACT", "Deneme"],
  },
  {
    title: "IELTS, TOEFL & Duolingo",
    menuText: "İngilizce yeterlilik ve hedef skor hazırlığı",
    eyebrow: "İngilizce yeterlilik",
    text: "IELTS, TOEFL ve Duolingo English Test için beceri bazlı çalışma, geri bildirim ve sınav pratiği.",
    href: "/sinavlar/ielts-toefl",
    tags: ["IELTS", "TOEFL", "Duolingo"],
  },
  {
    title: "A-Level",
    menuText: "Ders ve final sınavı hazırlığı",
    eyebrow: "Uluslararası müfredat",
    text: "Cambridge, Edexcel ve AQA A-Level derslerinde okul başarısı, konu desteği ve final sınavı hazırlığı.",
    href: "/sinavlar/a-level-igcse",
    tags: ["Cambridge", "Edexcel", "AQA"],
  },
  {
    title: "IGCSE & GCSE",
    menuText: "Okul dersleri, past paper ve final desteği",
    eyebrow: "Ortaöğretim programları",
    text: "IGCSE ve GCSE derslerinde müfredata uygun konu takibi, past paper pratiği ve okul sınavı desteği.",
    href: "/sinavlar/a-level-igcse",
    tags: ["IGCSE", "GCSE", "Past papers"],
  },
  {
    title: "TMUA, ESAT & TARA",
    menuText: "Seçici üniversite kabul sınavları",
    eyebrow: "Birleşik Krallık başvuruları",
    text: "Matematik, mühendislik ve akademik muhakeme odaklı TMUA, ESAT ve TARA sınavlarına hazırlık.",
    href: "/contact",
    tags: ["TMUA", "ESAT", "TARA"],
  },
  {
    title: "LNAT",
    menuText: "Critical thinking, reading ve essay",
    eyebrow: "Hukuk başvuruları",
    text: "LNAT için critical thinking, metin analizi, zaman yönetimi ve essay planlama desteği.",
    href: "/sinavlar/imat-ucat-lnat",
    tags: ["Reading", "Reasoning", "Essay"],
  },
  {
    title: "IMAT",
    menuText: "İtalya tıp başvuruları ve science hazırlığı",
    eyebrow: "Tıp başvuruları",
    text: "IMAT için science konu tekrarı, problem çözme, reasoning ve zamanlı soru pratiği.",
    href: "/sinavlar/imat-ucat-lnat",
    tags: ["Science", "Reasoning", "İtalya"],
  },
  {
    title: "UCAT",
    menuText: "Birleşik Krallık tıp kabul sınavı",
    eyebrow: "Tıp başvuruları",
    text: "UCAT için hız, karar verme, muhakeme ve sınavın bölüm bazlı soru formatlarına yönelik hazırlık.",
    href: "/sinavlar/imat-ucat-lnat",
    tags: ["UCAT", "Decision making", "UK"],
  },
  {
    title: "PTE Academic",
    menuText: "Bilgisayar tabanlı İngilizce yeterlilik sınavı",
    eyebrow: "İngilizce yeterlilik",
    text: "PTE Academic için speaking, writing, reading ve listening alanlarında sınav formatına uygun hazırlık.",
    href: "/sinavlar/ielts-toefl",
    tags: ["PTE", "4 beceri", "Deneme"],
  },
  {
    title: "GMAT & GRE",
    menuText: "Lisansüstü başvurular için test hazırlığı",
    eyebrow: "Lisansüstü başvurular",
    text: "GMAT ve GRE için quantitative, verbal ve analytical writing alanlarında hedefe özel hazırlık.",
    href: "/contact",
    tags: ["GMAT", "GRE", "Graduate"],
  },
  {
    title: "Okul & GPA Desteği",
    menuText: "Ders, sınav, ödev ve akademik takip",
    eyebrow: "Okul başarısı",
    text: "Uluslararası okul öğrencileri için ders yükü, ödevler, sınavlar ve hedef GPA planının düzenli takibi.",
    href: "/sinavlar/okul-destek",
    tags: ["GPA", "Okul sınavları", "Takip"],
  },
  {
    title: "Üniversite Destek Dersleri",
    menuText: "Üniversite dersleri için akademik destek",
    eyebrow: "Üniversite akademik destek",
    text: "Üniversite öğrencilerine ders bazlı konu, ödev planlama ve sınav hazırlığı desteği.",
    href: "/sinavlar/okul-destek",
    tags: ["Ders desteği", "Sınav", "Akademik plan"],
  },
];

export const featuredPrograms = programCatalog.slice(0, 6);
export const footerPrograms = programCatalog.slice(0, 10);
