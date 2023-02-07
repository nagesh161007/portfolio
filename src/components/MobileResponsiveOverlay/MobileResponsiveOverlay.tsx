import Image from "next/image";
import React from "react";
import styles from "./Mobile.module.scss";

function MobileResponsiveOverlay() {
  return (
    <div className="mobile-responsive-overlay">
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            src={"/mobileview.png"}
            alt="nagesh-developer"
            width={150}
            height={200}
          ></Image>
        </div>
        <div className={styles.inprogress}>
          <Image
            src={"/mobile.svg"}
            alt={""}
            width={32}
            height={32}
            style={{ marginRight: "1rem" }}
          ></Image>{" "}
          Mobile View in Progress ....
        </div>
      </div>
    </div>
  );
}

export default MobileResponsiveOverlay;
