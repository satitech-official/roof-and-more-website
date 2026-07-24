import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>
        The page may have moved, or the project detail may still be waiting for
        client-approved content.
      </p>
      <Link href="/" className="primary-link">
        Back to Home
      </Link>
    </main>
  );
}
