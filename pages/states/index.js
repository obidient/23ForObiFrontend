import Image from 'next/image';
import styles from '../pagestyles/home.module.scss';
import labourparty from '../../public/images/labour_party.png';
import ProgressBar from '../../components/misc/Progress';
import States from '../../components/States/Index';
import SupportGroups from '../../components/SupportGroups/Index';
import { useRouter } from 'next/router';
import Link from 'next/link';
import NavBar from '../../components/NavBar/Index';
import Footer from '../../components/Footer/Index';
import Loader from '../../components/Loader';
import { FetchEvent } from 'next/dist/server/web/spec-compliant/fetch-event';
import { countryContext } from './../../Context/countryContext';
import { useContext, useState } from 'react';
import Page from './../../components/Page';
import SGCard from '../../components/SupportGroups/SGCard';

//images
import google from '../../assets/google.png';
import facebook from '../../assets/facebook.png';
import apple from '../../assets/apple.png';
import twitter from '../../assets/twitter.png';

//axios
import axios from 'axios';

//Form Imports
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../components/Forms/FormikControl';

//Adapters
import { addSupportGroup } from './../../adapters/requests/index';

//Modals
import DeliverModal from './../../components/Modal/DeliverModal';
import Modal from '../../components/Modal/Index';
import useAuthStore from '../../store/authStore';

