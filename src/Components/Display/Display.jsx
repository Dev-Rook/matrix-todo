import React from "react";

import styles from "./Styles/Display.module.css";

const Display = () => {
  return (
    <div className={styles.Display}>
      <div className={styles.Input_Counter}>
        <p className={styles.Count}>#:10</p>
      </div>
      <div className={styles.Date_Box}>
        <p className={styles.Date}>10.04.2022</p>
      </div>

      <div className={styles.Task_List}>
        <div className={styles.Task}>
          <img src={require("../../Assets/Icons/Task-Icon.png")} alt="" className={styles.Task_Icon} />
          <p className={styles.The_Task}>Dog Water</p>
          <img src={require("../../Assets/Icons/X-Icon.png")} alt="" className={styles.Delete_Icon} />
        </div>
      </div>
    </div>
  );
};

export default Display;
