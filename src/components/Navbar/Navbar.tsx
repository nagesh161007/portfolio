import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";
import { HomeIcon, ProjectIcon, PathIcon, CertIcon } from "./icons";
import Image from "next/image";
import InfoIcon from "./icons/InfoIcon";
import Modal from "../Modal/Modal";

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
  const [isModalOpen, openModal] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const handleModalClose = () => {
    openModal(false);
  };

  const handleModalOpen = () => {
    openModal(true);
  };

  const router = useRouter();
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navItemList}>
        <li className={styles.imageContainer}>
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
        </li>
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
      <div style={{ margin: "auto" }} onClick={handleModalOpen}>
        <InfoIcon></InfoIcon>
      </div>
      {isModalOpen && <Modal onClose={handleModalClose}></Modal>}
    </nav>
  );
}

export default Navbar;
