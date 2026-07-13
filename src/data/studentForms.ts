export type FormFieldType = "text" | "email" | "tel" | "textarea" | "select" | "radio" | "checkboxes";

export type FormField = {
  name: string;
  label: string;
  type: FormFieldType;
  required?: boolean;
  help?: string;
  placeholder?: string;
  options?: string[];
};

export type FormSection = {
  title: string;
  description?: string;
  fields: FormField[];
};

export type StudentFormDefinition = {
  id: "general" | "ap" | "ib" | "sat";
  title: string;
  eyebrow: string;
  programLabel: string;
  tokenPrefix: string;
  summary: string;
  sections: FormSection[];
};

const contactFields: FormField[] = [
  { name: "student_full_name", label: "Öğrencinin adı soyadı", type: "text", required: true },
  { name: "parent_full_name", label: "Veli adı soyadı", type: "text", required: true },
  { name: "parent_phone", label: "Veli telefon numarası", type: "tel", required: true },
  { name: "parent_email", label: "Veli e-posta adresi", type: "email", required: true },
  { name: "student_email", label: "Öğrenci e-posta adresi", type: "email" },
];

export const generalStudentInfoForm: StudentFormDefinition = {
  id: "general",
  title: "Genel Öğrenci Bilgi Formu",
  eyebrow: "İlk tanışma",
  programLabel: "Genel öğrenci bilgi formu",
  tokenPrefix: "GENEL",
  summary:
    "Öğrencinin akademik profili, hedefleri, iletişim bilgileri ve doğru programa yönlendirilmesi için kullanılan temel bilgi formu.",
  sections: [
    {
      title: "Öğrenci ve veli bilgileri",
      fields: [
        ...contactFields,
        { name: "student_birth_year", label: "Öğrencinin doğum yılı", type: "text", required: true },
        {
          name: "student_grade",
          label: "Öğrencinin sınıf seviyesi",
          type: "select",
          required: true,
          options: ["8", "9", "10", "11", "12", "Mezun", "Üniversite öğrencisi", "Diğer"],
        },
        { name: "school_name", label: "Öğrencinin okulu", type: "text", required: true },
        {
          name: "school_system",
          label: "Öğrencinin okuduğu sistem",
          type: "checkboxes",
          required: true,
          options: ["AP", "IB", "A-Level", "IGCSE/GCSE", "MEB", "Amerikan lise sistemi", "Kanada lise sistemi", "Diğer"],
        },
        {
          name: "preferred_contact_channel",
          label: "Tercih edilen iletişim kanalı",
          type: "checkboxes",
          required: true,
          options: ["WhatsApp", "Telefon", "E-posta"],
        },
      ],
    },
    {
      title: "Akademik hedef",
      fields: [
        {
          name: "program_interest",
          label: "Hangi alanlarda destek almak istiyorsunuz?",
          type: "checkboxes",
          required: true,
          options: [
            "AP",
            "IB",
            "Digital SAT",
            "ACT",
            "IELTS",
            "TOEFL",
            "Duolingo",
            "A-Level",
            "IGCSE/GCSE",
            "Okul/GPA desteği",
            "Üniversite ders desteği",
            "Üniversite başvuru danışmanlığı",
            "Diğer",
          ],
        },
        {
          name: "target_region",
          label: "Hedef ülke veya bölge",
          type: "checkboxes",
          options: ["ABD", "Kanada", "Birleşik Krallık", "Avrupa", "Türkiye", "Henüz net değil", "Diğer"],
        },
        {
          name: "target_academic_area",
          label: "Hedeflenen bölüm veya akademik alan",
          type: "checkboxes",
          options: [
            "Mühendislik",
            "Tıp/Sağlık bilimleri",
            "Hukuk",
            "İşletme/Ekonomi",
            "Psikoloji",
            "Sosyal bilimler",
            "Sanat/Tasarım",
            "Bilgisayar bilimi",
            "Fen bilimleri",
            "Kararsız",
            "Diğer",
          ],
        },
        { name: "target_universities", label: "Hedef üniversite veya okul listesi varsa yazın", type: "textarea" },
        {
          name: "short_term_goal",
          label: "Kısa vadeli hedef nedir?",
          type: "checkboxes",
          required: true,
          options: [
            "Sınav skoru yükseltmek",
            "Okul notlarını yükseltmek",
            "Ders seçimi planlamak",
            "Eksik konu kapatmak",
            "Üniversite başvurusuna hazırlanmak",
            "Diğer",
          ],
        },
      ],
    },
    {
      title: "Mevcut durum ve ders tercihi",
      fields: [
        { name: "current_gpa", label: "Mevcut not ortalaması veya GPA bilgisi", type: "text" },
        {
          name: "previous_scores",
          label: "Daha önce girilen sınavlar ve skorlar",
          type: "textarea",
          placeholder: "SAT, ACT, AP, IB predicted, IELTS, TOEFL veya deneme sonuçları",
        },
        { name: "strong_subjects", label: "En güçlü olduğu dersler", type: "textarea" },
        { name: "challenge_areas", label: "En çok zorlandığı dersler veya beceriler", type: "textarea", required: true },
        {
          name: "weekly_study_time",
          label: "Haftalık ayırabileceği tahmini çalışma süresi",
          type: "select",
          required: true,
          options: ["1-2 saat", "3-5 saat", "6-8 saat", "9+ saat", "Emin değiliz"],
        },
        {
          name: "learning_notes",
          label: "Eğitim planlamasında bilmemizi istediğiniz öğrenme, dikkat, zaman yönetimi veya sınav konforu ile ilgili bir durum var mı?",
          type: "textarea",
        },
        {
          name: "lesson_format",
          label: "Tercih edilen ders formatı",
          type: "checkboxes",
          required: true,
          options: ["1-1 ders", "Küçük grup", "Bootcamp", "Deneme analizi", "Henüz bilmiyoruz"],
        },
        { name: "available_times", label: "Uygun gün ve saat aralıkları", type: "textarea", required: true },
      ],
    },
  ],
};

