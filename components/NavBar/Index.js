import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../assets/logo.png';
import styles from './Styles.module.scss';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Modal from '../Modal/Index';

import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

import img1 from '../../assets/how_it_works_img1.png';
import img2 from '../../assets/how_it_works_img2.png';
import img3 from '../../assets/how_it_works_img3.png';
import DeliverModal from './../Modal/DeliverModal';

const NavBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(`${styles.responsive_nav}`);
  };

  //Show Modal
  const [showModal, setShowModal] = useState(false);

  //Router
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
                <a href="#">About Us</a>
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
          {/* DELIVER VOTES MODAL */}
          {showModal && (
            <DeliverModal
              show={showModal}
              onClose={() => setShowModal(false)}
            />
          )}
          {/* END DELIVER VOTES MODAL */}
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
