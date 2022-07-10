import { useRef, useState } from 'react';
import Image from 'next/image';
import logo from '../../assets/logo.png';
import styles from './Styles.module.scss';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Modal from '../Modal/Index';

import img1 from '../../assets/how_it_works_img1.png';

const NavBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(`${styles.responsive_nav}`);
  };

  //Show Modal
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  return (
    <div className="container">
      <div className={styles.nav}>
        <nav className={styles.navbar}>
          <div className={styles.navbar__logo}>
            <Link href="/">
              <Image src={logo} />
            </Link>
          </div>
          <div ref={navRef} className={styles.navbar__menu}>
            <ul>
              <li className={styles.big_screens}>
                <Link href="/">
                  <a
                    className={router.pathname == '/' ? styles.active : ''}
                    href="#"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a
                    className={router.pathname == '/about' ? styles.active : ''}
                  >
                    About
                  </a>
                </Link>
              </li>
              <li className={styles.big_screens}>
                <Link href="/how-it-works">
                  <a
                    className={
                      router.pathname == '/how-it-works' ? styles.active : ''
                    }
                  >
                    How it works
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className={router.pathname == '/faq' ? styles.active : ''}>
                    FAQ
                  </a>
                </Link>
              </li>
              <button className={`${styles.btn_vote_mobile} btn_light`}>
                Deliver Votes
              </button>
            </ul>
            <div
              onClick={showNavbar}
              className={`${styles.hamburger} ${styles.nav_close}`}
            >
              <FaTimes />
            </div>
          </div>
          {/* <Link href="/how-it-works"> */}
          <button
            className={`${styles.btn_vote} btn_dark`}
            onClick={() => setShowModal(true)}
          >
            Deliver Votes
          </button>
          {/* </Link> */}
          {/* CONTRIBUTE MODAL */}
          {showModal && (
            <Modal
              show={showModal}
              onClose={() => setShowModal(false)}
              width="79.4rem"
            >
              <div className={styles.modal}>
                <div className={styles.modal__heading}>
                  <h2>
                    Learn more <br />
                    <span>About the campaign</span>
                  </h2>
                </div>
                <div className={styles.modal__body}>
                  <div className={styles.details}>
                    <div className={styles.text}>
                      <h3>
                        Create an account <br />
                        <span>by clicking on deliver votes</span>
                      </h3>
                      <p>
                        Create an account in a few easy steps by using your
                        favourite social media account.
                      </p>
                    </div>
                    <div className={styles.img}>
                      <Image src={img1} />
                    </div>
                    <div className={styles.text}>
                      <h3>
                        Create an account <br />
                        <span>by clicking on deliver votes</span>
                      </h3>
                      <p>
                        Create an account in a few easy steps by using your
                        favourite social media account.
                      </p>
                    </div>
                    <div className={styles.img}>
                      <Image src={img1} />
                    </div>
                  </div>
                  <div className={styles.second_layer}>
                    <div></div>
                    <Link href="/how-it-works">Learn More</Link>
                  </div>
                  <button type="submit" className="btn_dark rounded-full">
                    Create an account
                  </button>
                </div>
              </div>
            </Modal>
          )}
          {/* END CONTRIBUTE MODAL */}
          <div
            onClick={showNavbar}
            className={`${styles.hamburger} ${styles.nav_open}`}
          >
            <FaBars />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
