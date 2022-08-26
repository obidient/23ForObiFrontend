import React, { useState, useEffect } from 'react';
import axios from 'axios';
import stateData from '../../data/stateDetails';

const Step4 = ({ formData, setFormData }) => {
  const [states, setStates] = useState([]);
  const [lgas, setLgas] = useState([]);
  const [villages, setVillages] = useState([]);

  //const [{ state, lga, village }] = useState({
  //  formData: { state: '', lga: '', village: '' },
  //});

  /* const states = stateData.map((state) => (
    <option key={state.id} value={state.name}>
      {state.name}
    </option>
  ));

  const lgas = stateData.find((item) => item.name === state).lgas.map((lga, index) => (
      <option key={index} value={lga}>
        {lga}
      </option>
    ));
    */

  const { state, lga, village, selectedVillage } = formData;

  useEffect(() => {
    const fetchStates = async () => {
      try {
        await axios.get('https://api.23forobi.com/states').then((res) => {
          //console.log(res.data)
          setStates(res.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchStates();
  }, []);

  const handleStateChange = async (e) => {
    e.preventDefault();
    let stateID = e.target.value;
    await axios
      .get(`https://api.23forobi.com/list_lga_in_state/${stateID}`)
      .then((res) => {
        console.log(res.data);
        setLgas(res.data);
      });
    setFormData({ ...formData, state: e.target.value });
  };

  const handleLgaChange = async (e) => {
    e.preventDefault();
    let lgaId = e.target.value;
    await axios
      .get(`https://api.23forobi.com/villages-in-lga/${lgaId}`)
      .then((res) => {
        console.log(res.data);
        setVillages(res.data);
      });
    setFormData({ ...formData, lga: e.target.value });
  };

  return (
    <div className="my-5 w-full">
      <h2 className="text-[#2F3733] lg:text-3xl my-10">
        If so, what state are you from?
      </h2>
      <form>
        <div className="my-5 flex flex-col items-center w-full">
          <div className="w-full my-4">
            <select
              placeholder="Select your state"
              className="rounded-full lg:w-[496px] w-full h-[44px] border border-[#2F3733] text-[ #979797] lg:text-3xl text-4xl px-5 focus:border-[#018226] focus:bg-[#F3FFF7] cursor-pointer"
              /*onChange={(e) =>
                setFormData((formData) => ({ ...formData, state: e.target.value }))
              }*/
              onChange={handleStateChange}
              //value={state}
            >
              <option>Select your state</option>
              {states &&
                states.length > 0 &&
                states.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.state_name}
                  </option>
                ))}
            </select>
          </div>
          <div className="w-full">
            {state && (
              <>
                <h2 className="text-[#2F3733] lg:text-3xl my-10">
                  What local government are you from?
                </h2>
                <select
                  //value={lga.id}
                  onChange={handleLgaChange}
                  className="cursor-pointer rounded-full lg:w-[496px] w-full h-[44px] border border-[#2F3733] text-[ #979797] lg:text-3xl text-4xl px-5 focus:border-[#018226] focus:bg-[#F3FFF7]"
                >
                  <option>Select your local government area</option>
                  {lgas &&
                    lgas.length > 0 &&
                    lgas.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </>
            )}
          </div>
          <div className="w-full">
            {lga && (
              <>
                <h2 className="text-[#2F3733] lg:text-3xl my-10">
                  What village are you from?
                </h2>
                <select
                  //value={village.id}
                  onChange={(e) => {
                    setFormData({ ...formData, selectedVillage: e.target.value });
                  }}
                  className="cursor-pointer rounded-full lg:w-[496px] w-full h-[44px] border border-[#2F3733] text-[ #979797] lg:text-3xl text-4xl px-5 focus:border-[#018226] focus:bg-[#F3FFF7]"
                >
                  <option value="">Select your village</option>
                    {villages && villages.length > 0 && (
                      villages.map((item) => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                      ))
                    )}
                  <option value='I can"t find my village'>
                    I can’t find my village
                  </option>
                </select>
              </>
            )}
          </div>
          <div className="w-full">
            {selectedVillage === 'I can"t find my village' && (
              <>
                <h2 className="text-[#2F3733] lg:text-3xl my-10">
                  Enter the name of your village
                </h2>
                <input
                  required
                  className="rounded-full lg:w-[496px] w-full h-[44px] border border-[#2F3733] text-[ #979797] lg:text-3xl text-4xl px-5 focus:border-[#018226] focus:bg-[#F3FFF7] outline-none"
                  type="text"
                  placeholder="Enter village name"
                  value={village}
                  onChange={(e) =>
                    setFormData((formData) => ({
                      ...formData,
                      village: e.target.value,
                      is_village_new: true,
                    }))
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
