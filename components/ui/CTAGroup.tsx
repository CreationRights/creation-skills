import Button from "./Button";

type CTAGroupProps = {
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export default function CTAGroup({ primary, secondary }: CTAGroupProps) {
  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      {primary && <Button href={primary.href}>{primary.label}</Button>}
      {secondary && (
        <Button href={secondary.href} variant="secondary">
          {secondary.label}
        </Button>
      )}
    </div>
  );
}
