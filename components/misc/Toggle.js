import React from 'react';
import styles from './Styles.module.scss';

const Toggle = ({ isOn, handleToggle, onColor }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className={styles.toggle_checkbox}
        type="checkbox"
        id={`toggle_new`}
      />
      <label
        style={{ background: isOn && onColor }}
        className={styles.toggle_label}
        htmlFor={`toggle_new`}
      >
        <span className={styles.toggle_btn} />
      </label>
    </>
  );
};

export default Toggle;
