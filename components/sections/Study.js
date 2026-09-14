import { education } from "../../data/education";
import SectionLabel from "../ui/SectionLabel";

export default function Study() {
  const hasQualifications = education.some(
    (item) => item.qualification || item.institution,
  );
  return (
    <section
      id="study"
      className="study-section shell section reveal-section"
      aria-labelledby="study-title"
    >
      <SectionLabel number="03">STUDY</SectionLabel>
      <div className="section-heading">
        <h2 id="study-title">
          Academic
          <br />
          <span className="text-muted">background.</span>
        </h2>
        <p>
          {hasQualifications
            ? "The education behind my work."
            : "Qualification details coming soon."}
        </p>
      </div>
      <div className="education-grid">
        {education.map((item) => {
          const populated = Boolean(item.qualification || item.institution);
          return (
            <article
              key={item.id}
              className={`education-card ${populated ? "" : "education-placeholder"}`}
            >
              <div className="education-top mono">
                <span>
                  {item.id} / {item.level}
                </span>
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m2 9 10-5 10 5-10 5L2 9Z" />
                  <path d="M6 11v6c4 3 8 3 12 0v-6M22 9v8" />
                </svg>
              </div>
              <h3>{item.qualification || item.level + " education"}</h3>
              <p className="education-institution">
                {item.institution || (populated ? "" : "Details to be added")}
              </p>
              {item.details && (
                <p className="education-description">{item.details}</p>
              )}
              {(item.period || item.result) && (
                <dl className="education-facts">
                  {item.period && (
                    <div>
                      <dt>Period</dt>
                      <dd>{item.period}</dd>
                    </div>
                  )}
                  {item.result && (
                    <div>
                      <dt>Result</dt>
                      <dd>{item.result}</dd>
                    </div>
                  )}
                </dl>
              )}
              {!populated && (
                <p className="education-status mono">DETAILS COMING SOON</p>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
