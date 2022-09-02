import React from 'react';
import Modal from './../Modal/Index';
import styles from './Styles.module.scss';
import Image from 'next/image';

//IMPORT IMAGES
import uploaded from '../../assets/uploaded.png';

const DeleteModal = ({
  showDeleteModal,
  setShowDeleteModal,
  description,
  heading,
  deleteVillage,
  children, 
  image
}) => {
  return (
    <div>
      <Modal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        width="54.4rem"
      >
        <div className={`${styles.modal} ${styles.complete}`}>
          <div>
            <button
              className={`closeBtn ${styles.complete_btn}`}
              onClick={() => setShowDeleteModal(false)}
            >
              &times;
            </button>
          </div>
          <div className={styles.complete_body}>
            <Image src={image} alt="bin" />
            <h2>{heading}</h2>
            <p className="w-full">{description}</p>
            <div className="mt-16">{children}</div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModal;
