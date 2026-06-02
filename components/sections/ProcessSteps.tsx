type Step = {
  number: string;
  title: string;
  description: string;
};

type ProcessStepsProps = {
  steps: Step[];
};

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="process-steps">
      {steps.map((step) => (
        <div key={step.number} className="process-step">
          <div className="process-step__number">{step.number}</div>
          <div className="process-step__title">{step.title}</div>
          <p className="process-step__desc">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
