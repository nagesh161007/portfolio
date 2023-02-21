import Image from "next/image";
import React from "react";
import styles from "./CertificateCard.module.scss";

export interface CertificateCardModel {
  title: string;
  image: string;
  link: string;
  date: string;
  description: string;
}

export interface CertificateCardProps {
  certitficate: CertificateCardModel;
}

function CertificateCard(props: CertificateCardProps) {
  const { title, image, link, date, description } = props.certitficate;
  return (
    <a
      className={styles.certificateCard}
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
          <Image
            src={image}
            height={180}
            width={250}
            alt="certificate-logo"
          ></Image>
        </div>
      )}
      {date && <div className={styles.date}>{date} </div>}
      {description && <div className={styles.footer}>{description}</div>}
    </a>
  );
}

export default CertificateCard;
