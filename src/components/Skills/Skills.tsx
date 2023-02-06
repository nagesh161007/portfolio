import Image from "next/image";
import React, { useContext } from "react";
import styles from "./Skills.module.scss";
import portfoliodata from "@/constants/portfoliodata";
import { CompanyContext } from "@/context/CompanySwitcher";

function Skills() {
  const { currentCompany } = useContext(CompanyContext);
  // @ts-ignore
  const skills = portfoliodata.companies[currentCompany.company].skills;
  return (
    <div className={styles.skillSection}>
      <div className={styles.skillHeading}>SKILLS</div>
      <ul className={styles.skillList}>
        {skills &&
          skills.map((skill: any, index: number) => {
            return <Skill skill={skill} key={index}></Skill>;
          })}
      </ul>
    </div>
  );
}

export default Skills;

interface Skill {
  skill: {
    title: string;
    progress: number;
    id: string;
  };
  key: number;
}

function Skill(props: Skill) {
  const { title, id, progress } = props.skill;

  return (
    <li className={styles.skill}>
      <div className={styles.skillImage}>
        <Image src={`skills/${id}.svg`} width={24} height={24} alt={id}></Image>
      </div>
      <div className={styles.skillRatingContainer}>
        <div className={styles.skillRatingInfo}>
          <div className={styles.skillName}>{title}</div>
          <div className={styles.rating}>{progress}</div>
        </div>
        <div className={styles.skillProgressContainer}>
          <div
            className={styles.skillProgressBar}
            style={{ width: `${progress}%` }}
          >
            <div className={styles.progress}></div>
          </div>
        </div>
      </div>
    </li>
  );
}