const homepage = ({ data, progress, total_number_of_voters }) => {
  const { userProfile } = useAuthStore();
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showDeliverModal, setShowDeliverModal] = useState(false);

  // const done = 13;

  // const { data } = useContext(countryContext);
  // console.log('home', data);
  const router = useRouter();
  const query = router.query;

  const initialValues = {
    name: '',
    // state: '',
    // village: '',
    // votes_delivered: 0,
  };
  // Form validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    //state: Yup.string().required('Required'),
    //village: Yup.string().required('Required'),
    // votes_delivered: Yup.number().required('Required'),
  });

  const onSubmit = (values) => {
    // console.log('Form Data', values);
    setShowModal(false);
    setShowLoader(true);
    setShowLogin(true);

    //Api call
    const headers = {
      accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const callAPI = async () => {
      try {
        setShowLoader(true);
        const res = await addSupportGroup(values)?.then((res) => {
          console.log(res);
        });
        setShowLoader(false);
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    callAPI();
  };
  //Initialize select options
  const stateOptions = [
    {
      label: 'Rivers',
      value: 'Rivers State',
    },
    {
      label: 'Lagos',
      value: 'Lagos State',
    },
    {
      label: 'Ogun',
      value: 'Ogun State',
    },
  ];
  const villageOptions = [
    {
      label: 'Ezeani Village 1',
      value: 'Ezeani Village',
    },
    {
      label: 'Osusus Village 2',
      value: 'Osusu Village',
    },
    {
      label: 'Ariara Village 3',
      value: 'Ariara Village',
    },
  ];

  return (
    <Page
      description="deliver 23 votes per village for peter obi"
      title="23forobi"
    >
      <div className={styles.homepage}>
        <div className={styles.hero}>
          {/* DELIVER VOTES MODAL */}
          {showDeliverModal && (
            <DeliverModal
              show={showDeliverModal}
              onClose={() => setShowDeliverModal(false)}
            />
          )}
          {/* END DELIVER VOTES MODAL */}
          <div className="container">
            <div className={styles.hero__top}>
              <div className={styles.hero__details}>
                <h2>Can you bring in 23 votes for</h2>
                <h1>Peter Obi</h1>
                <p>
                  The goal is to deliver at least{' '}
                  <span>23 votes per village </span>
                  within each state and with your help and the help of your
                  loved ones, we can do this
                </p>
                {!userProfile && (
                  <button
                    className={`${styles.btn_vote} btn_dark`}
                    onClick={() => setShowDeliverModal(true)}
                  >
                    Yes, I can
                  </button>
                )}
              </div>
              <div className={styles.hero__img}>
                <Image src={labourparty} />
              </div>
            </div>
            <div className={styles.hero__bottom}>
              <h5>OUR PROGRESS SO FAR</h5>
              <ProgressBar
                done={progress ? progress : 0}
                bgColor="#E4FFEC"
                pgColor="rgba(1, 130, 38, 1)"
                type="state"
              />
              <div className={styles.percent}>
                <h5>{progress ? progress : 0}%</h5>
                <h5>
                  {total_number_of_voters
                    ? `( ${total_number_of_voters} votes guaranteed so far )`
                    : '( No votes guaranteed so far )'}
                </h5>
                <h5>100%</h5>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.states}>
          <States />
        </div>
        <div className={styles.support_groups}>
          <div className={styles.support_groups}>
            <div className={styles.support}>
              <div className="container">
                <h2>Support groups</h2>
                <div className={styles.cards}>
                  {data && data.length > 0 ? (
                    data.map((item, index) => (
                      <SGCard
                        key={index}
                        /**Lagos Group is just a placeholder */
                        groupname={
                          item.name !== 'string'
                            ? `${item.name} Group`
                            : 'Lagos Group'
                        }
                        nvotes={item.votes_delivered}
                      />
                    ))
                  ) : (
                    <h2>No Support Group Found</h2>
                  )}
                </div>
                <div className={styles.btn_div}>
                  <button
                    className={`${styles.btn} btn_dark`}
                    onClick={() => setShowModal(true)}
                  >
                    Add a group
                  </button>
                </div>
              </div>
              {showModal && (
                <Modal
                  show={showModal}
                  onClose={() => setShowModal(false)}
                  width="51.5rem"
                >
                  <div className={styles.modal}>
                    <h2>
                      Add a <br />
                      <span>New Group</span>
                    </h2>
                    <div className={styles.modal__body}>
                      <p>Kindly add a new group</p>
                      <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                      >
                        {({ values }) => (
                          <Form autoComplete="off">
                            <FormikControl
                              values={values}
                              control="input"
                              placeholder="Group Name"
                              name="name"
                              type="text"
                            />
                            {/* <FormikControl
                              values={values}
                              control="input"
                              placeholder="Group Name"
                              name="votes_delivered"
                              type="number"
                            />

                           <FormikControl
                              values={values}
                              control="select"
                              placeholder="Select your state"
                              name="state"
                              options={stateOptions}
                            />
                            <FormikControl
                              values={values}
                              control="select"
                              placeholder="Select your village"
                              name="village"
                              options={villageOptions}
                              />*/}
                            <button
                              className="btn_dark"
                              type="submit"
                              onSubmit={onSubmit}
                            >
                              Continue
                            </button>
                          </Form>
                        )}
                      </Formik>
                    </div>
                  </div>
                </Modal>
              )}
              {showLoader && (
                <Loader
                  showLoader={showLoader}
                  onClose={() => setShowLoader(false)}
                ></Loader>
              )}

              {showLogin && (
                <Modal
                  show={showLogin}
                  onClose={() => setShowLogin(false)}
                  width="51.1rem"
                >
                  <div className={styles.login_modal}>
                    <h2>
                      Welcome to <br /> <span>Peter Obi Campaign</span>
                    </h2>
                    <div className={styles.login_modal__body}>
                      <p>Sign-up with social media</p>
                      <div className={styles.login_modal__body__container}>
                        <div
                          className={
                            styles.login_modal__body__container__content
                          }
                        >
                          <div
                            style={{ display: 'grid', placeItems: 'end' }}
                            className={
                              styles.login_modal__body__container__content__image
                            }
                          >
                            <Image src={google} alt="google icon" />
                          </div>
                          <div
                            className={
                              styles.login_modal__body__container__content__para
                            }
                          >
                            <p>Join with Google</p>
                          </div>
                        </div>

                        <div
                          className={
                            styles.login_modal__body__container__content
                          }
                        >
                          <div
                            style={{ display: 'grid', placeItems: 'end' }}
                            className={
                              styles.login_modal__body__container__content__image
                            }
                          >
                            <Image src={facebook} alt="google icon" />
                          </div>
                          <div
                            className={
                              styles.login_modal__body__container__content__para
                            }
                          >
                            <p>Join with Facebook</p>
                          </div>
                        </div>

                        <div
                          className={
                            styles.login_modal__body__container__content
                          }
                        >
                          <div
                            style={{ display: 'grid', placeItems: 'end' }}
                            className={
                              styles.login_modal__body__container__content__image
                            }
                          >
                            <Image src={twitter} alt="google icon" />
                          </div>
                          <div
                            className={
                              styles.login_modal__body__container__content__para
                            }
                          >
                            <p>Join with Twitter</p>
                          </div>
                        </div>

                        <div
                          className={
                            styles.login_modal__body__container__content
                          }
                        >
                          <div
                            style={{ display: 'grid', placeItems: 'end' }}
                            className={
                              styles.login_modal__body__container__content__image
                            }
                          >
                            <Image src={apple} alt="google icon" />
                          </div>
                          <div
                            className={
                              styles.login_modal__body__container__content__para
                            }
                          >
                            <p>Join with Apple</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>
              )}
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </Page>
  );
};

export default homepage;
