import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StudentFormGate from "@/components/StudentFormGate";
import { generalStudentInfoForm, normalizeFormToken } from "@/data/studentForms";

type StudentInfoFormPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const metadata: Metadata = {
  title: "Öğrenci Bilgi Formu | A Plus Academy",
  description: "A Plus Academy öğrenci bilgi formu erişim ve kayıt alanı.",
};

export default async function StudentInfoFormPage({ searchParams }: StudentInfoFormPageProps) {
  const query = await searchParams;

  return (
    <main>
      <Navbar />
      <section className="page-hero">
        <div className="site-container">
          <span className="eyebrow">Kontrollü form erişimi</span>
          <h1>Genel Öğrenci Bilgi Formu</h1>
          <p className="hero-intro">
            Bu sayfa ilk tanışma ve akademik yönlendirme sürecinde, A Plus ekibi tarafından gönderilen form linkiyle
            açılır.
          </p>
        </div>
      </section>
      <StudentFormGate
        form={generalStudentInfoForm}
        formToken={normalizeFormToken(query.formToken)}
        formsEnabled={Boolean(process.env.APLUS_FORMS_WEBHOOK_URL)}
        sourcePath="/formlar/ogrenci-bilgi-formu"
      />
      <Footer />
    </main>
  );
}
