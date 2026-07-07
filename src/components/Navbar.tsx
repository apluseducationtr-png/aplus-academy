"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { programCatalog } from "@/data/programCatalog";

const links = [
  ["Soru Bankası", "/question-bank"],
  ["Danışmanlık", "/danismanlik-rehberlik"],
  ["İletişim", "/contact"],
  ["Eğitmen Ol", "/work-with-us"],
];

const programLinks = programCatalog;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeDropdown(event: PointerEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProgramOpen(false);
      }
    }

    function closeWithEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setProgramOpen(false);
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", closeDropdown);
    document.addEventListener("keydown", closeWithEscape);

    return () => {
      document.removeEventListener("pointerdown", closeDropdown);
      document.removeEventListener("keydown", closeWithEscape);
    };
  }, []);

  function closeNavigation() {
    setOpen(false);
    setProgramOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-container nav-shell">
        <Link className="brand-link" href="/" aria-label="A Plus Academy ana sayfa">
          <Image src="/logo.jpg" alt="A Plus Academy" width={170} height={58} priority />
        </Link>

        <nav className={`main-nav ${open ? "main-nav-open" : ""}`} aria-label="Ana menü">
          <div className={`nav-dropdown ${programOpen ? "nav-dropdown-open" : ""}`} ref={dropdownRef}>
            <button
              className="nav-dropdown-trigger"
              type="button"
              aria-expanded={programOpen}
              aria-controls="program-menu"
              onClick={() => setProgramOpen((value) => !value)}
            >
              Programlar
              <ChevronDown size={16} aria-hidden />
            </button>
            <div
              className="nav-dropdown-menu"
              id="program-menu"
              aria-label="Programlar alt menüsü"
              hidden={!programOpen}
            >
              <Link className="all-programs-link" href="/exams" onClick={closeNavigation}>
                <span>
                  <strong>Tüm programları incele</strong>
                  <small>Program kataloğunun tamamını görüntüle</small>
                </span>
                <span aria-hidden>→</span>
              </Link>
              <div className="program-link-grid">
                {programLinks.map((program) => (
                  <Link href={program.href} key={program.title} onClick={closeNavigation}>
                    <strong>{program.title}</strong>
                    <small>{program.menuText}</small>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={closeNavigation}>{label}</Link>
          ))}
          <Link className="button button-primary nav-mobile-cta" href="/contact" onClick={closeNavigation}>
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
            onClick={() => {
              setOpen((value) => !value);
              setProgramOpen(false);
            }}
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
        .main-nav > a:hover,
        .nav-dropdown-trigger:hover { background: var(--bg); color: var(--ink); }
        .nav-dropdown { position: relative; }
        .nav-dropdown-trigger {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 12px;
          border: 0;
          border-radius: 10px;
          background: transparent;
          color: var(--slate);
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
        }
        .nav-dropdown-trigger svg { transition: transform .2s ease; }
        .nav-dropdown-open .nav-dropdown-trigger svg { transform: rotate(180deg); }
        .nav-dropdown-menu {
          position: absolute;
          top: calc(100% + 14px);
          left: 50%;
          width: min(760px, calc(100vw - 40px));
          padding: 18px;
          border: 1px solid var(--border);
          border-radius: 24px;
          background: white;
          box-shadow: 0 24px 60px rgba(15,23,42,.14);
          max-height: calc(100vh - 120px);
          overflow-y: auto;
          opacity: 0;
          pointer-events: none;
          transform: translate(-50%, -8px);
          transition: opacity .18s ease, transform .18s ease;
        }
        .nav-dropdown-open .nav-dropdown-menu {
          opacity: 1;
          pointer-events: auto;
          transform: translate(-50%, 0);
        }
        .all-programs-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 14px 16px;
          border-radius: 16px;
          background: var(--blue-light);
          color: var(--ink);
          text-decoration: none;
        }
        .all-programs-link > span:first-child,
        .program-link-grid a { display: grid; gap: 3px; }
        .all-programs-link strong,
        .program-link-grid strong { font-size: 14px; font-weight: 900; }
        .all-programs-link small,
        .program-link-grid small { color: var(--slate); font-size: 12px; line-height: 1.45; }
        .program-link-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 6px;
          margin-top: 10px;
        }
        .program-link-grid a {
          padding: 12px 14px;
          border-radius: 14px;
          color: var(--ink);
          text-decoration: none;
        }
        .program-link-grid a:hover { background: var(--bg); }
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
            max-height: calc(100vh - 76px);
            padding: 16px;
            border-bottom: 1px solid var(--border);
            background: white;
            box-shadow: 0 20px 45px rgba(15,23,42,.08);
            overflow-y: auto;
            overscroll-behavior: contain;
          }
          .main-nav-open { display: grid; }
          .main-nav > a:not(.button) { padding: 13px 16px; }
          .nav-dropdown-trigger {
            width: 100%;
            justify-content: space-between;
            padding: 13px 16px;
          }
          .nav-dropdown-menu {
            position: static;
            width: auto;
            max-height: 0;
            margin: 0 8px;
            padding: 0 10px;
            border: 0;
            border-radius: 18px;
            box-shadow: none;
            opacity: 1;
            overflow: hidden;
            pointer-events: none;
            transform: none;
            transition: max-height .25s ease, padding .25s ease, margin .25s ease;
          }
          .nav-dropdown-open .nav-dropdown-menu {
            max-height: 1200px;
            margin: 4px 8px 10px;
            padding: 10px;
            border: 1px solid var(--border);
            pointer-events: auto;
            transform: none;
          }
          .program-link-grid { grid-template-columns: 1fr; }
          .nav-mobile-cta { display: inline-flex; margin-top: 8px; }
        }
      `}</style>
    </header>
  );
}
