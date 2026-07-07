import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgramGuidePage from "@/components/ProgramGuidePage";
import { programGuideBySlug, programGuides } from "@/data/programGuides";

type ProgramPageProps = {
  params: Promise<{ slug: string }>;
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

export default async function ProgramPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = programGuideBySlug[slug];

  if (!program) notFound();

  return <ProgramGuidePage program={program} />;
}
