"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      background: "#fff",
      borderBottom: "1.5px solid #DDEAF4",
      position: "sticky",
      top: 0,
      zIndex: 200,
    }}>
      {/* Top row — Logo centered */}
      <div className="nav-bottom" style={{
        display: "flex",
        justifyContent: "center",
        padding: "12px 2rem 8px",
        borderBottom: "1px solid #EEF5FA",
      }}>
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="APlus Academy"
            width={160}
            height={54}
            style={{ objectFit: "contain" }}
            priority
          />
        </Link>
      </div>

      {/* Bottom row — Links left, Buttons right */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 2rem",
      }}>
        {/* Left — Nav Links */}
        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <Link href="/exams" style={navLinkStyle}>Sınavlar</Link>
          <Link href="/question-bank" style={navLinkStyle}>Soru Bankası</Link>
          <Link href="/danismanlik-rehberlik" style={navLinkStyle}>Danışmanlık/Rehberlik</Link>
          <Link href="/contact" style={navLinkStyle}>İletişim</Link>
          <Link href="/work-with-us" style={navLinkStyle}>Eğitmen Ol</Link>
        </div>

        {/* Right — Lang + CTA */}
        <div className="nav-actions" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button style={langBtnStyle}>🌐 TR</button>
          <Link href="/contact" style={ctaBtnStyle}>Ücretsiz Başla</Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .nav-bottom {
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 8px !important;
            padding: 10px 1rem !important;
          }

          .nav-links {
            flex-wrap: wrap !important;
            justify-content: center !important;
          }

          .nav-actions {
            justify-content: center !important;
          }
        }
      `}</style>
    </nav>
  );
}

const navLinkStyle: React.CSSProperties = {
  color: "#4a5568",
  fontSize: "13.5px",
  fontWeight: 600,
  padding: "7px 12px",
  borderRadius: "8px",
  textDecoration: "none",
  fontFamily: "var(--font-nunito-sans)",
};

const langBtnStyle: React.CSSProperties = {
  background: "#F7FBFF",
  border: "1.5px solid #DDEAF4",
  color: "#4a5568",
  fontSize: "12px",
  padding: "5px 11px",
  borderRadius: "100px",
  cursor: "pointer",
  fontFamily: "var(--font-nunito-sans)",
  fontWeight: 600,
};

const ctaBtnStyle: React.CSSProperties = {
  background: "#4997E6",
  color: "#fff",
  padding: "8px 18px",
  borderRadius: "100px",
  fontSize: "13.5px",
  fontWeight: 700,
  textDecoration: "none",
  fontFamily: "var(--font-nunito)",
};
