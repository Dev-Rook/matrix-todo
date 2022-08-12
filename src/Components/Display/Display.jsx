import React, { useState } from "react";

import styles from "./Styles/Display.module.css";

const Display = () => {
  const [taskList, setTaskList] = useState([]);
  const [newTask, SetNewTask] = useState("");

  const handleChange = (e) => {
    if (e.key === "Enter") {
      SetNewTask(e.taret.value);
    }
  };

  const addTask = () => {
    const task = {
      id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
      taskName: newTask,
    };

    setTaskList([...taskList, task]);
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.Display}>
      <div className={styles.Input_Counter}>
        <p className={styles.Count}>#:10</p>
      </div>
      <div className={styles.Date_Box}>
        <p className={styles.Date}>10.04.2022</p>
      </div>

      {taskList.map((task) => {
        return (
          <div className={styles.Task_List}>
            <div className={styles.Task}>
              <img
                src={require("../../Assets/Icons/Task-Icon.png")}
                alt=""
                className={styles.Task_Icon}
              />
              <p className={styles.The_Task}>{task.taskName}</p>
              <img
                onClick={() => deleteTask(task.id)}
                src={require("../../Assets/Icons/X-Icon.png")}
                alt=""
                className={styles.Delete_Icon}
              />
            </div>
          </div>
        );
      })}

      {/* <div className={styles.Task_List}>
        <div className={styles.Task}>
          <img src={require("../../Assets/Icons/Task-Icon.png")} alt="" className={styles.Task_Icon} />
          <p className={styles.The_Task}>Dog Water</p>
          <img src={require("../../Assets/Icons/X-Icon.png")} alt="" className={styles.Delete_Icon} />
        </div>
      </div> */}
    </div>
  );
};

export default Display;
