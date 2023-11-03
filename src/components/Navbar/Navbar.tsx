import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";
import {
  HomeIcon,
  ProjectIcon,
  PathIcon,
  CertIcon,
  InterviewIcon,
  TopMateIcon
} from "./icons";
import Image from "next/image";
import InfoIcon from "./icons/InfoIcon";
import Modal from "../Modal/Modal";

export const navBarItems = [
  {
    title: "home",
    url: "/",
    icon: HomeIcon,
    enabled: true
  },
  {
    title: "projects",
    url: "/projects",
    icon: ProjectIcon,
    enabled: true
  },
  {
    title: "cert",
    url: "/certifications",
    icon: CertIcon,
    enabled: true
  },
  {
    title: "Path",
    url: "https://frontendmasters.com/u/nageshsairam/",
    icon: PathIcon,
    enabled: true,
    externalLink: true
  },
  {
    title: "Blog",
    url: "/blog/frontend-interview-guide",
    icon: InterviewIcon,
    enabled: true
  }
];

function sendTracking() {
  const url = new URL(window.location.href);
  const searchParams = url.searchParams;
  const utmTracking = searchParams.get("utm_tracking");
  if (
    Boolean(!utmTracking) ||
    Boolean(localStorage.getItem("utm_tracking_resume"))
  ) {
    return;
  }

  localStorage.setItem("utm_tracking_resume", utmTracking ? utmTracking : "");
  const data = { utm_source: utmTracking ? utmTracking : "" };

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };

  // make the fetch request to the API endpoint
  fetch("api/tracking", options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data sent successfully:", data);
    })
    .catch((error) => {
      console.error("Error sending data:", error);
    });
}

function Navbar() {
  const [isLoading, setLoading] = useState(true);
  const [isModalOpen, openModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
    console.log("tracking");
    sendTracking();
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
            <Link
              href={navItem.url}
              key={index}
              target={navItem.externalLink ? "_blank" : ""}
              className={navItem.enabled ? styles.enabled : styles.disabled}
            >
              <li
                className={`${styles.navItem}  ${
                  router.pathname === navItem.url ? styles.active : ""
                } `}
                key={index}
              >
                <navItem.icon
                  color={
                    router.pathname === navItem.url ? "#243962" : "#D8D5DD"
                  }
                ></navItem.icon>
                <p className={styles.name}>{navItem.title}</p>
              </li>
            </Link>
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
