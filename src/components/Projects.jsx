export function Projects({ title, labels, projects }) {
  return (
    <div className="projects">
      <h2 className="projects__title">{title}</h2>
      <ul className="projects__list">
        {projects.map((project) => (
          <li className="projects__item" key={project.liveUrl}>
            <a className="projects__link" href={project.liveUrl} target="_blank" rel="noreferrer">
              <h3>{project.name}</h3>
            </a>
            <p className="projects__text">
              <strong>{labels.role}:</strong> {project.role}
            </p>
            <p className="projects__text">{project.text}</p>
            <p className="projects__text">
              <a className="projects__link" href={project.liveUrl} target="_blank" rel="noreferrer">
                {labels.live}
              </a>
              {' | '}
              <a className="projects__link" href={project.codeUrl} target="_blank" rel="noreferrer">
                {labels.code}
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
