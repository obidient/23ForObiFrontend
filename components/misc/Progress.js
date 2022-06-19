import { useState } from 'react';
import styles from './Styles.module.scss';
import peterobi from '../../assets/peterobi.png';
import Image from 'next/image';

const ProgressBar = ({ done, bgColor, pgColor, type }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
      backgroundColor: pgColor,
    };

    setStyle(newStyle);
  }, 200);

  const bgStyle = {
    backgroundColor: bgColor,
  };

  return (
    <div className={styles.progress} style={bgStyle}>
      <div className={styles.progress_done} style={style}>
        <div className={styles.img}>
          {type === 'village' ? '' : <Image src={peterobi} />}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
