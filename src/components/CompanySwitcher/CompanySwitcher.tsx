import Image from "next/image";
import React, { useContext, useState } from "react";
import styles from "./CompanySwitcher.module.scss";
import companiesConstant from "@/constants/company";
import { CompanyContext } from "@/context/CompanySwitcher";
const companies = [
  {
    src: "/logos/Freshworks.svg",
    alt: "Freshworks",
    id: companiesConstant.FRESHWORKS
  },
  {
    src: "/logos/Flipkart.svg",
    alt: "Flipkart",
    id: companiesConstant.FLIPKART
  },
  {
    src: "/logos/Northeastern.svg",
    alt: "Northeastern",
    id: companiesConstant.NORTHEASTERN
  },
  {
    src: "/spectroCloud.png",
    alt: "Spectro Cloud",
    id: companiesConstant.SPECTROCLOUD
  }
];

function CompanySwitcher() {
  const { currentCompany, switchCompany } = useContext(CompanyContext);

  return (
    <div
      className={styles.companySwitcher}
      onClick={() => {
        const audio = new Audio("/light.mp3");
        audio.play();
        switchCompany();
      }}
    >
      {companies.map((company) => {
        return (
          <Image
            className={`${styles.company} ${
              currentCompany.company === company.id ? styles.show : styles.hide
            } `}
            src={company.src}
            key={company.id}
            alt={company.id}
            width={32}
            height={32}
          ></Image>
        );
      })}
    </div>
  );
}

export default CompanySwitcher;
