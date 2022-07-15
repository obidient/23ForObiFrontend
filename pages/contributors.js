import React from 'react';
import { useState } from 'react';
import TeamCard from '../components/ImgCard/TeamCard';
import Page from '../components/Page';
import Team from '../data/teamImages';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const roles = ['Engineering', 'Design', 'Data Entry', 'Copywriting'];

const pages = [1, 2, 3, 4, 5];

const contributors = () => {
  const [tabIndex, setTabIndex] = useState(0);

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
        <div className="flex flex-col w-full my-10">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
            selectedTabClassName="border-b-2 border-[#018226] text-[#018226] outline-none"
          >
            <TabList className="flex border-b border-[#979797] w-full items-center justify-start text-center">
              {roles.map((item) => (
                <Tab
                  key={item}
                  className="font-bold px-8 py-3 text-3xl lg:text-2xl  w-[200px] cursor-pointer hover:border-[#018226] hover:text-[#018226] hover:border-b-2 "
                >
                  {item}
                </Tab>
              ))}
            </TabList>
            <TabPanel>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {Team.map((item) => (
                  <TeamCard src={item.src} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {Team.map((item) => (
                  <TeamCard src={item.src} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {Team.map((item) => (
                  <TeamCard src={item.src} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {Team.map((item) => (
                  <TeamCard src={item.src} />
                ))}
              </div>
            </TabPanel>
          </Tabs>
          <div className="flex w-full my-10">
            <div className="flex items-center justify-between border-[#C4C4C4] border-t-2 w-full">
              <p className="my-10 text-[#2F3733]">Showing 20 of 200 entries</p>
              <div className="flex  text-4xl justify-center items-center">
                <FaChevronLeft />
                <ul className="flex justify-around items-center mx-4">
                  {pages.map((item) => (
                    <div className="flex mx-3 items-center justify-center w-14 h-14 bg-[#F1F1F1] text-[#5F6160] font-light border-2 border-[#C4C4C4] text-center rounded-full hover:text-[#ffffff] hover:bg-[#018226] cursor-pointer">
                      <li
                        key={item}
                        className={
                          pages === item[0]
                            ? 'text-[#ffffff] bg-[#018226] text-xl'
                            : 'text-xl '
                        }
                      >
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
