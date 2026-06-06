import Link from "next/link";

const programLinks = [
  ["Digital SAT", "/sinavlar/digital-sat"],
  ["AP Programları", "/sinavlar/ap"],
  ["IB Diploma", "/sinavlar/ib"],
  ["IELTS & TOEFL", "/sinavlar/ielts-toefl"],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div>
          <h2>A Plus Academy</h2>
          <p>
            Uluslararası sınav hazırlığı, okul desteği ve akademik takip için
            öğrenciye özel eğitim planı.
          </p>
        </div>
        <div>
          <h3>Programlar</h3>
          {programLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </div>
        <div>
          <h3>Kurumsal</h3>
          <Link href="/danismanlik-rehberlik">Danışmanlık</Link>
          <Link href="/work-with-us">Eğitmen Ol</Link>
          <Link href="/contact">İletişim</Link>
        </div>
        <div>
          <h3>İletişim</h3>
          <a href="tel:+905525195550">+90 552 519 55 50</a>
          <a href="mailto:info@aplusacademy.com">info@aplusacademy.com</a>
          <p>İstanbul · Online ve yüz yüze</p>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <span>© 2026 A Plus Academy</span>
        <span>Yasal sayfalar ve sosyal medya bağlantıları eklenecek</span>
      </div>
      <style>{`
        .site-footer { padding: 72px 0 28px; background: #0B1238; color: white; }
        .footer-grid { display: grid; grid-template-columns: 1.4fr repeat(3, 1fr); gap: 40px; }
        .footer-grid h2 { font: 950 30px var(--font-nunito); }
        .footer-grid h3 { margin-bottom: 16px; color: #9ecbfa; font: 900 13px var(--font-nunito); letter-spacing: .12em; text-transform: uppercase; }
        .footer-grid p { max-width: 340px; margin-top: 12px; color: #b8c4d7; line-height: 1.75; }
        .footer-grid > div:not(:first-child) { display: flex; flex-direction: column; align-items: flex-start; gap: 10px; }
        .footer-grid a { color: #dbe7f6; text-decoration: none; font-size: 14px; }
        .footer-bottom { display: flex; justify-content: space-between; gap: 20px; margin-top: 52px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,.12); color: #8fa0ba; font-size: 12px; }
        @media (max-width: 850px) { .footer-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr; } .footer-bottom { flex-direction: column; } }
      `}</style>
    </footer>
  );
}
