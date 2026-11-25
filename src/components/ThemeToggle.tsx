"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  function toggle() {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable: the theme still applies for this visit */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className="rounded-md p-2 text-muted transition-colors hover:text-fg"
    >
      <Sun size={18} className="only-dark" aria-hidden="true" />
      <Moon size={18} className="only-light" aria-hidden="true" />
    </button>
  );
}
