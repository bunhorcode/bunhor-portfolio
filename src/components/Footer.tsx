"use client";

import { portfolio } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium">{portfolio.name}</p>
          <p className="text-sm text-muted">{portfolio.jobTitle}</p>
        </div>
        <p className="text-sm text-muted">
          &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> {portfolio.name}
        </p>
        <div className="flex gap-1">
          <a
            href={portfolio.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="rounded-md p-2 text-muted transition-colors hover:text-fg"
          >
            <GitHubIcon width={18} height={18} />
          </a>
          <a
            href={portfolio.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-md p-2 text-muted transition-colors hover:text-fg"
          >
            <LinkedInIcon width={18} height={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
