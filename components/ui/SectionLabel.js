export default function SectionLabel({ number, children }) {
  return (
    <p className="section-label mono">
      <span>{number}</span>
      <span className="label-line" aria-hidden="true" />
      {children}
    </p>
  );
}
