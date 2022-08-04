import React from 'react';
import Modal from './../Modal/Index';
import styles from './Styles.module.scss';
import Image from 'next/image';

//IMPORT IMAGES
import uploaded from '../../assets/uploaded.png';

const CompleteModal = ({ showCompleteModal, setShowCompleteModal }) => {
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
            <Image src={uploaded} />
            <h2>Congratulations! You have successfully added a new village.</h2>
            <p>Go Champ! You are doing so great, let’s keep the fire burning</p>
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
