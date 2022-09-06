import Image from 'next/image';
import React from 'react';
import nextIcon from '../../assets/arrow-right-2.png';
import useAuthStore from '../../store/authStore';
import axios from 'axios'

const StepButton = ({
  steps,
  setSteps,
  setProgress,
  setNewVillage,
  progress,
  handleSubmit,
  submitForm,
  handleSkip,
  type,
  disabled1,
  disabled2,
  disabled3,
  formData,
  disabled4,
  disabled5,
}) => {
  const enabledBtn =
    'flex items-center justify-center w-[173px] h-[44px] bg-[#018226]  rounded-full text-white my-10';
  const disabledBtn = `${enabledBtn} opacity-40 hover:cursor-not-allowed`;

  const { accessToken, userProfile } = useAuthStore();
  let token = accessToken;
  // console.log(formData, "button")

  const handleSubmit4 = () => {
    setSteps(steps + 1);
    setProgress(progress + 20);

    const baseUrl = 'https://api.23forobi.com/';
    const headers = {
      //'Content-Type': 'application/json',
      //Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    };

    const villageData = {
      village_id: formData?.village,
    };

    const newVillageData = {
      name: formData.village,
      location_id: formData.state,
      local_government_id: formData.lga
    };

    if (formData.is_village_new == false) {
      try {
        axios
          .post(`${baseUrl}user-villages`, villageData, { headers: headers })
          .then((res) => {
            // console.log(res.data);
          });
        } catch (error) {
        // console.log(error);
      }
    } else {
      try {
        axios
          .post(`${baseUrl}villages`, newVillageData, { headers: headers })
          .then((res) => {
            setNewVillage(res.data.village.id);

            const data = {
              village_id: res.data.village.id
            }
            axios
              .post(`${baseUrl}user-villages`, data, {
                headers: headers,
              })
              .then((res) => {
                // console.log(res);
              });
          });
      } catch (error) {

      }
    }
  };

  switch (steps) {
    case 1:
      return (
        <>
          <button
            disabled={disabled1}
            type={type}
            onClick={handleSubmit}
            className={!disabled1 ? enabledBtn : disabledBtn}
          >
            Next
            <div className="flex items-center pl-4 hover:translate-x-1 ">
              <Image src={nextIcon} alt="next" />
            </div>
          </button>
        </>
      );
    case 2:
      return (
        <>
          <button
            disabled={disabled2}
            type={type}
            onClick={handleSubmit}
            className={!disabled2 ? enabledBtn : disabledBtn}
          >
            Next
            <div className="flex items-center pl-4 hover:translate-x-1">
              <Image src={nextIcon} alt="next" />
            </div>
          </button>
        </>
      );
    case 3:
      return (
        <>
          <button
            disabled={disabled3}
            type={type}
            onClick={handleSubmit}
            className={!disabled3 ? enabledBtn : disabledBtn}
          >
            Next
            <div className="flex items-center pl-4 hover:translate-x-1">
              <Image src={nextIcon} alt="next" />
            </div>
          </button>
        </>
      );
    case 4:
      return (
        <>
          <button
            disabled={disabled4}
            type={type}
            onClick={handleSubmit4}
            className={!disabled4 ? enabledBtn : disabledBtn}
          >
            Next
            <div className="flex items-center pl-4 hover:translate-x-1">
              <Image src={nextIcon} alt="next" />
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
            disabled={disabled5}
            type={type}
            onClick={submitForm}
            className={!disabled5 ? enabledBtn : disabledBtn}
          >
            Next
            <div className="flex items-center pl-4 hover:translate-x-1">
              <Image src={nextIcon} alt="next" />
            </div>
          </button>
        </div>
      );

    default:
      break;
  }
};

export default StepButton;
