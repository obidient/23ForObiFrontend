import Image from 'next/image';
import styles from './Styles.module.scss';
import logo from '../../assets/logo.png';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import DeliverModal from '../Modal/DeliverModal';
import Modal from './../Modal/Index';
import useAuthStore from './../../store/authStore';
import { useRouter } from 'next/router';

const Footer = () => {

  const router = useRouter();

  const { userProfile, removeUser } = useAuthStore();
  console.log(userProfile);
    //Show Modal
  const [showModal, setShowModal] = useState(false);
  const [signInIsVisible, setSignInIsVisible] = useState(false);

  //Effect to hide scroll
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footer_container}>
          <div className={styles.footer__logo}>
            <Image src={logo} alt='23forObi logo' width={130} height={33}  />
          </div>
          <div className={styles.footer__details}>
            <h2>Be a part of the movement</h2>
            <p>
              It matters today and it will even matter more tomorrow, let’s get
              back our Nigeria
            </p>
            <div className={styles.btn_div}>
              {/* <Link href=""> */}
              <button className="btn_dark" onClick={() => {userProfile ? router.push('/dashboard') : setShowModal(true);}}>
                Deliver votes
              </button>
              {/* </Link> */}
            </div>
          </div>
          {/* DELIVER VOTES MODAL */}
          {showModal && (
            <Modal
              show={showModal}
              onClose={() => setShowModal(false)}
              setShowModal={setShowModal}
              setSignInIsVisible={setSignInIsVisible}
              type="contribute"
              // width={width.container(matches)}
              width={signInIsVisible ? '50rem' : null}
            >
              <DeliverModal
                show={showModal}
                onClose={() => setShowModal(false)}
                setSignInIsVisible={setSignInIsVisible}
                signInIsVisible={signInIsVisible}
                setShowModal={setShowModal}
              />
            </Modal>
          )}
          {/* END DELIVER VOTES MODAL */}
          <div>{/* <p>Game</p> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
