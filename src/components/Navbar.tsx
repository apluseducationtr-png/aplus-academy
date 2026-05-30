"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      background: "#fff",
      borderBottom: "1.5px solid #e8ecf0",
      position: "sticky",
      top: 0,
      zIndex: 200,
    }}>
      {/* Top row — Logo centered */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        padding: "12px 2rem 8px",
        borderBottom: "1px solid #f0f4f8",
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
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <Link href="/exams" style={navLinkStyle}>Sınavlar</Link>
          <Link href="/question-bank" style={navLinkStyle}>Soru Bankası</Link>
          <Link href="/contact" style={navLinkStyle}>İletişim</Link>
          <Link href="/work-with-us" style={navLinkStyle}>Eğitmen Ol</Link>
        </div>

        {/* Right — Lang + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button style={langBtnStyle}>🌐 TR</button>
          <Link href="/contact" style={ctaBtnStyle}>Ücretsiz Başla</Link>
        </div>
      </div>
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
  background: "#f8fafc",
  border: "1.5px solid #e8ecf0",
  color: "#4a5568",
  fontSize: "12px",
  padding: "5px 11px",
  borderRadius: "100px",
  cursor: "pointer",
  fontFamily: "var(--font-nunito-sans)",
  fontWeight: 600,
};

const ctaBtnStyle: React.CSSProperties = {
  background: "#4A90D9",
  color: "#fff",
  padding: "8px 18px",
  borderRadius: "100px",
  fontSize: "13.5px",
  fontWeight: 700,
  textDecoration: "none",
  fontFamily: "var(--font-nunito)",
};