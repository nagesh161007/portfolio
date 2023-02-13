import Image from "next/image";
import React from "react";
import styles from "./ProjectCard.module.scss";
export interface ProjectCardModel {
  title: string;
  image: string;
  link: string;
  date: string;
  description: string;
}

export interface ProjectProps {
  project: ProjectCardModel;
}

function ProjectCard(props: ProjectProps) {
  console.log(props.project);
  const { title, image, link, date, description } = props.project;
  return (
    <a
      className={styles.projectCard}
      href={link}
      target={"_blank"}
      rel="noreferrer"
    >
      <div className={styles.headerSection}>
        {title && <div className={styles.header}>{title}</div>}
        <Image src={"/link.svg"} alt={"link"} height={24} width={24}></Image>
      </div>
      {image && (
        <div className={styles.icon}>
          <Image src={image} height={64} width={64} alt="project-logo"></Image>
        </div>
      )}
      {date && <div className={styles.date}>{date} </div>}
      {description && <div className={styles.footer}>{description}</div>}
    </a>
  );
}

export default ProjectCard;
