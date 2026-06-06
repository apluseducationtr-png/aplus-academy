import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHero, SectionHeading } from "@/components/MarketingSections";

export const metadata: Metadata = {
  title: "İletişim ve Ücretsiz Görüşme | A Plus Academy",
  description: "A Plus Academy ile program ve akademik ihtiyaç görüşmesi planlayın.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="İletişim"
        title="İlk görüşmede ihtiyacı netleştirip doğru başlangıç yolunu belirleyelim"
        intro="Bu sayfa görüşme talebi, doğrudan iletişim seçenekleri, süreç açıklaması ve yasal onay alanlarını tek yerde toplayacak."
        primary={{ label: "WhatsApp hattı", href: "https://wa.me/905525195550" }}
        panelItems={[
          "Hedef sınav veya akademik ihtiyaç",
          "Mevcut seviye ve okul bilgisi",
          "Sınav tarihi ve uygun çalışma takvimi",
          "Birebir, grup veya danışmanlık yönlendirmesi",
        ]}
      />

      <section className="section">
        <div className="site-container contact-layout">
          <div>
            <SectionHeading eyebrow="Görüşme talebi" title="Bize öğrencinin ihtiyacını kısaca anlatın" text="Form gönderim altyapısı bir sonraki teknik aşamada CRM veya e-posta sistemine bağlanacak." />
            <div className="contact-cards">
              <a href="tel:+905525195550"><span>Telefon</span><strong>+90 552 519 55 50</strong></a>
              <a href="mailto:info@aplusacademy.com"><span>E-posta</span><strong>info@aplusacademy.com</strong></a>
              <div><span>Konum</span><strong>İstanbul</strong></div>
              <div><span>Eğitim</span><strong>Online ve yüz yüze</strong></div>
            </div>
          </div>

          <form className="contact-form">
            <label>Ad Soyad<input name="name" placeholder="Öğrenci veya veli adı" /></label>
            <label>Telefon / WhatsApp<input name="phone" placeholder="+90 ..." /></label>
            <label>E-posta<input name="email" type="email" placeholder="ornek@email.com" /></label>
            <label>İlgilenilen alan
              <select name="program" defaultValue="">
                <option value="" disabled>Program seçin</option>
                <option>Digital SAT</option><option>AP</option><option>IB</option>
                <option>A-Level / IGCSE</option><option>IELTS / TOEFL</option>
                <option>Okul desteği</option><option>Danışmanlık</option><option>Diğer</option>
              </select>
            </label>
            <label>Hedef ve ihtiyaç<textarea name="message" placeholder="Sınav tarihi, mevcut seviye ve ihtiyaç..." /></label>
            <label className="consent-row"><input type="checkbox" /> KVKK aydınlatma metnini okudum ve iletişim kurulmasını kabul ediyorum.</label>
            <button className="button button-primary" type="button">Görüşme talebi gönder</button>
            <small>Yapısal önizleme: form henüz gönderim sistemine bağlı değildir.</small>
          </form>
        </div>
      </section>
      <Footer />
      <style>{`
        .contact-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
        .contact-cards { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        .contact-cards > * { padding: 20px; border: 1px solid var(--border); border-radius: 20px; background: var(--bg); color: var(--ink); text-decoration: none; }
        .contact-cards span { display: block; color: var(--blue-dark); font-size: 12px; font-weight: 900; text-transform: uppercase; }
        .contact-cards strong { display: block; margin-top: 8px; font-size: 16px; }
        .contact-form { display: grid; gap: 16px; padding: 28px; border: 1px solid var(--border); border-radius: 28px; box-shadow: 0 20px 60px rgba(73,151,230,.1); }
        .contact-form label { display: grid; gap: 7px; color: var(--ink); font-size: 13px; font-weight: 900; }
        .contact-form input, .contact-form select, .contact-form textarea { width: 100%; padding: 13px 14px; border: 1px solid var(--border); border-radius: 13px; background: #fbfdff; color: var(--ink); }
        .contact-form textarea { min-height: 120px; resize: vertical; }
        .contact-form .consent-row { grid-template-columns: auto 1fr; align-items: start; font-weight: 600; line-height: 1.5; }
        .contact-form .consent-row input { width: auto; margin-top: 4px; }
        .contact-form small { color: var(--muted); }
        @media (max-width: 800px) { .contact-layout { grid-template-columns: 1fr; } }
        @media (max-width: 520px) { .contact-cards { grid-template-columns: 1fr; } }
      `}</style>
    </main>
  );
}
