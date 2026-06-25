export interface Project {
  title: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "Banking App",
    description:
      "Modern banking application with authentication and transactions.",
    tech: ["Next.js", "Tailwind", "Node.js"],
    live: "#",
    github: "#",
  },
  {
    title: "Social Media App",
    description:
      "Full stack social media application with authentication.",
    tech: ["Next.js", "MongoDB", "Prisma"],
    live: "#",
    github: "#",
  },
  {
    title: "ChatGPT Clone",
    description:
      "AI-powered chatbot application.",
    tech: ["Next.js", "OpenAI API"],
    live: "#",
    github: "#",
  },
];

export default projects;