import React from "react";
import Title from "../layouts/Title";
import { instagram, netflix, dalle } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" instagram cloned using html css javascript and php"
          src={instagram}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" I clone netflix using the reactjs, tailwindcss, nodejs expressjs , and mongodb "
          src={netflix}
        />
        <ProjectsCard
          title="Dalle-2 clone"
          des=" I clone dalle with the reactjs, tailwindcss, nodejs express and mongodb "
          src={dalle}
        />
      </div>
    </section>
  );
};

export default Projects;
