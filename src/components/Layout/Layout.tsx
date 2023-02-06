import React from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import Appbar from "../Appbar";
import styles from "./Layout.module.scss";
import CompanySwitcher from "../../context/CompanySwitcher";
interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  return (
    <>
      <CompanySwitcher>
        <Header></Header>
        <main className={styles.main}>
          <section className={styles.layout}>
            <Navbar></Navbar>
            <section className={styles.appSection}>
              <Appbar></Appbar>
              {props.children}
            </section>
          </section>
        </main>
      </CompanySwitcher>
    </>
  );
}

export default Layout;
