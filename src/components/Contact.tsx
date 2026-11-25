import { Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import CopyEmail from "./CopyEmail";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import Section from "./Section";

export default function Contact() {
  const { email, githubUrl, linkedinUrl } = portfolio;
  return (
    <Section id="contact" title={portfolio.contactHeading} intro={portfolio.contactText}>
      <div className="flex flex-wrap items-center gap-3">
        {email ? (
          <>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
            >
              <Mail size={16} aria-hidden="true" /> {email}
            </a>
            <CopyEmail email={email} />
          </>
        ) : (
          <p className="inline-flex items-center gap-2 rounded-md border border-dashed border-line px-4 py-2.5 text-sm text-muted">
            <Mail size={16} aria-hidden="true" /> Email address coming soon
          </p>
        )}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-line bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-accent"
        >
          <GitHubIcon width={16} height={16} /> GitHub
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-line bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-accent"
        >
          <LinkedInIcon width={16} height={16} /> LinkedIn
        </a>
      </div>
    </Section>
  );
}
