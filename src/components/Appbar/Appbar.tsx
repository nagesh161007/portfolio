import Image from "next/image";
import React from "react";
import styles from "./Appbar.module.scss";
import AppLogo from "./icons/AppLogo";
import CompanySwitcher from "../CompanySwitcher";
import { useRouter } from "next/router";

const titleConfig: Record<string, string> = {
  "/projects": "PROJECTS",
  "/": "HOME"
};

function Appbar() {
  const router = useRouter();

  const getByTitle = (pathname: string): string => {
    return titleConfig[pathname];
  };

  return (
    <div className={styles.appbar}>
      <div className={styles.title}>{getByTitle(router.pathname)}</div>
      <div className={styles.leftSection}>
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
