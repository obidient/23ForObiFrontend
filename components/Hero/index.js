import React from 'react';

const Hero = ({ title, subtitle, description }) => {
  return (
    <div className="flex flex-col justify-center my-24 w-full">
      <h2 className="font-light my-6 text-7xl">{subtitle}</h2>
      <h1 className="font-black text-9xl">{title}</h1>
      <p className="font-light my-6 lg:text-3xl text-[#5F6160] text-4xl">
        {description}
      </p>
    </div>
  );
};

export default Hero;
