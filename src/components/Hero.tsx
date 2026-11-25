import { portfolio } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function Hero() {
  const { availability } = portfolio;
  return (
    <section id="home" aria-labelledby="hero-title" className="relative scroll-mt-16 overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl px-5 pb-24 pt-20 sm:pb-32 sm:pt-28">
        {availability.show && (
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-sm text-muted">
            <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            {availability.label}
          </p>
        )}

        <h1 id="hero-title" className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
          Hi, I&apos;m {portfolio.name}.
        </h1>
        <p className="mt-4 font-mono text-lg text-accent sm:text-xl">
          <span aria-hidden="true">$ </span>
          {portfolio.jobTitle}
        </p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{portfolio.intro}</p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-line bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent"
          >
            Contact Me
          </a>
          <span className="mx-1 hidden h-6 w-px bg-line sm:block" aria-hidden="true" />
          <a
            href={portfolio.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="rounded-md p-2 text-muted transition-colors hover:text-fg"
          >
            <GitHubIcon width={22} height={22} />
          </a>
          <a
            href={portfolio.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-md p-2 text-muted transition-colors hover:text-fg"
          >
            <LinkedInIcon width={22} height={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
