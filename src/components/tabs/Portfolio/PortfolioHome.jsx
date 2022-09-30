import React from "react";
import ProjectCard from "./ProjectCard";

export default function PortfolioHome() {
  return (
    <div className="w-full flex justify-center my-10">
      <div className="w-4/5 flex justify-center dark:text-light text-dark ">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
  );
}
