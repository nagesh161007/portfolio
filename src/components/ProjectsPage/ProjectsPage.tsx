import React from "react";
import ProjectCard from "../ProjectCard";
import styles from "./ProjectPage.module.scss";
import { ProjectCardModel } from "../ProjectCard/ProjectCard";

const projects: ProjectCardModel[] = [
  {
    title: "Portfolio Design",
    image: "/skills/figma.svg",
    link: "https://www.figma.com/file/ggw1lWZEWnWi93GnmjE7yO/My-portfolio?node-id=117%3A2&t=FKwpjr4TUA5o4n8A-1",
    date: "Dec 2023",
    description: "FIFA FUT Themed Personel portfolio design in Figma",
  },
  {
    title: "PortFolio Website",
    image: "/skills/nextjs.svg",
    link: "https://nageshsairam.com",
    date: "Jan 2023",
    description: "FIFA FUT Themed Personel portfolio in Next.js",
  },
];

function ProjectPage() {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectList}>
        {projects.map((project: ProjectCardModel, index: number) => {
          return <ProjectCard key={index} project={project}></ProjectCard>;
        })}
      </div>
    </div>
  );
}

export default ProjectPage;