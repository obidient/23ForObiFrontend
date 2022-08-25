import React from 'react';
import StateProgress from '../../components/misc/StateProgress';

const Hero = ({progress, steps}) => {
  return (
    <div className="flex flex-col justify-center py-11">
      <h2 className="text-4xl font-light mt-10">
        We are so glad to <br />
        <span className="font-bold">Have you here</span>
      </h2>
      <hr className="mb-5 mt-2" />
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between  my-2">
        <div className="lg:w-3/4 w-full">
          <h2 className="text-[#018226] font-bold text-3xl">
            HERE ARE A FEW QUESTIONS TO GET YOU STARTED.
          </h2>
        </div>
        <div className="lg:w-1/4 w-1/2 py-5 lg:py-0">
          <StateProgress progress={progress} />
          <p className="my-1">Progress : {steps}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
