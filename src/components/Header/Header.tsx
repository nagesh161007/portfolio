import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";
import Github from "./Icons/Github";
import LinkedIn from "./Icons/Linkedin";
import Mail from "./Icons/Mail";

function Header() {
  return (
    <div className={styles.appHeader}>
      <div className={styles.name}>NS 23</div>
      <div className={`${styles.status} header-description`}>
        Hi !. I am Nagesh, Former Senior Frontend Engineer at Flipkart.
        Currently Looking for Full-time Frontend Developer Oppurtunities
      </div>
      <div className={styles.links}>
        <a
          href="https://github.com/nagesh161007"
          rel="noreferrer"
          target={"_blank"}
          aria-label="github"
        >
          <Github></Github>
        </a>
        <a
          href="mailto:seeni.n@northeastern.edu"
          rel="noreferrer"
          aria-label="mail"
        >
          <Mail></Mail>
        </a>
        <a
          href="https://www.linkedin.com/in/nageshwara-sairam/"
          rel="noreferrer"
          target={"_blank"}
          aria-label="Linkedin"
        >
          <LinkedIn></LinkedIn>
        </a>
      </div>
    </div>
  );
}

export default Header;
