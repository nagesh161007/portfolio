import Image from "next/image";
import React from "react";
import View from "./icons/View";
import styles from "./Appbar.module.scss";
import AppLogo from "./icons/AppLogo";
import CompanySwitcher from "../CompanySwitcher";

function Appbar() {
  return (
    <div className={styles.appbar}>
      <div className={styles.title}>HOME</div>
      <div className={styles.leftSection}>
        <div>
          <a href="https://drive.google.com/u/0/uc?id=1a-5aVQUt0Pj6ztZ8_g_aYPoKTGfS9Pz1&export=download">
            <Image
              src={"/resume.png"}
              width={32}
              height={32}
              alt={"resume"}
            ></Image>
          </a>
        </div>
        <div className={styles.info}>
          <div className={styles.name}>Nagesh</div>
          <div className={styles.estimated}>EST. 2018</div>
        </div>
        <div className={styles.company}>
          <CompanySwitcher></CompanySwitcher>
        </div>
        <div className={styles.logo}>
          <AppLogo></AppLogo>
        </div>
        <div className={styles.switcher}></div>
      </div>
    </div>
  );
}

export default Appbar;
