export default function PortfolioPage() {
  const projects = [
    {
      name: "AI Image Generator",
      description:
        "A web application that generates AI-powered images from text prompts using the Pollinations AI API. Users can create unique artwork instantly and download generated images.",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Pollinations AI API",
        "Vercel",
      ],
      liveUrl: "https://ai-khaki-tau.vercel.app/",
      githubUrl: "https://github.com/thoobanijam/ai-grils-image-genarator",
    },

    

    {
      name: "Banking App",
      description:
       
  "Developed a banking management platform that enables users to manage accounts, perform fund transfers, view transaction history, and monitor account balances in real time.",
    tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        
        "Vercel",
      ],
      liveUrl: "https://banking-app-kappa-weld.vercel.app/",
      githubUrl: "https://github.com/thoobanijam/banking-app",
    },

    {
      name: "BerryChart",
      description: "Analytics dashboard with interactive charts.",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        
        "Vercel",
      ],
      liveUrl: "#https://berrychart.vercel.app/?utm_source=chatgpt.com",
      githubUrl: "https://github.com/thoobanijam/Berry-chart",
    },

    {
      name: "ChatGPT Clone",
      description: "AI chatbot application inspired by ChatGPT.A ChatGPT-inspired AI chatbot that leverages the Groq AI API for fast, real-time natural language conversations.",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
       
        "Vercel",
      ],
      liveUrl: "https://chatgpt-clone-omega-three.vercel.app/?utm_source=chatgpt.com",
      githubUrl: "https://github.com/thoobanijam/Chat-GPT",
    },

    {
      name: "Employee App",
      description: "Employee management application.",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        
        "Vercel",
      ],
      liveUrl: "https://emsemployeemonitoringsystem.vercel.app",
      githubUrl: "https://github.com/thoobanijam/ems_employeemonitoringsystem",
    },

   

    {
      name: "Nextmerce",
      description: "Full-stack eCommerce application.",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
       
        "Vercel",
      ],
      liveUrl: "https://nextmerce-three.vercel.app",
      githubUrl: "https://github.com/thoobanijam/nextmerce"
    },

    {
      name: "Social Media App",
      description:
        "Social networking application with posts, comments, and user profiles.Upload photos,videos",
     tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
       
        "Vercel",
      ],
      liveUrl: "https://socialmedia-otbbwopyt-thoobanijams-projects.vercel.app/",
      githubUrl: "https://github.com/thoobanijam/file-upload-app",
    },

    {
      name: "Virudo",
      description: "Business management platform.",
     tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
       
        "Vercel",
      ],
      liveUrl: "https://virudo.vercel.app",
      githubUrl: "https://github.com/thoobanijam/virudo",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4">
          My Portfolio
        </h1>

        <p className="text-center text-gray-400 mb-12">
          Full Stack Developer | React | Next.js | Node.js | Flutter | Java |
          Express.js
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-purple-500 transition-all"
            >
              <h2 className="text-2xl font-semibold mb-3">
                {project.name}
              </h2>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="bg-slate-800 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700"
                >
                  Live Demo
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-600 px-4 py-2 rounded-lg hover:border-white"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}