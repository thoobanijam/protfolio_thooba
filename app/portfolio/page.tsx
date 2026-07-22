import Image from "next/image";

export default function PortfolioPage() {
  const projects = [
    {
      image: "img/ai.png",
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
      image:"img/bankingapp.png",
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
      image: "img/berry.png",
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
      image:"img/chatgpt.png",
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
       image: "img/employeemonitoring.png",
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
     
       image:"img/nextmerce.png",
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
       image: "img/socialmedia.png",
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
      image:"img/virudo.png",
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
   <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-black text-white px-6 py-14">
      <div className="max-w-7xl mx-auto">
   <h1 className="text-6xl font-extrabold text-center mb-5 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
          NEXT JS PROHECTS
        </h1>

        <p className="text-center text-gray-400 mb-12">
          Full Stack Developer | React | Next.js | Node.js | Java 
         
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
group
relative
overflow-hidden
rounded-3xl
border border-white/10
bg-white/5
backdrop-blur-lg
p-7
shadow-xl
transition-all
duration-500
hover:-translate-y-3
hover:shadow-purple-500/40
hover:border-purple-400
"
            >
              <div className="w-85 h-50  m-4">
               <img
    src={project.image}
    alt={project.name}
    className="w-full h-full object-cover"
  />
              </div>
            <h2 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition">
    {project.name}
</h2>

            <p className="text-gray-300 leading-7 mb-5">
    {project.description}
</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="bg-grey px-4 py-2 rounded-full text-sm border border-gray-400 text-gray-400"
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