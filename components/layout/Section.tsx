export default function Section({
  children,
  dark,
  surface,
  className,
  id,
  size,
}: {
  children: React.ReactNode;
  dark?: boolean;
  surface?: boolean;
  className?: string;
  id?: string;
  size?: "sm" | "lg";
}) {
  const cls = [
    "section",
    size === "sm" && "section--sm",
    size === "lg" && "section--lg",
    dark && "section--dark",
    surface && "section--surface",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <section className={cls} id={id}>
      {children}
    </section>
  );
}
