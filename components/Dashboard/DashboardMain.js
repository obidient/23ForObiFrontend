import styles from './Styles.module.scss';
import Image from 'next/image';
import {FaTimes} from 'react-icons/fa'

//IMAGES
import status_check from '../../assets/status_check.png';
import close from '../../assets/closeW.png';
import add_img_green from '../../assets/circle_add.svg';
import caret_down from '../../assets/caret_down.png';
import bin from '../../assets/Bin.png';

import { useContext, useState, useEffect } from 'react';
import Modal from './../Modal/Index';
import SelectInput from './../misc/SelectInput';
import SelectInputVillage from './../misc/SelectInputVillage';
import VillageContext from '../../Context/villageContext';
import useVillage from '../../Context/villageContext';
import StateContext from './../../Context/StateContext';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Team from '../../data/teamImages';
import TeamCard from '../../components/ImgCard/TeamCard';
import VillageDetails from './VillageDetails';

//Import Toast
import toast, { Toaster } from 'react-hot-toast';

import { Form, Formik } from 'formik';
// import { CustomSelectInput } from '../Forms/SelectInput';
import * as Yup from 'yup';
import dynamic from 'next/dynamic';
import TextError from '../Forms/TextError';
import useAuthStore from '../../store/authStore';
import useUserStore from '../../store/userStore';
import { addUserVillage } from '../../adapters/requests';
import axios from 'axios';
import VillageStat from './VillageStat';
import CompleteModal from '../misc/CompleteModal';
import DeleteModal from '../misc/DeleteModal';

// Prevent serverside redering on the FormikControl Component
const FormikControl = dynamic(() => import('../Forms/FormikControl'), {
  ssr: false,
});
// Prevent serverside redering on the CustomSelectInput Component
// const CustomSelectInput = dynamic(
//   () => import('../Forms/SelectInput').then((mod) => mod.CustomSelectInput),
//   {import CompleteModal from './../misc/CompleteModal';
import SelectWithSearch from '../misc/SelectWithSearch';
import MiniLoader from './../Loader/MiniLoader';

//     ssr: false,
//   }
// );