export const apRegistrationForm: StudentFormDefinition = {
  id: "ap",
  title: "AP Ders Kayıt Formu",
  eyebrow: "Advanced Placement",
  programLabel: "AP",
  tokenPrefix: "AP",
  summary:
    "AP dersi, AP bootcamp, grup dersi veya 1-1 ders planı için öğrencinin ders seçimi, okul/sınav durumu, hedef skoru ve çalışma ihtiyacını toplar.",
  sections: [
    {
      title: "Temel kayıt bilgileri",
      fields: [
        ...contactFields,
        { name: "school_and_grade", label: "Öğrencinin okulu ve sınıfı", type: "text", required: true },
        {
          name: "registration_format",
          label: "Bu kayıt hangi format için?",
          type: "radio",
          required: true,
          options: ["1-1 AP dersi", "AP grup dersi", "AP bootcamp", "AP deneme analizi", "Henüz net değil"],
        },
      ],
    },
    {
      title: "AP ders seçimi",
      description: "AP ders listesi College Board AP Students ders kataloğu esas alınarak hazırlanmıştır.",
      fields: [
        {
          name: "ap_courses",
          label: "Hangi AP dersi veya dersleri için destek almak istiyorsunuz?",
          type: "checkboxes",
          required: true,
          options: [
            "AP Calculus AB",
            "AP Calculus BC",
            "AP Precalculus",
            "AP Statistics",
            "AP Computer Science A",
            "AP Computer Science Principles",
            "AP Biology",
            "AP Chemistry",
            "AP Environmental Science",
            "AP Physics 1: Algebra-Based",
            "AP Physics 2: Algebra-Based",
            "AP Physics C: Mechanics",
            "AP Physics C: Electricity and Magnetism",
            "AP English Language and Composition",
            "AP English Literature and Composition",
            "AP Psychology",
            "AP Macroeconomics",
            "AP Microeconomics",
            "AP United States History",
            "AP World History: Modern",
            "AP European History",
            "AP Human Geography",
            "AP Comparative Government and Politics",
            "AP United States Government and Politics",
            "AP Art History",
            "AP Music Theory",
            "AP Seminar",
            "AP Research",
            "Diğer",
          ],
        },
        {
          name: "ap_school_course_status",
          label: "AP dersini okulda alıyor musunuz?",
          type: "radio",
          required: true,
          options: ["Evet", "Hayır", "Okulda benzer ders alıyorum", "Emin değilim"],
        },
        {
          name: "ap_exam_registration_status",
          label: "AP exam kaydınız yapıldı mı?",
          type: "radio",
          required: true,
          options: ["Evet", "Hayır", "Süreç devam ediyor", "Emin değiliz"],
        },
        {
          name: "college_board_account_status",
          label: "College Board hesabınız var mı?",
          type: "radio",
          options: ["Evet", "Hayır", "Emin değilim"],
        },
        {
          name: "ap_classroom_status",
          label: "AP Classroom kullanıyor musunuz?",
          type: "radio",
          options: ["Evet", "Hayır", "Okul sağlıyor ama aktif kullanmıyorum", "Emin değilim"],
        },
      ],
    },
    {
      title: "Seviye, hedef ve ders planı",
      fields: [
        {
          name: "ap_current_level",
          label: "Bu AP dersi için mevcut seviyenizi nasıl tanımlarsınız?",
          type: "radio",
          required: true,
          options: [
            "Yeni başlıyorum",
            "Konuların bir kısmını biliyorum",
            "Okulda işledik ama eksiklerim var",
            "Deneme çözüyorum",
            "Final tekrar aşamasındayım",
          ],
        },
        {
          name: "ap_target_score",
          label: "Hedef AP skoru",
          type: "radio",
          required: true,
          options: ["3", "4", "5", "Henüz bilmiyoruz"],
        },
        { name: "previous_ap_scores", label: "Daha önce AP sınavına girdiyseniz dersleri ve skorları yazın", type: "textarea" },
        {
          name: "ap_support_needs",
          label: "En çok destek gereken alan",
          type: "checkboxes",
          required: true,
          options: ["Konu anlatımı", "MCQ pratiği", "FRQ pratiği", "Zaman yönetimi", "Okul sınavları", "Deneme analizi", "Ödev takibi", "Study plan"],
        },
        {
          name: "weekly_lessons",
          label: "Haftada kaç ders düşünüyorsunuz?",
          type: "radio",
          required: true,
          options: ["1 ders", "2 ders", "3+ ders", "Bootcamp yoğun program", "Emin değiliz"],
        },
        {
          name: "weekly_study_time",
          label: "Haftalık bireysel çalışma için ayırabileceğiniz süre",
          type: "select",
          required: true,
          options: ["1-2 saat", "3-5 saat", "6-8 saat", "9+ saat", "Emin değiliz"],
        },
        { name: "available_times", label: "Ders için uygun gün ve saatler", type: "textarea", required: true },
        { name: "additional_notes", label: "Eklemek istediğiniz notlar", type: "textarea" },
      ],
    },
  ],
};

