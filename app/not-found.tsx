import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: "48px", fontFamily: "system-ui, sans-serif" }}>
      <h1>Page not found</h1>
      <p>This page is not built yet.</p>
      <Link href="/">Return home</Link>
    </main>
  );
}