const DashboardMain = ({ states, villageDetails, votersDetails, awards }) => {
  const { userProfile } = useAuthStore();
  const { accessToken } = useAuthStore();
  const { userVillages, userLga } = useUserStore();
  // const { village, state } = registeredUser;

  const [otherVillage, setOtherVillage] = useState();

  const [stateId, setStateId] = useState(null);

  const [userVillage, setUserVillage] = useState(null);

  //CHECK IF INPUT IS CLICKED SO AS TO RENDER NEXT INPUT
  const [stateClicked, setStateClicked] = useState(false);
  const [lgaClicked, setLgaClicked] = useState(false);
  // console.log(villageDetails, votersDetails);

  const [isVillageEmpty, setIsVillageEmpty] = useState(null);

  ///////////COMPLTETE MODAL//////////////
  const [showCompleteModal, setShowCompleteModal] = useState();

  ///////////DELETE MODAL//////////////
  const [showDeleteModal, setShowDeleteModal] = useState();
  const [idToDelete, setIdToDelete] = useState();

  const stateOption = states?.map((state) => {
    return state.state_name;
  });

  const [tabIndex, setTabIndex] = useState(0);

  const email = userProfile?.user?.email;
  const first_name = userProfile?.user?.first_name;
  const last_name = userProfile?.user?.last_name;
  const image = userProfile?.user?.image;
  const registeredUserVillage = userProfile?.user_data?.data?.village;
  const registeredUserState = userProfile?.user_data?.data?.state;

  ////////////////// Selected Village///////////////////////
  const [selectedVillage, setSelectedVillage] = useState('');
  const [selectedLga, setSelectedLga] = useState('');

  const handleVillage = async () => {
    const url = 'https://api.23forobi.com/user-villages';
    const villageId = selectedVillage?.value;
    const data = {
      village_id: villageId,
    };

    const urlCreate = 'https://api.23forobi.com/villages';
    const dataCreate = {
      name: otherVillage,
      location_id: stateId,
      local_government_id: selectedLga.value,
    };
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };

    if (selectedVillage?.name !== 'Others' && !isVillageEmpty) {
      axios
        .post(url, data, { headers })
        ?.then((res) => {
          setSelectedVillage('');
        })
        .catch((err) => {
          const errorMessage = err.response.data.detail;
          if (errorMessage === 'User already added this village') {
            toast.error(errorMessage);
          }
          // console.log(err)
        });
    } else {
      try {
        await axios.post(urlCreate, dataCreate, { headers })?.then((res) => {
          // console.log(res.data.village.id)
          setShowCompleteModal(true);
          setOtherVillage('');
          setSelectedVillage('');
          setLgaClicked(false);

          axios
            .post(url, { village_id: res.data.village.id }, { headers })
            .then((res) => {
              // console.log(res)
            });
        });
      } catch (err) {
        // console.log(err)
      }
    }
    setShowModal(false);
  };
  ///////// End Selected Village //////////////////

  //VILLAGES
  const villageIn = ['Eziama Village', 'Osusu Village'];

  ////// Modal State
  const [showModal, setShowModal] = useState(false);

  ////// Add Village Function
  // Village State
  const [selectedVillages, setSelectedVillages] = useState([]);
  const { villages, removeVillage, addVillage } = useVillage();
  const [villageError, setVillageError] = useState(false);

  const handleChange = (e) => {
    let currentVillages = [];
    const selectedVillages = e.target.value;
    const selectedVillagesArray = currentVillages.push(selectedVillages);

    setSelectedVillages((previousVillages) =>
      previousVillages.concat(currentVillages)
    );
  };

  const addVillageHandler = (village) => {
    setVillageError(false);
    const villageIsInVillages = villages.find((vil) => vil === village.value);
    !villageIsInVillages ? addVillage(village.value) : setVillageError(true);
  };

  /////// Add Contributor Function

  const initialValues = {
    first_name: '',
    last_name: '',
    phone_number: '',
    village: '',
  };

  // Contributor state
  const [contributor, setContributor] = useState({ initialValues });

  const contributeChange = (e) => {
    const { name, value } = e.target;
    setContributor({
      ...contributor,
      [name]: value,
    });
  };

  const contributeSubmit = (e) => {
    e.preventDefault();
    // console.log(contributor);
    setContributor(initialValues);
    setShowModal(false);
  };

  // Form validation schema using Yup
  const contributorValidationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    village: Yup.string().required('Required'),
  });

  //CHECK IF VILLAGE IS EMPTY
  useEffect(() => {
    if (userVillages?.length === 0) {
      setIsVillageEmpty(true);
    } else {
      setIsVillageEmpty(false);
    }
  }, [userVillages]);

  //DELETE USER VILLAGE HANDLER
  const deleteUserVillage = async (id) => {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };
    try {
      await axios
        .delete(`https://api.23forobi.com/user-villages/${id}`, { headers })
        .then((res) => {
          toast.success(res.data.message);
        });
    } catch (err) {}
  };

  //set show delete modal
  const handleShowDelete = (item) => {
    setShowDeleteModal(true);
    setIdToDelete(item);
  };

  // //Effect to add id to delete
  // useEffect(() => {
  //   handleShowDelete();
  // }, [handleShowDelete]);

  //Effect to hide scroll
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  //Effect to hide scroll
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  ///LOADING STATE FOR VILLAGE AND VOTER DETAILS
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!votersDetails && !villageDetails) {
    } else {
      setLoading(false);
    }
  }, [votersDetails, villageDetails]);
  
  return (
    <div className={styles.dashboardmain}>
      <Toaster />
      <div className={styles.dashboardmain__top}>
        <div className={styles.dashboardmain_welcome}>
          <h2>Welcome back! {first_name},</h2>
          <p>We are glad to have you</p>
        </div>
        {!villageDetails && (
          <div
            className={styles.dashboardmain_add_village}
            onClick={() => setShowModal(true)}
          >
            <Image src={add_img_green} />
            <p>Add a new village</p>
          </div>
        )}
      </div>
      <hr />

      {loading ? (
        <div className="flex justify-center pt-6">
          <MiniLoader />
        </div>
      ) : (
        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          selectedTabClassName={`border-b-[1px] border-[#018226] text-[#2F3733] outline-none`}
        >
          <TabList
            className={`flex border-b border-[#F1F1F1] w-full items-center justify-start text-center mt-8 md:overflow-x-visible overflow-x-scroll md:flex-wrap ${styles.tabs}`}
          >
            {/*
            <Tab className="font-bold lg:px-8 py-3 text-3xl lg:text-2xl  md:min-w-[40%] min-w-[70%] cursor-pointer hover:border-[#018226] hover:border-b-[1px] flex gap-2 justify-center">
              {registeredUserVillage && registeredUserVillage}&nbsp;
              <p>
                <span className="lowercase">{`(${
                  registeredUserState && registeredUserState
                })`}</span>
              </p>
            </Tab>
              */}
            {villageDetails?.map((item) => (
              <Tab
                key={item.village.id}
                className="font-bold lg:px-8 py-3 text-3xl lg:text-2xl md:min-w-fit min-w-[70%] cursor-pointer hover:border-[#018226] hover:border-b-[1px] flex gap-2 justify-center items-center relative"
              >
                {item.village.name}
                <p className="lowercase">
                  ({item.state.state_name.split(' ')[0]})
                </p>
                <button
                  className="md:relative absolute right-12 md:right-0 md:px-8 text-red-700"
                  onClick={() => handleShowDelete(item.id)}
                >
                  <FaTimes />
                </button>
              </Tab>
            ))}
            {showDeleteModal && (
              <DeleteModal
                setShowDeleteModal={setShowDeleteModal}
                setShowCompleteModal={setShowDeleteModal}
                heading={'You are about to remove a village'}
                description={
                  'Kindly note that when you remove a village, you will lose all your delivered voters. Are you sure?'
                }
                image={bin}
              >
                <div className={`${styles.delete_modal}`}>
                  <button
                    className={`${styles.delete_modal__btn_submit}`}
                    onClick={() => setShowDeleteModal(false)}
                  >
                    No
                  </button>
                  <button
                    className={`${styles.delete_modal__btn_submit} btn_dark`}
                    onClick={() => {
                      deleteUserVillage(idToDelete);
                      setShowDeleteModal(false);
                    }}
                  >
                    Yes, delete village
                  </button>
                </div>
              </DeleteModal>
            )}
            {villageDetails && (
              <Tab
                className="font-bold lg:px-8 py-3 lg:text-2xl  min-w-[40%] cursor-pointer hover:border-[#018226] hover:border-b-[1px] flex row-gap-2 border-none"
                disabled={true}
              >
                <div
                  className="flex items-center gap-3 text-[#018226]"
                  onClick={() => setShowModal(true)}
                >
                  <Image src={add_img_green} height="15%" width="15%" />
                  <p className="text-lg">Add a new village</p>
                </div>
              </Tab>
            )}
          </TabList>
          {villageDetails?.map((items) => (
            <TabPanel key={items.id}>
              <div>
                <VillageDetails
                  villageDetails={items}
                  villageCount={villageDetails.length}
                  votersDetails={votersDetails}
                  awards={awards}
                />
              </div>
            </TabPanel>
          ))}
        </Tabs>
      )}
      {/* NEW VILLAGE MODAL */}
      {showModal && (
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          width="54.4rem"
        >
          <div className={styles.modal}>
            <div className={`${styles.modal__heading} modal_heading`}>
              <h2>
                Add a new <br />
                <span>Village</span>
              </h2>
              <button
                className={`closeBtn`}
                onClick={() => {
                  setShowModal(false);
                  setSelectedVillage(null);
                  setLgaClicked(false);
                }}
              >
                &times;
              </button>
            </div>
            <div className={styles.modal__body}>
              <p>Kindly enter the details for a new village</p>
              <div className={styles.details_form}>
                <form>
                  <SelectInput
                    placeholder="Select a state"
                    name="state"
                    options={states}
                    state={states}
                    addVillageHandler={addVillageHandler}
                    setStateId={(val) => setStateId(() => val)}
                    setStateClicked={setStateClicked}
                  />
                  <p className={styles.select_desc}>
                    Kindly note that the state you selected on registration
                    cannot be changed
                  </p>

                  {stateClicked && (
                    <SelectWithSearch
                      states={states}
                      // handleOnChange={(value) => console.log(value)}
                      setSelectedLocation={setSelectedLga}
                      setUserVillage={setUserVillage}
                      // setIsLocationEmpty={setIsLocationEmpty}
                      userLga={userLga}
                      type="lga"
                      setLgaClicked={setLgaClicked}
                      placeholder={'local government'}
                      // setLgaClicked={setLgaClicked}
                    />
                  )}
                  {lgaClicked && (
                    <SelectWithSearch
                      states={states}
                      // handleOnChange={(value) => console.log(value)}
                      setSelectedLocation={setSelectedVillage}
                      setUserVillage={setUserVillage}
                      // setIsLocationEmpty={setIsLocationEmpty}
                      userVillages={userVillages}
                      type="village"
                      placeholder={'village'}
                    />
                  )}
                  {selectedVillage?.name === 'Others' &&
                  isVillageEmpty === false ? (
                    <div className="mt-28">
                      <input
                        type="text"
                        placeholder="Add a village"
                        name="otherVillage"
                        value={otherVillage ?? ''}
                        onChange={(e) => setOtherVillage(e.target.value)}
                      />
                    </div>
                  ) : null}
                  {isVillageEmpty && lgaClicked ? (
                    <div className="mt-28">
                      <p> No Village in this local government. Add one</p>
                      <input
                        type="text"
                        placeholder="Add a village"
                        name="otherVillage"
                        value={otherVillage ?? ''}
                        onChange={(e) => setOtherVillage(e.target.value)}
                      />
                    </div>
                  ) : null}
                  <button
                    type="button"
                    className="btn_dark w-full rounded-full h-20 mt-9"
                    onClick={handleVillage}
                  >
                    Continue
                  </button>
                </form>
                {/* )}
                </Formik> */}
              </div>
            </div>
          </div>
        </Modal>
      )}
      {/* NEW VILLAGE MODAL END */}

      {/* COMPLETE MODAL */}

      {showCompleteModal && (
        <CompleteModal
          showCompleteModal={showCompleteModal}
          setShowCompleteModal={setShowCompleteModal}
          heading={
            'Congratulations! You have successfully added a new village.'
          }
          description={
            'Go Champ! You are doing so great, let’s keep the fire burning'
          }
        />
      )}

      {/* END COMPLETE MODAL */}
    </div>
  );
};

export default DashboardMain;
