import styles from './Styles.module.scss';
import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import big from '../../assets/big.svg'
import Image from 'next/image';
const MiniLoader = ({
  show,
  onClose,
  backdropStyles,
  width,
  children,
  innerClose,
}) => {
  const modalRef = useRef();
  /*useEffect(() => {
    //  add when mounted
    document.addEventListener('mousedown', handleClick);

    //  clean on unmount
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const handleClick = useCallback((e) => {
    // clicked inside the modal
    if (modalRef?.current?.contains(e.target)) {
      return;
    }
    // outside the modal
    onClose();
  }, []);*/

  return (
    // <div className={styles.backdrop} style={{ ...backdropStyles }}>
    //   <div className={styles.modal} ref={modalRef} style={{ width: width }}>
        <div className={styles.spinner}>
          {/*<Image src={big} alt="loader" />*/}
        </div>
    //   </div>
    // </div>
  );
};

export default MiniLoader;
