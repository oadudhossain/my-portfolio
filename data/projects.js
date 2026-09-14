// These are explicitly labelled placeholders, not claims of completed client work.
// Set placeholder: false and replace the content when adding a real project.
import { site } from "./site";

export const projects = [
  {
    id: "01",
    title: "Oadud Hossain portfolio",
    category: "PERSONAL PORTFOLIO",
    type: "Websites",
    description:
      "This portfolio: responsive layouts, thoughtful interactions, and a light and dark theme.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
    image: "",
    preview: "portfolio",
    liveUrl: site.url,
    githubUrl: "",
    placeholder: false,
  },
  {
    id: "02",
    title: "The web application",
    category: "FULL-STACK APPLICATION",
    type: "Applications",
    description: "A place for an application built from interface to database.",
    technologies: ["Interface", "API", "Database"],
    image: "",
    preview: "app",
    liveUrl: "",
    githubUrl: "",
    placeholder: true,
  },
  {
    id: "03",
    title: "The thoughtful interface",
    category: "FRONTEND EXPERIENCE",
    type: "Interfaces",
    description:
      "A place for a responsive interface with attention to the details.",
    technologies: ["Responsive UI", "Interactions", "Accessibility"],
    image: "",
    preview: "interface",
    liveUrl: "",
    githubUrl: "",
    placeholder: true,
  },
  {
    id: "04",
    title: "The next website",
    category: "WEBSITE PROJECT",
    type: "Websites",
    description:
      "More website projects will be added here, with a preview and a link to explore.",
    technologies: ["Website", "Responsive design"],
    image: "",
    preview: "system",
    liveUrl: "",
    githubUrl: "",
    placeholder: true,
  },
];
