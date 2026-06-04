import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import GoogleSiteKit from "@/components/GoogleSiteKit";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "APlus Academy | SAT, IB, IELTS Hazırlık",
  description:
    "SAT, IB, A-Level, IELTS, TOEFL ve uluslararası sınavlar için uzman birebir özel ders ve grup kursları. İstanbul merkezli, dünya genelinde online hizmet.",
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${nunito.variable} ${nunitoSans.variable} antialiased`}>
        <GoogleSiteKit />
        {children}
      </body>
    </html>
  );
}
