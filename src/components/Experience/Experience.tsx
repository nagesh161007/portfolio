import React, { useContext } from "react";
import styles from "./Experience.module.scss";
import { CompanyContext } from "@/context/CompanySwitcher";
import portfoliodata from "@/constants/portfoliodata";
import Image from "next/image";
function Experience() {
  const { currentCompany } = useContext(CompanyContext);

  const workexperience =
    // @ts-ignore
    portfoliodata.companies[currentCompany.company].experience;
  return (
    <div className={styles.experienceContainer}>
      <div className={styles.header}>WORK EXPERIENCE</div>
      <ul className={styles.content}>
        {workexperience.map((experience: any, index: number) => {
          return (
            <li key={index} className={styles.experience}>
              <Image
                src={"/star.svg"}
                height={10}
                width={10}
                alt="list-icon"
              ></Image>{" "}
              {experience}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Experience;
