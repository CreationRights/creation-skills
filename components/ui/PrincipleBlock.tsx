export default function PrincipleBlock({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="proof-block">
      <h3 className="proof-block__title">{title}</h3>
      <p className="proof-block__desc">{description}</p>
    </div>
  );
}
