import AnimatedButton from "../ui/AnimatedButton";
import StackSignal from "../ui/StackSignal";

export default function Hero() {
  return (
    <section id="home" className="hero shell" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-eyebrow mono">
        <span>
          <i className="availability-dot animate-signal" />
          FULL-STACK DEVELOPER
        </span>
        <span className="hero-edition">PORTFOLIO / 2026</span>
      </div>
      <div className="hero-main">
        <div className="hero-copy">
          <h1 id="hero-title" aria-label="Oadud Hossain">
            <span className="name-mask">
              <span className="animate-reveal">Oadud</span>
            </span>
            <span className="name-mask">
              <span className="surname animate-reveal">
                Hossain<span className="name-period">.</span>
              </span>
            </span>
          </h1>
          <p className="hero-description">
            Thoughtful interfaces.
            <br />
            Reliable systems.
            <span className="hero-description-muted">I build for both.</span>
          </p>
          <div className="hero-actions">
            <AnimatedButton href="#work" direction="down">
              Explore my work
            </AnimatedButton>
            <AnimatedButton href="#contact" variant="text-link">
              Let’s talk
            </AnimatedButton>
          </div>
        </div>
        <StackSignal />
      </div>
      <div className="hero-footer mono">
        <a href="#work">
          <span className="scroll-line" aria-hidden="true" />
          SCROLL TO EXPLORE
        </a>
        <span>FROM INTERFACE TO INFRASTRUCTURE</span>
        <span className="hero-coordinate">23.81° N / 90.41° E</span>
      </div>
    </section>
  );
}
