export interface Project {
  title: string;
  tech: string[];
  image: string;
  codeUrl: string;
  projectUrl: string;
}

export const projects: Project[] = [
  {
    title: "Design Portfolio",
    tech: ["HTML", "CSS"],
    image: "/thumbnail-project-1-small.webp",
    codeUrl: "https://github.com/orphandeity/single-page-design-portfolio",
    projectUrl: "https://orphandeity.github.io/single-page-design-portfolio",
  },
  {
    title: "E-learning landing page",
    tech: ["HTML", "CSS"],
    image: "/thumbnail-project-2-small.webp",
    codeUrl: "",
    projectUrl: "",
  },
  {
    title: "Todo web app",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/thumbnail-project-3-small.webp",
    codeUrl: "https://github.com/orphandeity/todo-app",
    projectUrl: "https://orphandeity.github.io/todo-app/",
  },
  {
    title: "Entertainment web app",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/thumbnail-project-4-small.webp",
    codeUrl: "",
    projectUrl: "",
  },
  {
    title: "Memory game",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/thumbnail-project-5-small.webp",
    codeUrl: "",
    projectUrl: "",
  },
  {
    title: "Art gallery showcase",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/thumbnail-project-6-small.webp",
    codeUrl: "",
    projectUrl: "",
  },
];
