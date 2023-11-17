import Image from "next/image";
import React, { useContext } from "react";
import styles from "./Timeline.module.scss";
import { CompanyContext } from "@/context/CompanySwitcher";
import companies from "@/constants/company";
import {
  TopLeftLight,
  TopRightLight,
  BottomLeftLight,
  BottomRightLight
} from "./Icons";

const cards = [
  {
    id: companies.FRESHWORKS,
    year: "July 2018 - March 2021",
    url: "/cards/Freshworks.png",
    history: {
      currentRole: "Software Engineer",
      currentCompany: "Freshworks",
      currentCompanyImage: "/logos/Freshworks.svg",
      nextCompanyImage: "/logos/Flipkart.svg",
      nextCompany: "Flipkart",
      nextRole: "UI Engineer"
    }
  },
  {
    id: companies.FLIPKART,
    year: "Mar 2021 - August 2022",
    url: "/cards/Flipkart.png",
    history: {
      currentRole: "Senior Frontend Engineer",
      currentCompanyImage: "/logos/Flipkart.svg",
      nextCompanyImage: "/logos/Northeastern.svg",
      nextCompany: "Northeastern University",
      currentCompany: "Flipkart",
      nextRole: "Graduate Student"
    }
  },
  {
    id: companies.NORTHEASTERN,
    url: "/cards/Northeastern.png",
    year: "June 2023 - September 2023",
    history: {
      currentRole: "Graduate Student",
      currentCompanyImage: "/logos/Northeastern.svg",
      nextCompanyImage: "/spectroCloud.png",
      nextCompany: "SpectroCloud",
      currentCompany: "Northeastern University",
      nextRole: "Frontend  Intern"
    }
  },
  {
    id: companies.SPECTROCLOUD,
    url: "/cards/SpectroCloud.png"
  }
];

function Timeline() {
  return (
    <div className={styles.timelineContainer}>
      {cards.map((card, index) => {
        return <Card key={index} index={index} card={card}></Card>;
      })}
    </div>
  );
}

function Card(props: any) {
  const { card, index } = props;
  const { currentCompany, switchCompany } = useContext(CompanyContext);
  const canShow = currentCompany.company === card.id;

  return (
    <>
      <div
        className={`${styles.card} ${canShow ? "timeline-card" : ""}`}
        onClick={() => {
          const audio = new Audio("/light.mp3");
          audio.play();
          switchCompany(index);
        }}
      >
        <TopLeftLight canShow={canShow}></TopLeftLight>
        <TopRightLight canShow={canShow}></TopRightLight>
        <BottomLeftLight canShow={canShow}></BottomLeftLight>
        <BottomRightLight canShow={canShow}></BottomRightLight>
        <Image
          src={card.url}
          alt={"image"}
          height={270}
          width={200}
          loading={"eager"}
        ></Image>
      </div>
      {card.history && (
        <div className={styles.history}>
          <div className={styles.companies}>
            <div className={styles.companies}>
              <Image
                src={card.history.currentCompanyImage}
                alt="current Company"
                height={32}
                width={32}
              ></Image>
            </div>
            <div className={styles.duration}>{card.year}</div>
            <div className={styles.companies}>
              <Image
                src={card.history.nextCompanyImage}
                alt="next company"
                height={32}
                width={40}
              ></Image>
            </div>
          </div>
          <div
            className={styles.arrow}
            style={{ animationDelay: `${index + 1}s` }}
          ></div>
          <div className={styles.positions}>
            <div className={styles.position}>{card.history.currentRole}</div>
            <div className={styles.position}>{card.history.nextRole}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Timeline;
