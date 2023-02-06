import React from "react";
import styles from "./App.module.scss";
import Skills from "../Skills";
import Bio from "../Bio";
import Experience from "../Experience";
import Timeline from "../Timeline";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.timeline}>
        <Timeline></Timeline>
      </div>
      <div className={styles.infoSection}>
        <div className={styles.bio}>
          <Bio></Bio>
        </div>
        <div className={styles.skills}>
          <Skills></Skills>
        </div>
        <div className={styles.experience}>
          <Experience></Experience>
        </div>
      </div>
    </div>
  );
}

export default App;
