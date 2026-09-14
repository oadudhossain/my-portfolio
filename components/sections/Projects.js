import { projects } from "../../data/projects";
import SectionLabel from "../ui/SectionLabel";
import WebsiteShowcase from "../ui/WebsiteShowcase";

export default function Projects() {
  return (
    <section
      id="work"
      className="work-section shell section"
      aria-labelledby="work-title"
    >
      <SectionLabel number="01">WEBSITE SHOWCASE</SectionLabel>
      <div className="section-heading">
        <h2 id="work-title">
          Explore the work.
          <br />
          <span className="text-muted">Visit the websites.</span>
        </h2>
        <p>
          Browse by project type.
          <br />
          Open a live site to see it in action.
        </p>
      </div>
      <WebsiteShowcase projects={projects} />
    </section>
  );
}
  