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
      textOne: {
        heading: 'Create an account',
        span: 'by clicking on deliver votes',
        body: 'Create an account in a few easy steps by using your favourite social media account.',
      },
      textTwo: {
        heading: 'Provide your',
        span: 'details',
        body: 'Create an account in a few easy steps by using your favourite social media account.',
      },
      image: img1,
    },
    // {
    //   name: 'SlideTwo',
    // },
    // {
    //   name: 'SlideThree',
    // },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slideInterval = useRef();

  // const startSlideTimer = () => {
  //   stopSlideTimer();
  //   slideInterval.current = setInterval(() => {
  //     setCurrentSlide((currentSlide) =>
  //       currentSlide < slides.length - 1 ? currentSlide + 1 : 0
  //     );
  //   });
  // };

  // const stopSlideTimer = () => {
  //   if (slideInterval.current) {
  //     clearInterval(slideInterval.current);
  //   }
  // };

  // useEffect(() => {
  //   // startSlideTimer();

  //   return () => stopSlideTimer();
  // }, []);

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
                <div className={styles.modal__heading}>
                  <h2>
                    Learn more <br />
                    <span>About the campaign</span>
                  </h2>
                </div>
                <div className={styles.modal__body}>
                  <div className={styles.carousel}>
                    <div
                      className={styles.carousel__inner}
                      style={{
                        transform: `translate(${-currentSlide * 100}%)`,
                      }}
                    >
                      {slides.map((slide) => {
                        return (
                          <div className={styles.carousel__item}>
                            <div className={styles.details}>
                              <div className={styles.text}>
                                <h3>
                                  {slide.textOne.heading} <br />
                                  <span>{slide.textOne.span}</span>
                                </h3>
                                <p>{slide.textOne.body}</p>
                              </div>
                              <div className={styles.img}>
                                <Image src={slide.image} />
                              </div>
                              <div className={styles.text}>
                                <h3>
                                  {slide.textTwo.heading}
                                  <br />
                                  <span>{slide.textTwo.span}</span>
                                </h3>
                                <p>{slide.textTwo.body}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {/* <div className={styles.details}>
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
                    </div> */}
                    {/* <div className={styles.img}>
                      <Image src={img1} />
                    </div> */}
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
                    <div
                      className={`${styles.carousel__control} ${styles.left}`}
                      onClick={prev}
                    >
                      <MdOutlineArrowBackIosNew />
                    </div>
                    <div
                      className={`${styles.carousel__control} ${styles.right}`}
                      onClick={next}
                    >
                      <MdOutlineArrowForwardIos />
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
