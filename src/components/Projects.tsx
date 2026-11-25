import { ExternalLink } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { GitHubIcon } from "./Icons";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" title="Featured projects" intro="Selected infrastructure and automation work.">
      <ul className="grid gap-4 md:grid-cols-2">
        {portfolio.projects.map((p) => (
          <li key={p.name}>
            <article className="flex h-full flex-col rounded-lg border border-line bg-card p-6 transition-colors hover:border-accent/60">
              <h3 className="text-lg font-medium">{p.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-md bg-bg px-2 py-1 font-mono text-xs text-accent">
                    {t}
                  </li>
                ))}
              </ul>
              {(p.repo || p.demo) && (
                <div className="mt-5 flex gap-5 text-sm">
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg"
                    >
                      <GitHubIcon width={16} height={16} /> Repository
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg"
                    >
                      <ExternalLink size={16} aria-hidden="true" /> Live demo
                    </a>
                  )}
                </div>
              )}
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
