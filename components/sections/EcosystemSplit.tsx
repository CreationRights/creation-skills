type EcosystemSplitProps = {
  left: { title: string; items: string[] };
  right: { title: string; items: string[] };
  center?: { title: string; items: string[] };
};

export default function EcosystemSplit({ left, right, center }: EcosystemSplitProps) {
  return (
    <div className="model-grid">
      <div className="model-col">
        <h3 className="model-col__title">{left.title}</h3>
        <ul>
          {left.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      {center && (
        <div className="model-col">
          <h3 className="model-col__title">{center.title}</h3>
          <ul>
            {center.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="model-col">
        <h3 className="model-col__title">{right.title}</h3>
        <ul>
          {right.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
