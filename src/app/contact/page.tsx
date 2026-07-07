import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHero, SectionHeading } from "@/components/MarketingSections";
import { programCatalog } from "@/data/programCatalog";

export const metadata: Metadata = {
  title: "İletişim ve Görüşme | A Plus Academy",
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
        primary={{ label: "WhatsApp hattı", href: "https://wa.me/905421425634" }}
        panelItems={[
          "Hedef sınav veya akademik ihtiyaç",
          "Mevcut seviye ve okul bilgisi",
          "Hedef sınav ve çalışma öncelikleri",
          "Birebir, grup veya danışmanlık yönlendirmesi",
        ]}
      />

      <section className="section">
        <div className="site-container contact-layout">
          <div>
            <SectionHeading eyebrow="Görüşme talebi" title="Bize öğrencinin ihtiyacını kısaca anlatın" text="Form gönderim altyapısı bir sonraki teknik aşamada CRM veya e-posta sistemine bağlanacak." />
            <div className="contact-cards">
              <a href="tel:+905421425634"><span>Telefon & WhatsApp</span><strong>+90 542 142 56 34</strong></a>
              <a href="mailto:apluseducationtr@gmail.com"><span>E-posta</span><strong>apluseducationtr@gmail.com</strong></a>
              <div><span>Göztepe Ofis</span><strong>Business İstanbul Plaza, Merdivenköy</strong><small>Nur Sk. No:1/1, A Blok, K:12, D:115, Kadıköy</small></div>
              <div><span>Altunizade Ofis</span><strong>Moonwork Plaza, İcadiye</strong><small>Ayarcıbaşı Sk. No:5, Kat:1, Üsküdar</small></div>
              <div><span>Eğitim</span><strong>Online ve yüz yüze</strong></div>
              <a href="https://chat.whatsapp.com/IvMrZv6AHRe0i2Gl9gssRh" target="_blank" rel="noreferrer"><span>Bilgilendirme</span><strong>WhatsApp grubuna katıl</strong></a>
            </div>
          </div>

          <form className="contact-form">
            <label>Ad Soyad<input name="name" placeholder="Öğrenci veya veli adı" /></label>
            <label>Telefon / WhatsApp<input name="phone" placeholder="+90 ..." /></label>
            <label>E-posta<input name="email" type="email" placeholder="ornek@email.com" /></label>
            <label>İlgilenilen alan
              <select name="program" defaultValue="">
                <option value="" disabled>Program seçin</option>
                {programCatalog.map((program) => (
                  <option key={program.title}>{program.title}</option>
                ))}
                <option>Danışmanlık</option><option>Diğer</option>
              </select>
            </label>
            <label>Hedef ve ihtiyaç<textarea name="message" placeholder="Hedef sınav, mevcut seviye ve ihtiyaç..." /></label>
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
        .contact-cards small { display: block; margin-top: 8px; color: var(--slate); line-height: 1.5; }
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
