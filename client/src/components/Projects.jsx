import React from "react";

const ProjectCard = ({ number, title, description }) => {
  return (
    <div className="bg-yellow-500 to-black text-white p-4 rounded-lg  flex flex-col items-center">
      <div className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-full mb-4 font-bold text-lg">{number}</div>
      <div className="bg-white rounded-lg p-2">
        <h2 className="text-lg font-bold text-black mb-2">{title}</h2>
      </div>
      <p className="text-center text-sm mb-4">{description}</p>
      <div className="flex space-x-2">
        <button className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200">View Project</button>
        <button className="bg-black text-yellow-500 border border-yellow-500 px-4 py-2 rounded shadow hover:bg-yellow-500 hover:text-black">Github link</button>
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
        <h2 className="text-yellow-500 text-7xl justify-self-center font-bold mb-4 ">PROJECTS</h2>
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
