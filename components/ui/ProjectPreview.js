export default function ProjectPreview({ type }) {
  return (
    <div className={`project-preview preview-${type}`} aria-hidden="true">
      <div className="preview-grid" />
      {type === "portfolio" && (
        <div className="portfolio-mock">
          <div className="portfolio-mock-nav">
            <span>O / H</span>
            <span>WORK · ABOUT · STUDY</span>
          </div>
          <span className="portfolio-mock-role">FULL-STACK DEVELOPER</span>
          <div className="portfolio-mock-name">
            Oadud
            <br />
            <span>
              Hossain<i>.</i>
            </span>
          </div>
          <div className="portfolio-mock-bottom">
            <span>
              Thoughtful interfaces.
              <br />
              Reliable systems.
            </span>
            <span className="portfolio-mock-button">Explore my work ↗</span>
          </div>
        </div>
      )}
      {type === "app" && (
        <div className="mock-window">
          <div className="window-bar">
            <span className="window-dots">
              <i />
              <i />
              <i />
            </span>
            <span>workspace / overview</span>
            <span>↗</span>
          </div>
          <div className="app-layout">
            <div className="mock-sidebar">
              <b>◈</b>
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="mock-content">
              <div className="mock-heading">
                <span>Overview</span>
                <small>THIS WEEK ↗</small>
              </div>
              <div className="mock-stats">
                <div>
                  <small>ACTIVITY</small>
                  <b>24.8k</b>
                </div>
                <div>
                  <small>PROJECTS</small>
                  <b>
                    12<span>↗</span>
                  </b>
                </div>
              </div>
              <div className="bar-chart">
                {[26, 43, 36, 59, 49, 69, 55, 82, 71, 97, 83, 112].map(
                  (n, i) => (
                    <i style={{ height: `${n}px` }} key={i} />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {type === "interface" && (
        <div className="interface-mock">
          <div className="interface-top">
            <span>FORM / FIELD</span>
            <span>MENU +</span>
          </div>
          <div className="interface-center">
            <span className="interface-kicker">A DIGITAL EXPLORATION</span>
            <span className="interface-title">
              Less, but
              <br />
              <i>considered.</i>
            </span>
            <span className="interface-line" />
          </div>
          <div className="interface-bottom">
            <span>DESIGN IN THE DETAILS</span>
            <span>01 / 03</span>
          </div>
          <div className="interface-disc" />
        </div>
      )}
      {type === "system" && (
        <div className="system-mock">
          <div className="system-heading">
            <span className="system-icon">⌘</span>
            <span>
              One request.
              <br />
              <strong>Everything connected.</strong>
            </span>
          </div>
          <div className="system-route">
            <span>CLIENT</span>
            <i />
            <span className="system-api">API</span>
            <i />
            <span>DATA</span>
          </div>
          <div className="system-code">
            <div>
              <em>GET</em>
              <span>/api/v1/projects</span>
              <b>200 OK</b>
            </div>
            <p>
              <span>↳</span> application/json
            </p>
            <p>
              <span>↳</span> a little structure goes a long way.
            </p>
          </div>
        </div>
      )}
      <span className="preview-caption mono">
        {type === "portfolio"
          ? "LIVE WEBSITE / PORTFOLIO"
          : "LAYOUT PLACEHOLDER"}
      </span>
    </div>
  );
}
