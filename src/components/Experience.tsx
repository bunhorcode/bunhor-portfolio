import { portfolio } from "@/data/portfolio";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" title="What I do" intro="The areas of DevOps work I focus on.">
      <ol className="ml-2 border-l border-line">
        {portfolio.services.map((s) => (
          <li key={s.title} className="relative pb-10 pl-8 last:pb-0">
            <span
              className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg"
              aria-hidden="true"
            />
            <h3 className="font-medium">{s.title}</h3>
            <p className="mt-1 text-sm text-muted">{s.description}</p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              {s.points.map((pt) => (
                <li key={pt} className="flex gap-2.5">
                  <span className="mt-2 h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                  {pt}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
