import "./globals.css";

export const metadata = {
  title: "Creation Skills | C/Skills",
  description:
    "Creation Skills helps companies build the company flow behind modern media.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
