import Image from 'next/image';
import React from 'react';
import nextIcon from '../../assets/arrow-right-2.png';

const StepButton = ({ steps, handleSubmit, submitForm, handleSkip, type }) => {
  switch (steps) {
    case 1:
      return (
        <>
          <button
            type={type}
            onClick={handleSubmit}
            className="flex items-center justify-center w-[173px] h-[44px] bg-[#018226]  rounded-full text-white my-10"
          >
            Next
            <div className="flex items-center pl-4 hover:translate-x-1">
              <Image src={nextIcon} />
            </div>
          </button>
        </>
      );
    case 2:
      return (
        <>
          <button
            type={type}
            onClick={handleSubmit}
            className="flex items-center justify-center w-[173px] h-[44px] bg-[#018226]  rounded-full text-white my-10"
          >
            Next
            <div className="flex items-center pl-4 hover:translate-x-1">
              <Image src={nextIcon} />
            </div>
          </button>
        </>
      );
    case 3:
      return (
        <>
          <button
            type={type}
            onClick={handleSubmit}
            className="flex items-center justify-center w-[173px] h-[44px] bg-[#018226]  rounded-full text-white my-10"
          >
            Next
            <div className="flex items-center pl-4 hover:translate-x-1">
              <Image src={nextIcon} />
            </div>
          </button>
        </>
      );
    case 4:
      return (
        <>
          <button
            type={type}
            onClick={handleSubmit}
            className="flex items-center justify-center w-[173px] h-[44px] bg-[#018226]  rounded-full text-white my-10"
          >
            Next
            <div className="flex items-center pl-4 hover:translate-x-1">
              <Image src={nextIcon} />
            </div>
          </button>
        </>
      );
    case 5:
      return (
        <div className="flex gap-10 items-center">
          <button
            type={type}
            onClick={handleSkip}
            className="flex items-center justify-center w-[173px] h-[44px] bg-[#fff]  rounded-full text-[#018226] my-10 border border-[#018226]"
          >
            Skip
          </button>
          <button
            type={type}
            onClick={submitForm}
            className="flex items-center justify-center w-[173px] h-[44px] bg-[#018226]  rounded-full text-white my-10"
          >
            Next
            <div className="flex items-center pl-4 hover:translate-x-1">
              <Image src={nextIcon} />
            </div>
          </button>
        </div>
      );

    default:
      break;
  }
};

export default StepButton;
