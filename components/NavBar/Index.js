import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../assets/23forobi.svg';
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
import avatar from '../../assets/avatar.png';
import DeliverModal from './../Modal/DeliverModal';
import useAuthStore from '../../store/authStore';
import { googleLogout } from '@react-oauth/google';

const NavBar = () => {
  const { userProfile, removeUser } = useAuthStore();
  const first_name = userProfile?.user?.first_name;
  const user_image =
    userProfile?.user?.google_image_url || userProfile?.user?.image_url;
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(`${styles.responsive_nav}`);
  };

  //Show Modal
  const [showModal, setShowModal] = useState(false);
  const [signInIsVisible, setSignInIsVisible] = useState(false);

  //Effect to hide scroll
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  //Router
  const router = useRouter();

  const width = {
    container: (bigScreen) => ({
      flexDirection: bigScreen ? '79.4rem' : '60rem',
    }),
  };

  return (
    <div className="container">
      <div className={styles.nav}>
        <nav className={styles.navbar}>
          <div className={styles.navbar__logo}>
            <Link href="/">
              <Image src={logo} width={130} height={33} alt="23forObi logo" />
            </Link>
          </div>
          <div ref={navRef} className={styles.navbar__menu}>
            <ul>
              <li className={styles.big_screens}>
                <Link href="/">
                  <a
                    className={router.pathname == '/' ? styles.active : ''}
                    href="/"
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
              <li>
                <Link href="/contributors">
                  <a
                    className={
                      router.pathname == '/contributors' ? styles.active : ''
                    }
                  >
                    Contributors
                  </a>
                </Link>
              </li>
              {userProfile ? (
                <div className="lg:hidden md:block cursor-pointer">
                  <Link href="/dashboard">
                    <a className="flex items-center">
                      <div className={styles.user_image}>
                        <Image
                          src={user_image ? user_image : avatar}
                          alt=""
                          width={35}
                          height={35}
                        />
                      </div>
                      <h2 className="text-[#fff] px-3">{first_name}</h2>
                    </a>
                  </Link>
                </div>
              ) : (
                <button
                  type="button"
                  className={`${styles.btn_vote_mobile} btn_light`}
                  onClick={() => setShowModal(true)}
                >
                  Deliver Votes
                </button>
              )}
            </ul>
            <div
              onClick={showNavbar}
              className={`${styles.hamburger} ${styles.nav_close}`}
            >
              <FaTimes />
            </div>
          </div>
          {/* <Link href="/how-it-works"> */}
          {userProfile ? (
            <div className="hidden lg:flex items-center justify-center cursor-pointer">
              <Link href="/dashboard">
                <a className="flex items-center">
                  <div className={styles.user_image}>
                    <Image
                      src={user_image ? user_image : avatar}
                      alt=""
                      width={35}
                      height={35}
                    />
                  </div>
                  <h2 className="px-3 text-3xl">{first_name}</h2>
                </a>
              </Link>
            </div>
          ) : (
            <button
              type="button"
              className={`${styles.btn_vote} btn_dark`}
              onClick={() => setShowModal(true)}
            >
              Deliver Votes
            </button>
          )}
          {/* </Link> */}
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
