import { portfolio } from "@/data/portfolio";
import Section from "./Section";

export default function About() {
  const { paragraphs, focus } = portfolio.about;
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="space-y-4 leading-relaxed text-muted md:col-span-3">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="md:col-span-2">
          <h3 className="text-sm font-medium">Areas of focus</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {focus.map((f) => (
              <li key={f} className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
