export default function Container({
  children,
  narrow,
  wide,
  className,
}: {
  children: React.ReactNode;
  narrow?: boolean;
  wide?: boolean;
  className?: string;
}) {
  const cls = [
    "container",
    narrow && "container--narrow",
    wide && "container--wide",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return <div className={cls}>{children}</div>;
}
