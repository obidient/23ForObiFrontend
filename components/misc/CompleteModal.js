import React from 'react';
import Modal from './../Modal/Index';
import styles from './Styles.module.scss';
import Image from 'next/image';

//IMPORT IMAGES
import uploaded from '../../assets/uploaded.png';

const CompleteModal = ({ 
    showCompleteModal, 
    setShowCompleteModal, 
    description, 
    heading}) => {
  return (
    <div>
      <Modal
        show={showCompleteModal}
        onClose={() => setShowCompleteModal(false)}
        width="54.4rem"
      >
        <div className={`${styles.modal} ${styles.complete}`}>
          <div>
            <button
              className={`closeBtn ${styles.complete_btn}`}
              onClick={() => setShowCompleteModal(false)}
            >
              &times;
            </button>
          </div>
          <div className={styles.complete_body}>
            <Image src={uploaded} alt="uploaded"/>
            <h2>{heading}</h2>
            <p>{description}</p>
            <button
              className={`${styles.btn_submit} btn_dark`}
              onClick={() => setShowCompleteModal(false)}
            >
              Complete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CompleteModal;
