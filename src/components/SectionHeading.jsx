export default function SectionHeading({ number, label, title, description }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow section-label">
          <span>{number}</span> {label}
        </p>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
