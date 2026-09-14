import { site } from "../../data/site";
import { socialLinks } from "../../data/socialLinks";
import SectionLabel from "../ui/SectionLabel";
import AnimatedButton from "../ui/AnimatedButton";
import Arrow from "../ui/Arrow";

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section shell section reveal-section"
      aria-labelledby="contact-title"
    >
      <SectionLabel number="04">CONTACT</SectionLabel>
      <div className="contact-top">
        <p>Have something in mind?</p>
        <span className="mono">GOOD THINGS START WITH A CONVERSATION.</span>
      </div>
      <a className="contact-headline" href={`mailto:${site.email}`}>
        <h2 id="contact-title">
          Let’s build it<span>.</span>
        </h2>
        <Arrow />
      </a>
      <div className="contact-details">
        <div>
          <span className="mono detail-label">DROP ME A LINE</span>
          <a className="email-link" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
        <div className="phone-block">
          <span className="mono detail-label">OR SAY HELLO</span>
          <a href={`tel:${site.phone}`}>{site.phone}</a>
        </div>
        <AnimatedButton href={`mailto:${site.email}`}>
          Send an email
        </AnimatedButton>
      </div>
      {Object.values(socialLinks).some(Boolean) && (
        <div className="social-links">
          {Object.entries(socialLinks)
            .filter(([, url]) => url && url !== "#")
            .map(([key, url]) => (
              <AnimatedButton
                key={key}
                href={url}
                variant="text-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {key === "resume"
                  ? "View CV"
                  : key === "github"
                    ? "GitHub"
                    : "LinkedIn"}
              </AnimatedButton>
            ))}
        </div>
      )}
    </section>
  );
}
