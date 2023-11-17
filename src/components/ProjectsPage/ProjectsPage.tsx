import React from "react";
import ProjectCard from "../ProjectCard";
import styles from "./ProjectPage.module.scss";
import { ProjectCardModel } from "../ProjectCard/ProjectCard";

const projects: ProjectCardModel[] = [
  {
    title: "Nike Customize Shoe",
    image: "/skills/threejs.png",
    link: "https://nike-customize-clone.vercel.app/",
    date: "March 2023",
    description: "Nike Customizable Shoe"
  },
  {
    title: "Interview Battles",
    image: "/skills/figma.svg",
    link: "https://www.figma.com/file/RTdXifvIxuop9BXQEuNL2G/Interview-Battles?type=design&node-id=0%3A1&mode=design&t=dMFHElUvGybNnV7u-1",
    date: "Nov 2023",
    description: "Gamification Platform for mock Interviews"
  },
  {
    title: "Frontend Deployment Handbook",
    image: "/skills/docusaurus.svg",
    link: "https://frontend-deployment-handbook.vercel.app/",
    date: "IN PROGRESS",
    description: "Frontend Deployment Guide Handbook using Docusaurus"
  },
  {
    title: "PortFolio Website",
    image: "/skills/nextjs.svg",
    link: "https://nageshsairam.com",
    date: "Jan 2023",
    description: "FIFA FUT Themed Personel portfolio in Next.js"
  },
  {
    title: "Portfolio Design",
    image: "/skills/figma.svg",
    link: "https://www.figma.com/file/ggw1lWZEWnWi93GnmjE7yO/My-portfolio?node-id=117%3A2&t=FKwpjr4TUA5o4n8A-1",
    date: "Dec 2022",
    description: "FIFA FUT Themed Personel portfolio design in Figma"
  }
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
