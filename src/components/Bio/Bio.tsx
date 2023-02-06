import React, { useState, useContext } from "react";
import styles from "./Bio.module.scss";
import portfoliodata from "@/constants/portfoliodata";
import { CompanyContext } from "@/context/CompanySwitcher";
import Image from "next/image";

function Bio() {
  const { currentCompany } = useContext(CompanyContext);
  const [selectedTab, setSelectedTab] = useState(0);
  const info =
    // @ts-ignore
    portfoliodata.companies[currentCompany.company].info;
  // @ts-ignore
  const traits = portfoliodata.companies[currentCompany.company].traits;

  function handleTabSwitch(tabIndex: number) {
    setSelectedTab(tabIndex);
  }

  return (
    <div className={styles.bioContainer}>
      <div className={styles.headerTab}>
        <div
          className={`${styles.tab}  ${
            selectedTab == 0 ? styles.selected : ""
          }`}
          onClick={() => {
            handleTabSwitch(0);
          }}
        >
          Info
        </div>
        <div
          className={`${styles.tab}  ${
            selectedTab == 1 ? styles.selected : ""
          }`}
          onClick={() => {
            handleTabSwitch(1);
          }}
        >
          Traits
        </div>
      </div>
      <div className={styles.tabContent}>
        <ul style={{ display: selectedTab == 0 ? "block" : "none" }}>
          {info.map((info: any, index: number) => {
            return (
              <li key={index} className={styles.infoItem}>
                <div className={styles.title}>{info.title}</div>
                <div className={styles.subtitle}>{info.subtitle}</div>
              </li>
            );
          })}
        </ul>
        <ul style={{ display: selectedTab == 1 ? "block" : "none" }}>
          {traits &&
            traits.map((trait: any, index: number) => {
              return (
                <li key={index} className={styles.trait}>
                  <div className={styles.title}>{trait.title}</div>
                  <Image
                    className={styles.traitImage}
                    src={`/traits/${trait.id}.png`}
                    alt={"trait"}
                    width={32}
                    height={32}
                  ></Image>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Bio;
