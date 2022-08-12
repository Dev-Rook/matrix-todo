import React, {useState} from "react";

import styles from "./Styles/Main.module.css";

import Inputs from "../../Components/Inputs/Inputs";
import Display from "../../Components/Display/Display";
import Footer from "../../Components/Footer/Footer";

const Main = () => {

    const [taskList, setTaskList] = useState([]);
    const [newTask, SetNewTask] = useState("");

    const handleChange = (e) => {
        if (e.key === "Enter") {
            setTaskList(e.taret.value);
        }
    };

    const addTask = () => {
        const task = {
            id: taskList.length === 0 ? 1 : taskList[taskList.length -1].id + 1,
            taskName: newTask
        };

        setTaskList([...taskList, task])
    }

    const deleteTask = (id) => {
        setTaskList(taskList.filter((task) => task.id !== id ));
    }

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
