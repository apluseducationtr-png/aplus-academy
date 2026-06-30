"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  ["Programlar", "/exams"],
  ["Soru Bankası", "/question-bank"],
  ["Danışmanlık", "/danismanlik-rehberlik"],
  ["İletişim", "/contact"],
  ["Eğitmen Ol", "/work-with-us"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-container nav-shell">
        <Link className="brand-link" href="/" aria-label="A Plus Academy ana sayfa">
          <Image src="/logo.jpg" alt="A Plus Academy" width={170} height={58} priority />
        </Link>

        <nav className={`main-nav ${open ? "main-nav-open" : ""}`} aria-label="Ana menü">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <Link className="button button-primary nav-mobile-cta" href="/contact" onClick={() => setOpen(false)}>
            Görüşme planla
          </Link>
        </nav>

        <div className="nav-actions">
          <Link className="button button-primary nav-desktop-cta" href="/contact">Görüşme planla</Link>
          <button
            className="menu-button"
            type="button"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid var(--border);
          background: rgba(255,255,255,.96);
          backdrop-filter: blur(16px);
        }
        .nav-shell {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 28px;
          align-items: center;
          min-height: 88px;
        }
        .brand-link { display: inline-flex; }
        .brand-link img { width: 150px; height: auto; object-fit: contain; }
        .main-nav {
          display: flex;
          justify-content: center;
          gap: 4px;
        }
        .main-nav > a:not(.button) {
          padding: 10px 12px;
          border-radius: 10px;
          color: var(--slate);
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
        }
        .main-nav > a:hover { background: var(--bg); color: var(--ink); }
        .nav-actions { display: flex; align-items: center; }
        .menu-button {
          display: none;
          width: 46px;
          height: 46px;
          place-items: center;
          border: 1px solid var(--border);
          border-radius: 14px;
          background: white;
          color: var(--ink);
        }
        .nav-mobile-cta { display: none; }
        @media (max-width: 900px) {
          .nav-shell { grid-template-columns: 1fr auto; min-height: 76px; }
          .brand-link img { width: 132px; }
          .menu-button { display: grid; }
          .nav-desktop-cta { display: none; }
          .main-nav {
            position: absolute;
            top: 76px;
            right: 0;
            left: 0;
            display: none;
            padding: 16px;
            border-bottom: 1px solid var(--border);
            background: white;
            box-shadow: 0 20px 45px rgba(15,23,42,.08);
          }
          .main-nav-open { display: grid; }
          .main-nav > a:not(.button) { padding: 13px 16px; }
          .nav-mobile-cta { display: inline-flex; margin-top: 8px; }
        }
      `}</style>
    </header>
  );
}