export const ibRegistrationForm: StudentFormDefinition = {
  id: "ib",
  title: "IB Ders Kayıt Formu",
  eyebrow: "IB Diploma Programme",
  programLabel: "IB",
  tokenPrefix: "IB",
  summary:
    "IB DP öğrencisinin HL/SL dersleri, IA/EE/TOK ihtiyacı, predicted grade hedefi ve ders destek planı için kullanılır.",
  sections: [
    {
      title: "Temel kayıt bilgileri",
      fields: [
        ...contactFields,
        { name: "school_name", label: "Öğrencinin okulu", type: "text", required: true },
        {
          name: "ib_level",
          label: "IB seviyesi",
          type: "radio",
          required: true,
          options: ["Pre-IB", "DP1", "DP2", "Retake", "Diğer"],
        },
        {
          name: "registration_format",
          label: "Kayıt formatı",
          type: "radio",
          required: true,
          options: ["1-1 IB dersi", "IB grup dersi", "IB bootcamp", "IA/EE/TOK desteği", "Deneme/paper analizi", "Henüz net değil"],
        },
      ],
    },
    {
      title: "IB dersleri",
      fields: [
        {
          name: "ib_subjects_requested",
          label: "Destek istenen IB dersi veya dersleri",
          type: "checkboxes",
          required: true,
          options: [
            "Mathematics AA HL",
            "Mathematics AA SL",
            "Mathematics AI HL",
            "Mathematics AI SL",
            "Biology HL",
            "Biology SL",
            "Chemistry HL",
            "Chemistry SL",
            "Physics HL",
            "Physics SL",
            "Computer Science HL",
            "Computer Science SL",
            "Environmental Systems and Societies",
            "Business Management HL",
            "Business Management SL",
            "Economics HL",
            "Economics SL",
            "History HL",
            "History SL",
            "Psychology HL",
            "Psychology SL",
            "Global Politics HL",
            "Global Politics SL",
            "Language A",
            "Language B",
            "Visual Arts / Music / Theatre / Film",
            "Diğer",
          ],
        },
        {
          name: "ib_subject_combination",
          label: "Toplam IB subject kombinasyonunuz nedir?",
          type: "textarea",
          required: true,
          placeholder: "3 veya 4 HL, kalan SL derslerinizi yazın.",
        },
        { name: "ib_hl_subjects", label: "Hangi derslerde HL alıyorsunuz?", type: "textarea", required: true },
        { name: "ib_sl_subjects", label: "Hangi derslerde SL alıyorsunuz?", type: "textarea", required: true },
      ],
    },
    {
      title: "Hedef ve mevcut performans",
      fields: [
        { name: "ib_predicted_grades", label: "Mevcut predicted grade veya okul notları", type: "textarea" },
        {
          name: "ib_target_total_score",
          label: "Hedeflenen IB toplam puanı",
          type: "select",
          required: true,
          options: ["24-29", "30-34", "35-38", "39-42", "43-45", "Henüz bilmiyoruz"],
        },
        { name: "ib_target_subject_scores", label: "Hedeflenen ders notları", type: "textarea", placeholder: "Örn: Math AA HL 6/7, Economics HL 7" },
        {
          name: "ib_support_needs",
          label: "En çok zorlanılan alanlar",
          type: "checkboxes",
          required: true,
          options: ["Konu eksiği", "Paper 1", "Paper 2", "Paper 3", "IA", "EE", "TOK", "Essay writing", "Data analysis", "Zaman yönetimi", "Ödev takibi", "Revision plan"],
        },
        { name: "mock_results", label: "Varsa son mock/paper sonuçları", type: "textarea" },
      ],
    },
    {
      title: "IA / EE / TOK ve ders planı",
      fields: [
        {
          name: "ib_ia_support",
          label: "IA desteği gerekiyor mu?",
          type: "checkboxes",
          required: true,
          options: ["Math IA", "Science IA", "Economics IA", "Business IA", "Psychology IA", "History IA", "Language oral/written task", "Diğer", "Hayır"],
        },
        {
          name: "ib_ee_support",
          label: "EE desteği gerekiyor mu?",
          type: "radio",
          required: true,
          options: ["Evet", "Hayır", "Konu seçim aşamasındayız", "Yazım aşamasındayız", "Son kontrol gerekiyor"],
        },
        { name: "ee_topic", label: "EE dersi ve konu başlığı", type: "textarea" },
        {
          name: "ib_tok_support",
          label: "TOK desteği gerekiyor mu?",
          type: "checkboxes",
          required: true,
          options: ["TOK essay", "TOK exhibition", "Konsept çalışması", "Hayır"],
        },
        {
          name: "school_documents_status",
          label: "Okulun verdiği rubric, syllabus, assignment brief veya deadline dokümanları var mı?",
          type: "radio",
          required: true,
          options: ["Evet", "Hayır", "Sonradan paylaşabiliriz"],
        },
        {
          name: "weekly_lessons",
          label: "Haftada kaç ders düşünüyorsunuz?",
          type: "radio",
          required: true,
          options: ["1 ders", "2 ders", "3+ ders", "Bootcamp yoğun program", "Emin değiliz"],
        },
        { name: "available_times", label: "Ders için uygun gün ve saatler", type: "textarea", required: true },
      ],
    },
  ],
};

