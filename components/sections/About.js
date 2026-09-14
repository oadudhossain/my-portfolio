import SectionLabel from "../ui/SectionLabel";
import { skills } from "../../data/skills";

export default function About() {
  return (
    <section
      id="about"
      className="about-section shell section reveal-section"
      aria-labelledby="about-title"
    >
      <SectionLabel number="02">ABOUT & SKILLS</SectionLabel>
      <div className="about-grid">
        <div className="about-copy">
          <h2 id="about-title">
            The whole stack.
            <br />
            <span className="text-muted">The small details.</span>
          </h2>
          <p>
            I’m Oadud, a full-stack developer focused on fast, thoughtful web
            experiences. I enjoy connecting what people see with the systems
            behind it, from responsive interfaces to the logic that makes them
            useful.
          </p>
          <p>
            I care about clear structure, maintainable code, and the small
            details that make a product feel right. That’s the approach I bring
            to what I build.
          </p>
          <div className="about-signoff">
            <span className="signature">Oadud.</span>
            <span className="mono">DEVELOPER, THROUGH & THROUGH.</span>
          </div>
        </div>
        <div className="skills-list">
          <p className="skills-label mono">MY DEVELOPMENT FOCUS</p>
          {skills.map((group) => (
            <div className="skill-group" key={group.title}>
              <div className="skill-heading">
                <span className="mono">{group.index}</span>
                <h3>{group.title}</h3>
              </div>
              <ul>
                {group.items.map((item, i) => (
                  <li key={item} className="skill-tag">
                    <span className="skill-index mono" aria-hidden="true">
                      0{i + 1}
                    </span>
                    {item}
                    <span className="skill-dot" aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
