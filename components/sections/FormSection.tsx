import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

type FormSectionProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function FormSection({ title, subtitle, children }: FormSectionProps) {
  return (
    <Section>
      <Container narrow>
        <div className="section-header">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
        {children}
      </Container>
    </Section>
  );
}
