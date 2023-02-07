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
            Obssesed with FIFA Ultimate team game. Why not FUT theme based
            porfolio ?
          </div>
          <img
            src={"/themeInfo.png"}
            className={styles.image}
            alt={"theme-info"}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Modal;
