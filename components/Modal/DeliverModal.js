import styles from './Styles.module.scss';
import React, { useEffect, useRef, useCallback } from 'react';
import Modal from './Index';
import Image from 'next/image';

import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

import img1 from '../../assets/how_it_works_img1.png';
import img2 from '../../assets/how_it_works_img2.png';
import img3 from '../../assets/how_it_works_img3.png';
import { useState } from 'react';
import Link from 'next/link';

const DeliverModal = ({ show, onClose }) => {
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
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  };

  const next = () => {
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  const switchIndex = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div className={styles.backdrop}>
      <Modal show={show} onClose={onClose} width="79.4rem">
        <div className={styles.deliver_modal}>
          <div className={`${styles.deliver_modal__heading} modal_heading`}>
            <h2>
              Learn more <br />
              <span>About the campaign</span>
            </h2>
            <button className={`closeBtn`} onClick={onClose}>
              &times;
            </button>
          </div>
          <div className={styles.deliver_modal__body}>
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
            <button
              type="submit"
              className={`btn_dark rounded-full ${styles.btn}`}
            >
              Create an account
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeliverModal;
