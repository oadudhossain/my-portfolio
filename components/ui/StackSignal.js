"use client";

import { useState } from "react";

const nodes = [
  {
    id: "frontend",
    label: "Frontend",
    detail: "Where people meet the product.",
    number: "01",
  },
  {
    id: "api",
    label: "API",
    detail: "The connection between every layer.",
    number: "02",
  },
  {
    id: "database",
    label: "Database",
    detail: "A considered foundation for the data.",
    number: "03",
  },
];

export default function StackSignal() {
  const [active, setActive] = useState(null);
  function move(e) {
    if (
      e.pointerType !== "mouse" ||
      !matchMedia(
        "(min-width: 900px) and (prefers-reduced-motion: no-preference)",
      ).matches
    )
      return;
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty(
      "--sx",
      `${(e.clientX - r.left - r.width / 2) * 0.025}px`,
    );
    e.currentTarget.style.setProperty(
      "--sy",
      `${(e.clientY - r.top - r.height / 2) * 0.025}px`,
    );
  }
  return (
    <div
      className="signal"
      onPointerMove={move}
      onPointerLeave={(e) => {
        e.currentTarget.style.setProperty("--sx", "0px");
        e.currentTarget.style.setProperty("--sy", "0px");
      }}
    >
      <div className="signal-top mono">
        <span>STACK SIGNAL</span>
        <span className="signal-mode">INTERCONNECTED</span>
      </div>
      <div className="signal-diagram">
        <svg
          className="signal-paths"
          viewBox="0 0 420 350"
          fill="none"
          aria-hidden="true"
        >
          <path
            className="orbit"
            d="M210 38c97 0 172 61 172 137s-75 137-172 137S38 251 38 175 113 38 210 38Z"
          />
          <path
            className="orbit inner"
            d="M210 75c70 0 126 44 126 100s-56 100-126 100S84 231 84 175 140 75 210 75Z"
          />
          <path className="signal-track" d="M210 64 342 245H78L210 64Z" />
          <path
            className="signal-track faint"
            d="m210 64 0 111m0 0 132 70m-132-70L78 245"
          />
          <path className="signal-flow" d="M210 64 342 245H78L210 64Z" />
          <path
            className="crosshair"
            d="M201 175h18m-9-9v18M28 175h12m340 0h12M210 28v12m0 270v12"
          />
        </svg>
        <div className="signal-core" aria-hidden="true">
          <span>&lt;/&gt;</span>
          <small className="mono">O / H</small>
        </div>
        {nodes.map((node) => (
          <button
            key={node.id}
            className={`signal-node node-${node.id} ${active === node.id ? "selected" : ""}`}
            onMouseEnter={() => setActive(node.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(node.id)}
            onBlur={() => setActive(null)}
            onClick={() => setActive(node.id)}
            aria-pressed={active === node.id}
            aria-describedby="signal-detail"
          >
            <span className="node-dot" />
            <span className="mono">
              <small>{node.number}</small>
              {node.label}
            </span>
          </button>
        ))}
      </div>
      <div className="signal-bottom">
        <p id="signal-detail" aria-live="polite">
          {nodes.find((n) => n.id === active)?.detail ||
            "Different layers. One connected experience."}
        </p>
        <span className="mono">[ FULL-STACK ]</span>
      </div>
    </div>
  );
}
