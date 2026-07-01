import Link from "next/link";

export type StudentTestimonial = {
  name: string;
  program: string;
  quote: string;
  href?: string;
};

export default function StudentTestimonials({
  testimonials,
  title = "Öğrencilerimiz ne söylüyor?",
  intro = "Farklı sınav ve akademik programlarda öğrencilerimizin A Plus Academy deneyimleri.",
  soft = true,
}: {
  testimonials: StudentTestimonial[];
  title?: string;
  intro?: string;
  soft?: boolean;
}) {
  return (
    <section className={`student-testimonials${soft ? " student-testimonials-soft" : ""}`}>
      <div className="site-container">
        <div className="student-testimonials-heading">
          <span className="eyebrow">Öğrenci yorumları</span>
          <h2>{title}</h2>
          <p>{intro}</p>
        </div>

        <div className="student-testimonials-grid">
          {testimonials.map((testimonial) => (
            <article className="student-testimonial-card" key={`${testimonial.name}-${testimonial.program}`}>
              <span className="student-testimonial-mark" aria-hidden>“</span>
              <blockquote>{testimonial.quote}</blockquote>
              <footer>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.program}</span>
                </div>
                {testimonial.href ? <Link href={testimonial.href}>Programı incele</Link> : null}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
