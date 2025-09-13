import React from "react";
import styles from "./ToggleSwitch.module.scss";

const ToggleSwitch = ({ label, name, value, onChange }) => {
  return (
    <div className={styles.switchContainer}>
      <input
        type="checkbox"
        id={name}
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={name}>
        <span className={styles.labelText}>{label}</span>
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
