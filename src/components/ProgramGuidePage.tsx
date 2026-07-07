import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock3, Gauge, Users } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { ProgramGuide } from "@/data/programGuides";

export default function ProgramGuidePage({ program }: { program: ProgramGuide }) {
  return (
    <main>
      <Navbar />

      <section className="guide-hero">
        <div className="site-container guide-hero-layout">
          <div className="guide-hero-copy">
            <Link className="guide-back-link" href="/exams">Programlara dön</Link>
            <span className="eyebrow">Program rehberi</span>
            <p className="guide-kicker">{program.eyebrow}</p>
            <h1>{program.title}</h1>
            <p className="guide-summary">{program.summary}</p>
            <div className="button-row">
              <Link className="button button-primary" href="/contact">Görüşme planla</Link>
              {program.related && (
                <Link className="button button-secondary" href={program.related.href}>
                  {program.related.label}
                </Link>
              )}
            </div>
          </div>

          <aside className="guide-name-panel">
            <BookOpen aria-hidden="true" size={24} />
            <span>Programın tam adı</span>
            {program.fullNames.map((name) => <strong key={name}>{name}</strong>)}
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <span className="eyebrow">Başlangıç çerçevesi</span>
            <h2>Bu program kimin için ve nereden başlanmalı?</h2>
            <p>İlk görüşmede öğrencinin mevcut seviyesi, hedefi ve haftalık çalışma kapasitesi birlikte değerlendirilir.</p>
          </div>
          <div className="guide-fact-grid">
            <article className="guide-fact-card">
              <Users aria-hidden="true" />
              <h3>Kimler için uygun?</h3>
              <p>{program.audience}</p>
            </article>
            <article className="guide-fact-card">
              <Gauge aria-hidden="true" />
              <h3>Önerilen başlangıç seviyesi</h3>
              <p>{program.minimumLevel}</p>
            </article>
            <article className="guide-fact-card">
              <Clock3 aria-hidden="true" />
              <h3>Önerilen hazırlık süresi</h3>
              <p>{program.duration}</p>
              <small>Bu süre resmî kurum zorunluluğu değil, A Plus planlama önerisidir.</small>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="site-container">
          <div className="section-heading">
            <span className="eyebrow">Dersler ve bölümler</span>
            <h2>Programın kapsadığı çalışma alanları</h2>
            <p>Kesin ders planı öğrencinin sınav sağlayıcısı, ders kodu ve hedef kurum koşulları doğrulandıktan sonra hazırlanır.</p>
          </div>
          <div className="guide-coverage-grid">
            {program.coverage.map((item, index) => (
              <article className="guide-coverage-card" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container guide-faq-layout">
          <div className="guide-faq-intro">
            <span className="eyebrow">Sık sorulan sorular</span>
            <h2>{program.title} hakkında merak edilenler</h2>
            <p>Yanıtlar güncel resmî sınav yapısına göre hazırlanmıştır. Kayıt ve kabul koşulları hedef kuruma göre ayrıca kontrol edilmelidir.</p>
          </div>
          <div className="faq-list">
            {program.faqs.map((item, index) => (
              <details className="faq-item" key={item.question} open={index === 0}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="guide-sources-section">
        <div className="site-container guide-sources-panel">
          <div>
            <span className="eyebrow">Bilgi kaynakları</span>
            <h2>Resmî kaynaklara dayalı program bilgisi</h2>
            <p>
              Sınav içeriği sağlayıcı kurumların resmî sayfalarından kontrol edilmiştir. Tarih, takvim ve ücret bilgisi bilinçli olarak bu sayfaya alınmamıştır.
            </p>
          </div>
          <div className="guide-source-links">
            {program.sources.length > 0 ? program.sources.map((source) => (
              <a href={source.url} key={source.url} rel="noreferrer" target="_blank">
                {source.label}<ArrowUpRight aria-hidden="true" size={17} />
              </a>
            )) : (
              <p>Bu hizmet haricî bir sınav sağlayıcısına değil, öğrencinin okul veya üniversite müfredatına göre planlanır.</p>
            )}
          </div>
        </div>
      </section>

      <section className="guide-cta-section">
        <div className="site-container cta-band">
          <div>
            <h2>Öğrencinin başlangıç noktasını birlikte belirleyelim.</h2>
            <p>İlk değerlendirmede hedef, mevcut seviye ve uygun çalışma modeli netleştirilir.</p>
          </div>
          <Link className="button button-primary" href="/contact">Ücretsiz görüşme planla</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
