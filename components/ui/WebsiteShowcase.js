"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";

export default function WebsiteShowcase({ projects }) {
  const [category, setCategory] = useState("All work");
  const [query, setQuery] = useState("");
  const categories = [
    "All work",
    ...new Set(projects.map((project) => project.type).filter(Boolean)),
  ];
  const filtered = projects.filter(
    (project) =>
      (category === "All work" || project.type === category) &&
      [
        project.title,
        project.description,
        project.category,
        ...project.technologies,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  return (
    <div className="website-showcase">
      <div className="showcase-toolbar">
        <div
          className="showcase-filters"
          role="group"
          aria-label="Filter projects by type"
        >
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              className="showcase-filter"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="project-search">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="m16 16 5 5" />
          </svg>
          <input
            type="search"
            aria-label="Search projects"
            placeholder="Find a project…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </div>
      <p
        className="showcase-result-count mono"
        role="status"
        aria-live="polite"
      >
        {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        {category !== "All work" ? ` / ${category}` : ""}
      </p>
      <div className="website-grid">
        {filtered.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="showcase-empty">
          <h3>No matching projects.</h3>
          <p>Try another keyword or project type.</p>
          <button
            type="button"
            onClick={() => {
              setCategory("All work");
              setQuery("");
            }}
          >
            Show all work <span aria-hidden="true">↗</span>
          </button>
        </div>
      )}
    </div>
  );
}
