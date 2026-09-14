import Image from "next/image";
import ProjectPreview from "./ProjectPreview";
import AnimatedButton from "./AnimatedButton";

const isLink = (value) =>
  typeof value === "string" && /^(https?:\/\/|\/[^/])/.test(value);

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-info">
        <div className="project-meta mono">
          <span className="project-number">{project.id}</span>
          <span>{project.category}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="project-tags">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          {isLink(project.liveUrl) && (
            <AnimatedButton
              href={project} //Should project.liveUrl
              variant="text-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} (opens in a new tab)`}
            >
              View project
            </AnimatedButton>
          )}
          {isLink(project.githubUrl) && (
            <AnimatedButton
              href={project.githubUrl}
              variant="text-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Source for ${project.title} (opens in a new tab)`}
            >
              GitHub
            </AnimatedButton>
          )}
          {project.placeholder && (
            <span className="placeholder-label mono">
              <span aria-hidden="true">○</span> PROJECT TO BE ADDED
            </span>
          )}
        </div>
      </div>
      <div className="project-visual">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} project screenshot`}
            width={1200}
            height={750}
            sizes="(max-width: 767px) 100vw, 50vw"
            className="project-image"
          />
        ) : (
          <ProjectPreview type={project.preview} />
        )}
        {isLink(project.liveUrl) && (
          <a
            className="preview-open"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} (opens in a new tab)`}
          >
            <span>Visit website ↗</span>
          </a>
        )}
      </div>
    </article>
  );
}
