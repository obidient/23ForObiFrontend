import styles from './Styles.module.scss';
import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

const Modal = ({
  show,
  onClose,
  backdropStyles,
  modalStyles,
  children,
  innerClose,
}) => {
  const modalRef = useRef();
  useEffect(() => {
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
  }, []);

  return (
    <div className={styles.backdrop} style={{ ...backdropStyles }}>
      <div className={styles.modal} ref={modalRef} style={{ ...modalStyles }}>
        <div className={styles.modalContent}>
          <button className={styles.closeBtn} onClick={onClose}>
            &times;
          </button>

          {children}
        </div>
      </div>
    </div>
  );
};

// Modal.propTypes = {
//   show: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
//   children: PropTypes.node.isRequired,
//   backdropStyles: PropTypes.object,
//   modalStyles: PropTypes.object,
//   innerClose: PropTypes.bool,
// };

export default Modal;
