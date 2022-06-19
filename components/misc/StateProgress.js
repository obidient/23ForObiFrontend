import { useState } from 'react';
import styles from './Styles.module.scss';
import peterobi from '../../assets/peterobi.png';

const StateProgress = ({ progress }) => {
  const [style, setStyle] = useState({});
  //   console.log(progress);
  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${progress}%`,
      backgroundColor: `${progress < 50 ? '#CE9E56' : '#018226'}`,
    };

    setStyle(newStyle);
  }, 200);

  const progressBgStyle = {
    backgroundColor: `${progress < 50 ? '#FAF1E4' : '#E7FFEC'}`,
  };

  return (
    <div
      className={`${styles.progress} ${styles.state_progress}`}
      style={progressBgStyle}
    >
      <div className={styles.progress_done} style={style}></div>
    </div>
  );
};

export default StateProgress;
