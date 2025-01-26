import React from "react";

const ProjectCard = ({ number, title, description }) => {
  return (
    <div
  className="relative bg-yellow-400 text-black p-6 border-2 shadow-xl border-white rounded-lg flex flex-col items-center"
>
  {/* Circular Badge */}
  <div className="absolute -top-5 bg-white text-black w-10 h-10 flex items-center justify-center rounded-full font-bold shadow-md">
    {number}
  </div>

  {/* Project Title */}
  <div className="bg-yellow-400 w-full px-4 py-2 text-center border-b border-black">
    <h2 className="text-lg font-bold text-black">{title}</h2>
  </div>

  {/* Description */}
  <div className="bg-white text-black p-4 rounded-lg my-6 w-full text-center">
    <p className="text-sm">{description}</p>
  </div>

  {/* Buttons */}
  <div className="flex flex-col items-center gap-3 w-full">
    <button className="bg-white text-black border border-black px-4 py-2 rounded-full shadow hover:bg-gray-100 w-4/5">
      View Project
    </button>
    <button className="bg-black text-yellow-400 border border-yellow-400 px-4 py-2 rounded-full shadow hover:bg-yellow-400 hover:text-black w-4/5">
      Github link
    </button>
  </div>
</div>

  );
};

export function Projects() {
  const projects = [
    {
      number: 1,
      title: "Mini health chatbot",
      description:
        "Classical Latin literature from 45 BC, making it over 2000 years old",
    },
    {
      number: 2,
      title: "Project Name",
      description:
        "Classical Latin literature from 45 BC, making it over 2000 years old",
    },
    {
      number: 3,
      title: "Project Name",
      description:
        "Classical Latin literature from 45 BC, making it over 2000 years old",
    },
    {
      number: 4,
      title: "Mini health chatbot",
      description:
        "Classical Latin literature from 45 BC, making it over 2000 years old",
    },
    {
      number: 5,
      title: "Project Name",
      description:
        "Classical Latin literature from 45 BC, making it over 2000 years old",
    },
    {
      number: 6,
      title: "Project Name",
      description:
        "Classical Latin literature from 45 BC, making it over 2000 years old",
    },
  ];
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-yellow-500 text-7xl justify-self-center font-bold mb-4 ">
          PROJECTS
        </h2>
        <p className="text-gray-300 mb-8">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              number={project.number}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
