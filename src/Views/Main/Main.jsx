import React from "react";

import styles from "./Styles/Main.module.css";

import Inputs from "../../Components/Inputs/Inputs";
import Display from "../../Components/Display/Display";
import Footer from "../../Components/Footer/Footer";

const Main = () => {
  return (
    <div className={styles.Main}>
      <div className={styles.Container}>
        <Inputs />
        <Display />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
