import React, { useState } from "react";

import styles from "./Styles/Main.module.css";

import Inputs from "../../Components/Inputs/Inputs";
// import Display from "../../Components/Display/Display";
import Footer from "../../Components/Footer/Footer";

const Main = () => {
  const [taskList, setTaskList] = useState([]);
  const [newTask, SetNewTask] = useState("");

  const handleChange = (e) => {
    SetNewTask(e.target.value);
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
    <div className={styles.Main}>
      <div className={styles.Container}>
        <div className={styles.Input_Container}>
          <fieldset className={styles.fieldset}>
            <label className={styles.label} onClick={addTask} htmlFor="">
              Create Task
            </label>
            <input
              className={styles.input}
              onKeyPress={handleChange}
              type="text"
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <label className={styles.label} htmlFor="">
              Search Task
            </label>
            <input className={styles.input} type="text" />
          </fieldset>
        </div>

        <div className={styles.Display}>
          <div className={styles.Header}>
            <div className={styles.Input_Counter}>
              <p className={styles.Count}>#:10</p>
            </div>
            <div className={styles.Date_Box}>
              <p className={styles.Date}>10.04.2022</p>
            </div>
          </div>

          <div className="Line"></div>

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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
