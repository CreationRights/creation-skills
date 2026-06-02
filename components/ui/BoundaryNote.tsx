export default function BoundaryNote({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        padding: "var(--space-lg)",
        background: "var(--color-charcoal)",
        borderLeft: "3px solid var(--color-border-light)",
        borderRadius: "var(--radius-sm)",
        margin: "var(--space-xl) 0",
      }}
    >
      {children}
    </div>
  );
}
