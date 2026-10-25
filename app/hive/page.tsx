import React from "react";

const page = () => {
  const hiveProjects = [
    {
        image: "/img/flutter-to-do.png",
      title: "NOTES-APP",
      description:"Built separate screens for Notes and To-Do functionality using reusable Flutter widgets.Integrated Hive local database",
      tech: ["Flutter", "Dart", "Hive Local Storage", "Material UI"],
      
      githubUrl: "https://github.com/thoobanijam/to-do-flutter.git",
       RenderLiveUrl: "https://to-do-flutter.onrender.com",

    },
    {
       image: "/img/calc.png",
      title: "CALCULATOR-APP",
      description:"A simple calculator built with Flutter featuring arithmetic operations, calculation history, and Hive local database.",
      tech: ["Flutter", "Dart", "Hive Local Storage", "Material UI"],
      
      githubUrl: "https://github.com/thoobanijam/calculator-app",
 RenderLiveUrl: "https://calculator-app-latest-rvir.onrender.com/",
    },
   
  ];

  return (
    <div
      className="
      min-h-screen
      px-6
      py-14
      text-white
      bg-gradient-to-br
      from-slate-950
      via-purple-950
      to-blue-950
      "
    >

      {/* Background Glow */}
      <div className="
      absolute
      top-20
      left-20
      w-72
      h-72
      bg-purple-600
      rounded-full
      blur-3xl
      opacity-30
      ">
      </div>


      <div className="relative">


      {/* Header */}
      <div className="text-center mb-14">

        <h1
        className="
        text-5xl
        font-extrabold
        bg-gradient-to-r
        from-blue-400
        to-purple-500
        bg-clip-text
        text-transparent
        "
        >
          Hive Projects
        </h1>

        <p className="mt-4 text-gray-300 text-lg">
          A collection of my featured development projects
        </p>

      </div>



      {/* Cards */}

      <div
      className="
      grid
      gap-10
      sm:grid-cols-2
      lg:grid-cols-3
      max-w-7xl
      mx-auto
      "
      >

      {
        hiveProjects.map((project,index)=>(

          <div
          key={index}
          className="
          bg-white/10
          backdrop-blur-lg
          border
          border-white/20
          rounded-3xl
          overflow-hidden
          shadow-xl
          hover:-translate-y-3
          hover:shadow-purple-500/30
          transition-all
          duration-500
          "
          >


            <img
            src={project.image}
            alt={project.title}
            className="
            w-full
            h-52
            object-cover
            "
            />



            <div className="p-6">


            <h2
            className="
            text-2xl
            font-bold
            mb-3
            "
            >
              {project.title}
            </h2>



            <p
            className="
            text-gray-300
            mb-5
            "
            >
              {project.description}
            </p>



            <div className="
            flex
            flex-wrap
            gap-2
            mb-6
           
            ">

            {
              project.tech.map((item,i)=>(

                <span
                key={i}
                className="
                border border-gray-400
                px-4
                py-2
                rounded-full
                text-lg
                text-gray-300
                cursor-pointer
                "
                >
                  {item}
                </span>

              ))
            }

            </div>



                   <div className="flex gap-4">
                       <a
              href={project.githubUrl}
              target="_blank"
                  rel="noopener noreferrer"
            className="
            w-full
            px-5
            py-3
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-purple-600
            hover:scale-105
            transition
            cursor-pointer
            "
            >
              View Project
            </a>

 
{project.RenderLiveUrl && (
  <a
    href={project.RenderLiveUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center 
    rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-green-700 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  >
    Live Demo ↗
  </a>
)}



                   </div>
                     </div>


          </div>


        ))
      }


      </div>

      </div>


    </div>
  );
};

export default page;