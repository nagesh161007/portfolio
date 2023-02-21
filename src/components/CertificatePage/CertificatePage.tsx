import React from "react";
import styles from "./CertificatePage.module.scss";
import CertificateCard, {
  CertificateCardModel,
} from "../CertificateCard/CertificateCard";

const certificates = [
  {
    title: "Frontend Expert",
    image: "/certificates/frontend-expert.jpg",
    link: "https://certificate.algoexpert.io/FE-c62920ad97",
    date: "Feb 2023",
    description: "Frontend Expert Certificate by AlgoExpert.io",
  },
];

function CertificatePage() {
  return (
    <div className={styles.certificateContainer}>
      <div className={styles.certificateList}>
        {certificates.map(
          (certitficate: CertificateCardModel, index: number) => {
            return (
              <CertificateCard
                key={index}
                certitficate={certitficate}
              ></CertificateCard>
            );
          }
        )}
      </div>
    </div>
  );
}

export default CertificatePage;
