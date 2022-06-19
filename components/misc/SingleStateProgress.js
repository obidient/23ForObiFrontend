import { useState } from 'react';
import styles from './Styles.module.scss';

const SingleStateProgress = ({ done }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className={styles.single_state_progress}>
      <div className={styles.single_state_progress_done} style={style}>
        <div className={styles.percent}>
          <p>{done}%</p>
        </div>
      </div>
      <div className={styles.percent_all}>
        <p>100%</p>
      </div>
    </div>
  );
};

export default SingleStateProgress;
