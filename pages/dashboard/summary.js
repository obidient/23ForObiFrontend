import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import DashboardNav from '../../components/DashboardNav/Index';
import StateProgress from '../../components/misc/StateProgress';
import styles from '../pagestyles/home.module.scss';
import awards from '../../assets/awards.png';
import nextIcon from '../../assets/arrow-right-2.png';
import Modal from '../../components/Modal/Index';
import Loader from '../../components/Loader';

const summary = () => {
  const router = useRouter();
  const [progress, setProgress] = useState(20);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={`${styles.dashboard} container h-[100vh]`}>
      <DashboardNav />
      <div className="flex flex-col justify-center py-11">
        <h2 className="text-4xl font-light mt-10">
          Well done on your <br />
          <span className="font-bold">Progress so far</span>
        </h2>
        <hr className="mb-5 mt-2" />
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between  my-10">
          <div className="lg:w-3/4 w-full">
            <p className="text-[#2F3733] font-light text-4xl lg:text-3xl my-10">
              A little bit of something to note:
            </p>
            <p className="text-[#2F3733] font-normal lg:text-3xl">
              If you can deliver{' '}
              <span className="text-[#018226]">23 votes</span>, and 500,000
              other people deliver{' '}
              <span className="text-[#018226]">23 votes</span>, then we will win
              this election.
            </p>
            <p className="text-[#2F3733] font-normal lg:text-3xl my-10">
              So, can you get 22 more people to vote for{' '}
              <span className="text-[#D60602]">Peter Obi</span> in your village?
            </p>
          </div>
          <div className="lg:w-1/4 w-1/2 py-5 lg:py-0 text-center">
            <Image src={awards} />
            <p className="text-[#7A7B7B] lg:text-2xl text-3xl my-4">
              Hurray! you’ve earned your first badge
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:w-1/2  my-5">
        <h2 className="my-5 text-3xl">Your achievement</h2>
        <StateProgress progress={progress} />
        <div className='flex items-center'>
          <button
            onClick={() => {
              setShowModal(true), router.push('/dashboard');
            }}
            className="flex items-center justify-center w-[173px] h-[44px] bg-[#018226]  rounded-full text-white my-10"
          >
            Yes, I can
            <div className="flex items-center pl-4 hover:translate-x-1">
              <Image src={nextIcon} />
            </div>
          </button>
        </div>
      </div>
      {showModal && (
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          width="54.4rem"
        >
          <div className="">
            <div className={`modal_heading`}>
              <button
                className={`closeBtn`}
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
            </div>
            <div className="">
              <div>
                <Loader />
              </div>
              <h2 className="font-bold text-[#2F3733] text-center">
                Congratulations! You have made the right choice
              </h2>
              <p className="my-5 text-[#7A7B7B] font-normal text-center">
                We are redirecting you to your personalized dashboard now
              </p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default summary;