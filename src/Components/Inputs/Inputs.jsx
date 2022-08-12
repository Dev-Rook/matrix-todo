import React from 'react'

import styles from "./Styles/Inputs.module.css"


const Inputs = () => {
  return (
    <div className={styles.Input_Container}>

        <fieldset className={styles.fieldset}>
            <label className={styles.label}  htmlFor="">Create Task</label>
            <input className={styles.input} type="text" />
        </fieldset>

        <fieldset className={styles.fieldset}>
            <label className={styles.label} htmlFor="">Search Task</label>
            <input className={styles.input} type="text" />
        </fieldset>
    </div>
  )
}

export default Inputs