export const satRegistrationForm: StudentFormDefinition = {
  id: "sat",
  title: "SAT Ders Kayıt Formu",
  eyebrow: "Digital SAT / ACT",
  programLabel: "SAT/ACT",
  tokenPrefix: "SAT",
  summary:
    "Digital SAT veya SAT/ACT karar süreci için mevcut skor, hedef skor, alt alan ihtiyaçları, Bluebook/Khan Academy durumu ve ders planını toplar.",
  sections: [
    {
      title: "Temel kayıt bilgileri",
      fields: [
        ...contactFields,
        { name: "school_and_grade", label: "Öğrencinin okulu ve sınıfı", type: "text", required: true },
        {
          name: "registration_format",
          label: "Kayıt formatı",
          type: "radio",
          required: true,
          options: ["1-1 SAT dersi", "SAT grup dersi", "SAT bootcamp", "Deneme analizi", "SAT/ACT karar süreci", "Henüz net değil"],
        },
      ],
    },
    {
      title: "SAT / ACT durumu",
      fields: [
        {
          name: "exam_type",
          label: "Hazırlandığınız sınav",
          type: "radio",
          required: true,
          options: ["Digital SAT", "ACT", "SAT ve ACT karşılaştırma süreci", "Emin değiliz"],
        },
        {
          name: "official_exam_taken",
          label: "Daha önce resmi SAT veya ACT sınavına girdiniz mi?",
          type: "radio",
          required: true,
          options: ["Evet", "Hayır"],
        },
        {
          name: "official_scores",
          label: "Girdiyseniz skorlarınız",
          type: "textarea",
          placeholder: "SAT total, Reading and Writing, Math; ACT Composite ve section skorları",
        },
        {
          name: "bluebook_practice_status",
          label: "Bluebook practice test çözdünüz mü?",
          type: "radio",
          required: true,
          options: ["Evet", "Hayır", "Başladım ama tamamlamadım", "Emin değilim"],
        },
        { name: "bluebook_scores", label: "Bluebook deneme skorlarınız", type: "textarea" },
        {
          name: "resources_used",
          label: "Khan Academy veya başka kaynak kullanıyor musunuz?",
          type: "checkboxes",
          options: ["Khan Academy", "Bluebook", "UWorld", "Princeton Review", "Barron's", "Erica Meltzer", "College Board Question Bank", "Diğer", "Hayır"],
        },
        {
          name: "target_sat_score",
          label: "Hedef SAT skoru",
          type: "select",
          required: true,
          options: ["1200+", "1300+", "1400+", "1450+", "1500+", "Henüz bilmiyoruz"],
        },
      ],
    },
    {
      title: "Reading and Writing / Math ihtiyacı",
      fields: [
        {
          name: "reading_writing_needs",
          label: "Reading and Writing bölümünde destek gereken alanlar",
          type: "checkboxes",
          required: true,
          options: [
            "Information and Ideas",
            "Craft and Structure",
            "Expression of Ideas",
            "Standard English Conventions",
            "Vocabulary in context",
            "Graph/table interpretation",
            "Passage analysis",
            "Grammar/punctuation",
            "Emin değiliz",
          ],
        },
        {
          name: "english_reading_level",
          label: "İngilizce okuma seviyesi",
          type: "radio",
          required: true,
          options: ["Zorlanıyorum", "Orta", "İyi", "Çok iyi", "Emin değilim"],
        },
        { name: "reading_notes", label: "En çok zorlandığınız Reading/Writing soru tipi veya konu", type: "textarea" },
        {
          name: "math_needs",
          label: "Math bölümünde destek gereken alanlar",
          type: "checkboxes",
          required: true,
          options: ["Algebra", "Advanced Math", "Problem-Solving and Data Analysis", "Geometry and Trigonometry", "Desmos kullanımı", "Student-produced responses", "Zaman yönetimi", "Emin değiliz"],
        },
        {
          name: "math_school_level",
          label: "Matematikte okul seviyeniz",
          type: "radio",
          required: true,
          options: ["Temel eksiklerim var", "Orta", "İyi", "İleri", "Emin değilim"],
        },
        { name: "math_notes", label: "En çok zorlandığınız matematik konuları", type: "textarea" },
      ],
    },
    {
      title: "Planlama",
      fields: [
        {
          name: "weekly_lessons",
          label: "Haftada kaç ders düşünüyorsunuz?",
          type: "radio",
          required: true,
          options: ["1 ders", "2 ders", "3+ ders", "Bootcamp yoğun program", "Emin değiliz"],
        },
        {
          name: "weekly_study_time",
          label: "Haftalık bireysel çalışma için ayırabileceğiniz süre",
          type: "select",
          required: true,
          options: ["1-2 saat", "3-5 saat", "6-8 saat", "9+ saat", "Emin değiliz"],
        },
        { name: "available_times", label: "Ders için uygun gün ve saatler", type: "textarea", required: true },
        {
          name: "mock_test_plan",
          label: "Deneme çözme disiplininiz",
          type: "radio",
          options: ["Haftalık deneme çözebilirim", "İki haftada bir çözebilirim", "Sadece ödevle ilerlemek istiyorum", "Emin değilim"],
        },
        { name: "test_comfort_notes", label: "Sınav konforu veya süre kullanımı için bilmemizi istediğiniz bir durum var mı?", type: "textarea" },
        { name: "additional_notes", label: "Eklemek istediğiniz notlar", type: "textarea" },
      ],
    },
  ],
};

export const programRegistrationForms: Record<string, StudentFormDefinition> = {
  ap: apRegistrationForm,
  "ib-diploma": ibRegistrationForm,
  "digital-sat-act": satRegistrationForm,
};

export function normalizeFormToken(token: string | string[] | undefined): string {
  if (Array.isArray(token)) return token[0] ?? "";
  return token ?? "";
}

export function hasFormAccess(form: StudentFormDefinition, token: string): boolean {
  const normalized = token.trim().toUpperCase();
  return normalized.startsWith(`${form.tokenPrefix}-`) && normalized.length >= form.tokenPrefix.length + 7;
}
