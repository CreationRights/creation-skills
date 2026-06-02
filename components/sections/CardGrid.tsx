import Card from "@/components/ui/Card";

type CardItem = {
  title: string;
  description: string;
  image?: string;
  href?: string;
  eyebrow?: string;
  linkText?: string;
};

type CardGridProps = {
  items: CardItem[];
  columns?: 2 | 3 | 4;
};

export default function CardGrid({ items, columns = 3 }: CardGridProps) {
  return (
    <div className={`card-grid card-grid--${columns}`}>
      {items.map((item) => (
        <Card key={item.title} {...item} />
      ))}
    </div>
  );
}
