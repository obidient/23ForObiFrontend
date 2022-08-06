import React from 'react';
import stateDetails from '../../data/stateDetails';

const Step4 = ({ formData, setFormData }) => {
  const { state, lga, village, selectedVillage } = formData;

  // get lga in state
  const fetchLga = () => {};

  // get villages in lga
  const fetchVillage = () => {};

  return (
    <div className="my-5 w-full">
      <h2 className="text-[#2F3733] lg:text-3xl my-10">
        If so, what state are you from?
      </h2>
      <form>
        <div className="my-5 flex flex-col items-center w-full">
          <div className='w-full my-4'>
            <select
              placeholder="Select your state"
              className="rounded-full lg:w-[496px] w-full h-[44px] border border-[#2F3733] text-[ #979797] lg:text-3xl text-4xl px-5 focus:border-[#018226] focus:bg-[#F3FFF7]"
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
            >
              <option>Select your state</option>
              {stateDetails.map((item, index) => (
                <>
                  <option className="bg-[#fff]" key={index} value={item.name}>
                    {item.name}
                  </option>
                </>
              ))}
            </select>
          </div>
          <div className='w-full'>
            {state && (
              <>
                <h2 className="text-[#2F3733] lg:text-3xl my-10">
                  What local government are you from?
                </h2>
                <select
                  onChange={(e) =>
                    setFormData({ ...formData, lga: e.target.value })
                  }
                  className="rounded-full lg:w-[496px] w-full h-[44px] border border-[#2F3733] text-[ #979797] lg:text-3xl text-4xl px-5 focus:border-[#018226] focus:bg-[#F3FFF7]"
                >
                  <option value={lga} key={lga}>
                    Select your LGA
                  </option>
                  <option value="aba">Aba</option>
                </select>
              </>
            )}
          </div>
          {/*<div>
            {lga && (
              <>
                <h2 className="text-[#2F3733] text-3xl my-10">
                  What village are you from?
                </h2>
                <select
                  onChange={(e) =>
                    setFormData({ ...formData, village: e.target.value })
                  }
                  className="rounded-full w-[496px] h-[44px] border border-[#2F3733] text-[ #979797] text-2xl px-5 focus:border-[#018226] focus:bg-[#F3FFF7]"
                >
                  <option value="osusu">Osusu</option>
                  <option value={selectedVillage} key={village}>
                    I can’t find my village
                  </option>
                </select>
              </>
            )}
                </div>*/}
          <div className='w-full'>
            {lga  && (
              <>
                <h2 className="text-[#2F3733] lg:text-3xl my-10">
                  Enter the name of your village
                </h2>
                <input
                  className="rounded-full lg:w-[496px] w-full h-[44px] border border-[#2F3733] text-[ #979797] lg:text-3xl text-4xl px-5 focus:border-[#018226] focus:bg-[#F3FFF7]"
                  type="text"
                  placeholder="Enter village name"
                  value={village}
                  onChange={(e) =>
                    setFormData({ ...formData, village: e.target.value })
                  }
                />
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step4;