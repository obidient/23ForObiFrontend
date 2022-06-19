import { useRef } from 'react';
import Image from 'next/image';
import logo from '../../assets/logo.png';
import styles from './Styles.module.scss';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/router';

const NavBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(`${styles.responsive_nav}`);
    console.log(navRef.current);
  };

  const router = useRouter();

  return (
    <div className="container">
      <div className={styles.nav}>
        <nav className={styles.navbar}>
          <div className={styles.navbar__logo}>
            <Image src={logo} />
          </div>
          <div ref={navRef} className={styles.navbar__menu}>
            <ul>
              <li claassName="big-screens">
                <a
                  className={router.pathname == '/' ? styles.active : ''}
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">How it works</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <button className={`${styles.btn_vote_mobile}`}>
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
          <button className={styles.btn_vote}>Deliver Votes</button>
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
