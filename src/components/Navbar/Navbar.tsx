import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";
import { HomeIcon, ProjectIcon, PathIcon, CertIcon } from "./icons";
import Image from "next/image";
import InfoIcon from "./icons/InfoIcon";

export const navBarItems = [
  {
    title: "home",
    url: "/",
    icon: HomeIcon,
    enabled: true,
  },
  {
    title: "projects",
    url: "/projects",
    icon: ProjectIcon,
    enabled: false,
  },
  {
    title: "Path",
    url: "/blog",
    icon: PathIcon,
    enabled: false,
  },
  {
    title: "cert",
    url: "/certifications",
    icon: CertIcon,
    enabled: false,
  },
];

function Navbar() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      console.log("set loading");
      setLoading(false);
    }, 4000);
  }, []);

  const router = useRouter();
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navItemList}>
        <div className={styles.imageContainer}>
          {isLoading ? (
            <div className={styles.loader}></div>
          ) : (
            <>
              <Image
                className={styles.imageAngry}
                src={"/angry-nagesh.gif"}
                height={75}
                width={80}
                alt="nagesh-face-memoji-happy"
              ></Image>
              <Image
                className={styles.imageHappy}
                src={"/happy-nagesh.gif"}
                height={75}
                width={80}
                loading="lazy"
                alt="nagesh-face-memoji-angry"
              ></Image>
            </>
          )}
        </div>
        {navBarItems.map((navItem, index) => {
          return (
            <li
              className={`${styles.navItem}  ${
                router.pathname === navItem.url ? styles.active : ""
              } ${navItem.enabled ? styles.enabled : styles.disabled}`}
              key={index}
            >
              <Link href={navItem.url}>
                <navItem.icon
                  color={
                    router.pathname === navItem.url ? "#243962" : "#D8D5DD"
                  }
                ></navItem.icon>
                <p className={styles.name}>{navItem.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
      <div style={{ margin: "auto" }}>
        <InfoIcon></InfoIcon>
      </div>
    </nav>
  );
}

export default Navbar;
