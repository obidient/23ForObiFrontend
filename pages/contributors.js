import React from 'react';
import { useState } from 'react';
import TeamCard from '../components/ImgCard/TeamCard';
import Page from '../components/Page';
import Team from '../data/teamImages';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const roles = ['Engineering', 'Design', 'Data Entry', 'Copywriting'];
const pages = [1, 2, 3, 4, 5];

const contributors = () => {
  const [activeTab, setActiveTab] = useState('');
  return (
    <Page title="Contributors" description="contributors for peter obi">
      <div className="container bg-[#FDFFFE]">
        <div className="flex flex-col justify-center my-24">
          <h2 className="font-light my-6 text-7xl">Contributors</h2>
          <h1 className="font-black text-9xl">#23forObi</h1>
          <p className="font-light my-6 lg:text-3xl text-[#5F6160] text-4xl">
            Here are the skilled patroits who volunteered to make this possible.
          </p>
        </div>
        <div className="flex flex-col my-15">
          <h2 className="font-bold text-3xl">Meet our team members</h2>
        </div>
        <div className="flex flex-col w-full my-6">
          <div className="flex w-full my-10">
            <ul className="flex border-b border-[#979797] w-full items-center justify-start text-center">
              {roles.map((role) => (
                <li
                  className={
                    activeTab
                      ? 'border-[#018226] text-[#018226]'
                      : 'font-bold px-8 py-3 text-2xl border-b-2  w-[200px] cursor-pointer hover:border-[#018226] hover:text-[#018226]'
                  }
                  key={role}
                >
                  {role}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {Team.map((item, index) => (
              <TeamCard key={index} src={item.src} linkedIn={item.linkedIn} />
            ))}
          </div>
          <div className="flex w-full my-10">
            <div className="flex items-center justify-between border-[#C4C4C4] border-t-2 w-full">
              <p className="my-10 text-[#2F3733]">Showing 20 of 200 entries</p>
              <div className="flex  text-4xl justify-center items-center">
                <FaChevronLeft />
                <ul className="flex justify-around items-center mx-4">
                  {pages.map((item) => (
                    <div className="flex mx-3 items-center justify-center w-14 h-14 bg-[#F1F1F1] text-[#5F6160] font-light border-2 border-[#C4C4C4] w-10 h-10 text-center rounded-full hover:text-[#ffffff] hover:bg-[#018226]">
                      <li key={item} className="text-xl ">
                        {item}
                      </li>
                    </div>
                  ))}
                </ul>
                <FaChevronRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default contributors;
