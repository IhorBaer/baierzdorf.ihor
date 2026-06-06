export function Skills({ title, items }) {
  return (
    <div className="skills">
      <h2 className="skills__title">{title}</h2>
      <ul className="skills__list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
