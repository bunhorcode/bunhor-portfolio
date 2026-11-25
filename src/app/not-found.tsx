import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-5">
      <p className="font-mono text-sm text-accent">404 Not Found</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">This page doesn&apos;t exist.</h1>
      <p className="mt-3 text-muted">The link may be broken or the page may have moved.</p>
      <Link
        href="/"
        className="mt-8 w-fit rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
      >
        Back to home
      </Link>
    </main>
  );
}
