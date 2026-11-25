import { Activity, Cloud, Container, GitBranch, Workflow, type LucideIcon } from "lucide-react";
import { portfolio, type SkillIcon } from "@/data/portfolio";
import Section from "./Section";

const icons: Record<SkillIcon, LucideIcon> = {
  container: Container,
  workflow: Workflow,
  cloud: Cloud,
  activity: Activity,
  git: GitBranch,
};

export default function Skills() {
  return (
    <Section id="skills" title="Technical skills" intro="Tools and technologies I work with and am growing in.">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.skills.map((cat) => {
          const Icon = icons[cat.icon];
          return (
            <li
              key={cat.title}
              className="rounded-lg border border-line bg-card p-5 transition-colors hover:border-accent/60"
            >
              <Icon size={20} className="text-accent" aria-hidden="true" />
              <h3 className="mt-3 font-medium">{cat.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <li key={s} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-muted">
                    {s}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
