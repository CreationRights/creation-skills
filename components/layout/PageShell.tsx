import Header from "./Header";
import Footer from "./Footer";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-shell">
      <Header />
      <main className="page-shell__main">{children}</main>
      <Footer />
    </div>
  );
}
