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

const NavBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(`${styles.responsive_nav}`);
  };

  //Show Modal
  const [showModal, setShowModal] = useState(false);

  //Carousel
  const slides = [
    {
      text: {
        heading: 'Create an account',
        span: 'by clicking on deliver votes',
        body: 'Create an account in a few easy steps by using your favourite social media account.',
      },
      image: img1,
    },
    {
      text: {
        heading: 'Provide your',
        span: 'details',
        body: 'Provide your details in few simple steps, all you have to do is login with your social media account.',
      },
      image: img2,
    },
    {
      text: {
        heading: 'Answer a',
        span: 'few questions',
        body: 'Provide a few answers about your PVC status in order to get the neccessary information needed.',
      },
      image: img3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slideInterval = useRef();

  const prev = () => {
    // startSlideTimer();

    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  };

  const next = () => {
    // startSlideTimer();

    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  const switchIndex = (index) => {
    // startSlideTimer();
    setCurrentSlide(index);
  };
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
          {/* CONTRIBUTE MODAL */}
          {showModal && (
            <Modal
              show={showModal}
              onClose={() => setShowModal(false)}
              width="79.4rem"
            >
              <div className={styles.modal}>
                <div className={`${styles.modal__heading} modal_heading`}>
                  <h2>
                    Learn more <br />
                    <span>About the campaign</span>
                  </h2>
                  <button
                    className={`closeBtn`}
                    onClick={() => setShowModal(false)}
                  >
                    &times;
                  </button>
                </div>
                <div className={styles.modal__body}>
                  <div className={styles.carousel}>
                    <div
                      className={styles.carousel__inner}
                      style={{
                        transform: `translate(${-currentSlide * 100}%)`,
                      }}
                    >
                      {slides.map((slide, index) => {
                        return (
                          <div className={styles.carousel__item}>
                            <div className={styles.details}>
                              <div className={styles.text}>
                                <h3>
                                  {slide.text.heading} <br />
                                  <span>{slide.text.span}</span>
                                </h3>
                                <p>{slide.text.body}</p>
                              </div>
                              <div className={styles.img}>
                                <Image src={slide.image} />
                              </div>
                              <div className={styles.text}>
                                <h3>
                                  {slides[index + 1]?.text.heading}
                                  <br />
                                  <span>{slides[index + 1]?.text.span}</span>
                                </h3>
                                <p>{slides[index + 1]?.text.body}</p>
                              </div>
                              <div className={styles.img}>
                                <Image src={slides[1].image} />
                              </div>
                              {/* <div className={styles.text}>
                                <h3>
                                  {slides[2].textOne.heading}
                                  <br />
                                  <span>{slides[2].textOne.span}</span>
                                </h3>
                                <p>{slides[2].textOne.body}</p>
                              </div>
                              <div className={styles.img}>
                                <Image src={slides[2].image} />
                              </div> */}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div
                      className={`${styles.carousel__control} ${
                        currentSlide === 0 ? styles.slideNone : styles.left
                      }`}
                      onClick={prev}
                    >
                      <MdOutlineArrowBackIosNew />
                    </div>
                    <div
                      className={`${styles.carousel__control} ${
                        currentSlide === slides.length - 1
                          ? styles.slideNone
                          : styles.right
                      }`}
                      onClick={next}
                    >
                      <MdOutlineArrowForwardIos />
                    </div>
                  </div>
                  <div className={styles.second_layer}>
                    <div className={styles.carousel_indicators}>
                      {slides.map((_, index) => (
                        <button
                          className={`${styles.carousel_indicator_item} ${
                            currentSlide === index ? styles.active : ''
                          }`}
                          onClick={() => switchIndex(index)}
                        ></button>
                      ))}
                    </div>
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
