import { useEffect, useState } from 'react';
import styles from './Styles.module.scss';
import peterobi from '../../assets/peterobi.png';

const StateProgress = ({ progress }) => {
  const [style, setStyle] = useState({});
  useEffect(() => {
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${progress}%`,
        backgroundColor: `${
          progress == 0 ? '#CE5D56' : progress <= 10 ? '#CE9E56' : '#03D13F'
        }`,
      };

      // 018226;
      
      // progress == 0 ? '#CE5D56' : progress <= 10 ? '#CE9E56' : '#56CE70';
      setStyle(newStyle);
    }, 200);
  });

  const progressBgStyle = {
    backgroundColor: `${
      progress == 0 ? '#FFE5E4' : progress <= 10 ? '#FAF1E4' : '#E4FFEC'
    }`,
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
