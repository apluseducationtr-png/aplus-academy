import Link from "next/link";

export type CardItem = {
  eyebrow?: string;
  title: string;
  text: string;
  href?: string;
  tags?: string[];
};

export function PageHero({
  eyebrow,
  title,
  intro,
  primary = { label: "Görüşme planla", href: "/contact" },
  secondary,
  panelTitle = "Bu sayfada ne bulacaksınız?",
  panelItems = [],
}: {
  eyebrow: string;
  title: string;
  intro: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  panelTitle?: string;
  panelItems?: string[];
}) {
  return (
    <section className="page-hero">
      <div className="site-container hero-layout">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="hero-intro">{intro}</p>
          <div className="button-row">
            <Link className="button button-primary" href={primary.href}>
              {primary.label}
            </Link>
            {secondary ? (
              <Link className="button button-secondary" href={secondary.href}>
                {secondary.label}
              </Link>
            ) : null}
          </div>
        </div>

        {panelItems.length ? (
          <aside className="hero-panel">
            <span className="eyebrow">Sayfa özeti</span>
            <h2>{panelTitle}</h2>
            <div className="check-list">
              {panelItems.map((item) => (
                <div className="check-item" key={item}>
                  <span aria-hidden>✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </aside>
        ) : null}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export function CardGrid({
  items,
  columns = 3,
}: {
  items: CardItem[];
  columns?: 2 | 3 | 4;
}) {
  return (
    <div className={`card-grid card-grid-${columns}`}>
      {items.map((item, index) => (
        <article className="content-card" key={item.title}>
          <div className="card-number">{String(index + 1).padStart(2, "0")}</div>
          {item.eyebrow ? <span className="card-eyebrow">{item.eyebrow}</span> : null}
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          {item.tags?.length ? (
            <div className="tag-row">
              {item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
            </div>
          ) : null}
          {item.href ? <Link className="text-link" href={item.href}>Detayları incele →</Link> : null}
        </article>
      ))}
    </div>
  );
}

export function ProcessSection({
  eyebrow = "Nasıl çalışıyoruz?",
  title,
  text,
  steps,
}: {
  eyebrow?: string;
  title: string;
  text: string;
  steps: Array<{ title: string; text: string }>;
}) {
  return (
    <section className="section section-soft">
      <div className="site-container split-layout">
        <SectionHeading eyebrow={eyebrow} title={title} text={text} />
        <div className="process-list">
          {steps.map((step, index) => (
            <article className="process-item" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturePanelSection({
  eyebrow,
  title,
  text,
  items,
}: {
  eyebrow: string;
  title: string;
  text: string;
  items: Array<{ title: string; text: string }>;
}) {
  return (
    <section className="section">
      <div className="site-container proof-panel">
        <div>
          <SectionHeading eyebrow={eyebrow} title={title} text={text} />
        </div>
        <div className="proof-grid">
          {items.map((item) => (
            <article className="proof-card" key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection({
  items,
}: {
  items: Array<{ question: string; answer: string }>;
}) {
  return (
    <section className="section section-soft">
      <div className="site-container faq-layout">
        <SectionHeading
          eyebrow="Sık sorulan sorular"
          title="Karar vermeden önce merak edilenler"
          text="Programın kapsamı, çalışma biçimi ve takip yaklaşımıyla ilgili temel sorular."
        />
        <div className="faq-list">
          {items.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({
  eyebrow = "Birlikte planlayalım",
  title,
  text,
  label = "Görüşme planla",
  href = "/contact",
}: {
  eyebrow?: string;
  title: string;
  text: string;
  label?: string;
  href?: string;
}) {
  return (
    <section className="section">
      <div className="site-container cta-band">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link className="button button-primary" href={href}>{label}</Link>
      </div>
    </section>
  );
}
