/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import styles from "./Modal.module.scss";

interface modalProps {
  onClose: Function;
}

function Modal(props: modalProps) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <div className={styles.title}>PORTFOLIO THEME</div>
          <div
            className={styles.closeButton}
            onClick={() => {
              props.onClose();
            }}
          >
            X
          </div>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.info}>
            Obsessed with FIFA Ultimate team game. Why not FUT theme based
            portfolio...
          </div>
          <Image
            width={600}
            height={400}
            src={"/themeInfo.png"}
            className={styles.image}
            alt={"theme-info"}
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Modal;
