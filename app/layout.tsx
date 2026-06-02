import "./globals.css";
import { getPageMeta } from "@/lib/seo";
import PageShell from "@/components/layout/PageShell";

export const metadata = getPageMeta("/");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
