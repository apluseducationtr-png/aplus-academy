import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgramGuidePage from "@/components/ProgramGuidePage";
import { programGuideBySlug, programGuides } from "@/data/programGuides";
import { normalizeFormToken, programRegistrationForms } from "@/data/studentForms";

type ProgramPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return programGuides.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProgramPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = programGuideBySlug[slug];

  if (!program) return {};

  return {
    title: `${program.title} Hazırlık Programı | A Plus Academy`,
    description: program.summary,
  };
}

export default async function ProgramPage({ params, searchParams }: ProgramPageProps) {
  const { slug } = await params;
  const query = await searchParams;
  const program = programGuideBySlug[slug];

  if (!program) notFound();

  return (
    <ProgramGuidePage
      formToken={normalizeFormToken(query.formToken)}
      formsEnabled={Boolean(process.env.APLUS_FORMS_WEBHOOK_URL)}
      program={program}
      registrationForm={programRegistrationForms[slug]}
    />
  );
}
