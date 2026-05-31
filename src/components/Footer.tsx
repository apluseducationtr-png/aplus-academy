export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #EAF4FF 0%, #FDE8F1 55%, #DDF6F3 100%)",
        color: "#0B1238",
        padding: "70px 24px 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "34px",
            marginBottom: "46px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "28px",
                fontWeight: 950,
                letterSpacing: "-0.04em",
                margin: "0 0 14px",
              }}
            >
              A Plus Academy
            </h3>

            <p
              style={{
                color: "#45546D",
                fontSize: "15px",
                lineHeight: "1.75",
                margin: 0,
                maxWidth: "320px",
              }}
            >
              SAT, AP, IB, IELTS, TOEFL ve uluslararası okul destek
              programlarında öğrenciler için kişisel akademik hazırlık sistemi.
            </p>
          </div>

          <div>
            <h4 style={footerTitle}>Programlar</h4>
            <div style={footerLinks}>
              <a style={footerLink}>Digital SAT</a>
              <a style={footerLink}>AP Programları</a>
              <a style={footerLink}>IB Diploma</a>
              <a style={footerLink}>IELTS & TOEFL</a>
            </div>
          </div>

          <div>
            <h4 style={footerTitle}>Sayfalar</h4>
            <div style={footerLinks}>
              <a style={footerLink}>Sınavlar</a>
              <a style={footerLink}>Soru Bankası</a>
              <a style={footerLink}>İletişim</a>
              <a style={footerLink}>Eğitmen Ol</a>
            </div>
          </div>

          <div>
            <h4 style={footerTitle}>İletişim</h4>
            <div style={footerLinks}>
              <a style={footerLink}>info@aplusacademy.com</a>
              <a style={footerLink}>+90 552 519 55 50</a>
              <a style={footerLink}>İstanbul, Türkiye</a>
              <a style={footerLink}>Online & Yüz Yüze Eğitim</a>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            gap: "18px",
            flexWrap: "wrap",
            color: "#7E91A9",
            fontSize: "13px",
          }}
        >
          <p style={{ margin: 0 }}>
            © 2026 A Plus Academy. Tüm hakları saklıdır.
          </p>

          <p style={{ margin: 0 }}>
            Türkçe / English
          </p>
        </div>
      </div>
    </footer>
  );
}

const footerTitle = {
  color: "#4997E6",
  fontSize: "13px",
  fontWeight: 900,
  letterSpacing: "0.16em",
  textTransform: "uppercase" as const,
  margin: "0 0 16px",
};

const footerLinks = {
  display: "grid",
  gap: "10px",
};

const footerLink = {
  color: "#45546D",
  fontSize: "14px",
  textDecoration: "none",
  cursor: "pointer",
};
