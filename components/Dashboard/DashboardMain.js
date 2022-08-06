import styles from './Styles.module.scss';
import Image from 'next/image';

//IMAGES
import status_check from '../../assets/status_check.png';
import close from '../../assets/closeW.png'
import add_img_green from '../../assets/add_img_green.png';
import caret_down from '../../assets/caret_down.png';

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
import VillageDetails from './VillageDetails'

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


// Prevent serverside redering on the FormikControl Component
const FormikControl = dynamic(() => import('../Forms/FormikControl'), {
  ssr: false,
});
// Prevent serverside redering on the CustomSelectInput Component
// const CustomSelectInput = dynamic(
//   () => import('../Forms/SelectInput').then((mod) => mod.CustomSelectInput),
//   {import CompleteModal from './../misc/CompleteModal';

//     ssr: false,
//   }
// );



const DashboardMain = ({states, villageDetails, votersDetails}) => {
  const { userProfile } = useAuthStore();
  const { accessToken } = useAuthStore();
  
  const [otherVillage, setOtherVillage] = useState();
  ///////////COMPLTETE MODAL//////////////
  const [showCompleteModal, setShowCompleteModal] = useState();


  const stateOption = states?.map(state => {
    return (state.state_name)
  })
  
  const [tabIndex, setTabIndex] = useState(0);
  
  const email = userProfile?.email
  const first_name = userProfile?.first_name;
  const last_name = userProfile?.last_name;
  const image = userProfile?.image;

  ////////////////// Selected Village///////////////////////
  const [selectedVillage, setSelectedVillage] = useState("")
  const handleVillage = async () => {
    const url = 'https://api.23forobi.com/user-villages';
    const villageId = selectedVillage.value;
    const data = {
      village_id: villageId,
    };
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Authorization': `Bearer ${accessToken}`,

    };
    axios.post(url, data, { headers })?.then((res) => {
      try {
        // console.log(res.data);
        
      } catch (error) {
        // console.log(error)
      }
      setShowCompleteModal(true);
    });
    setShowModal(false);
  }
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

  //Effect to hide scroll
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  return (
    <div className={styles.dashboardmain}>
      <div className={styles.dashboardmain__top}>
        <div className={styles.dashboardmain_welcome}>
          <h2>Welcome back! {first_name},</h2>
          <p>We are glad to have you</p>
        </div>
        <div
          className={styles.dashboardmain_add_village}
          onClick={() => setShowModal(true)}
        >
          <Image src={add_img_green} />
          <p>Add a new village</p>
        </div>
      </div>
      <hr />
      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        selectedTabClassName="border-b-[1px] border-[#018226] text-[#2F3733] outline-none"
      >
        <TabList className="flex border-b border-[#F1F1F1] w-full items-center justify-start text-center mt-8">
          {villageDetails?.map((item) => (
            <Tab
              key={item.village.id}
              className="font-bold lg:px-8 py-3 text-3xl lg:text-2xl  w-[200px] cursor-pointer hover:border-[#018226] hover:border-b-[1px]"
            >
              {item.village.name}
            </Tab>
          ))}
        </TabList>
        <div className={styles.village_details__stats}>
          <VillageStat
            votersDetails={votersDetails}
            villageDetails={villageDetails}
          />
        </div>
        {villageDetails?.map((items) => (
          <TabPanel key={items.id}>
            <div>
              <VillageDetails
                villageDetails={items}
                votersDetails={votersDetails}
              />
            </div>
          </TabPanel>
        ))}
      </Tabs>

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
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
            </div>
            <div className={styles.modal__body}>
              <p>Kindly enter the details for a new village</p>
              <div className={styles.details_form}>
                {/* <Formik
                  initialValues={{
                    firstName: '',
                    lastName: '',
                    state: '',
                    village: '',
                  }}
                  validationSchema={contributorValidationSchema}
                  onSubmit={(values) => console.log('Form data', values)}
                >
                  {({ values }) => ( */}
                    <form>
                      <SelectInput
                        placeholder="Select a state"
                        name="state"
                        options={states}
                        state={states}
                        addVillageHandler={addVillageHandler}
                      />
                      <p className={styles.select_desc}>
                        Kindly note that the state you selected on registration
                        cannot be changed
                      </p>
                      <SelectInputVillage
                        placeholder="Select a village"
                        name="village"
                        options={states}
                        setSelectedVillage={setSelectedVillage}
                        addVillageHandler={addVillageHandler}
                        />
                      {selectedVillage.name === "Others" ? <div className='mt-28'>
                        <input
                          type="text"
                          placeholder="Add a village"
                          name="otherVillage"
                          value={otherVillage}
                          onChange={(e) => setOtherVillage(e.target.value)}
                        />
                      </div> : null}
                      <button
                        type="submit"
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
