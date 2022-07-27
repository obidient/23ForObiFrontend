import Image from 'next/image';
import { BsShare, BsDownload } from 'react-icons/bs';
import styles from './Styles.module.scss';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

import SingleStateProgress from './../misc/SingleStateProgress';
import Card from '../Card/Card';
import { VillageCards } from '../Card/Cards';
import VILLAGESINCONTROL from '../../data/villageDetails';
import { villageNotInDetails } from '../../data/villageDetails';
import Modal from '../Modal/Index';
import { FaTimes } from 'react-icons/fa';
import {StateBreadcrumb} from '../misc/Breadcrumb';
import SOCIALMEDIAIMAGES from '../../data/smImages';

// Forms Import
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
// Prevent serverside redering on the FormikControl Component
import dynamic from 'next/dynamic';
const FormikControl = dynamic(() => import('../Forms/FormikControl'), {
  ssr: false,
});

//Images
import search from '../../assets/search.png';
import pdp from '../../assets/pdp.png';
import apc from '../../assets/apc.png'
import ikpeazu from '../../assets/ikpeazu.png';
import avatar from '../../assets/avatar.png';

import add_img from '../../assets/add_img.png';
import download_img from '../../assets/download.png';
import ImgCard from '../ImgCard/ImgCard';
import Link from 'next/link';
import ShareCard from '../ImgCard/ShareCard';
import axios from 'axios';
import uploaded from '../../assets/uploaded.png';

const State = ({ stateName, detail, images, villages }) => {
  // console.log(detail);
  // console.log(villages)
  const {
    current_governor,
    progress,
    terms,
    vote_control,
    current_governor_appointment_date,
    last_vote_direction,
    image,
  } = detail;
  // Modals
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  // LightBox
  const [lightBox, setLightBox] = useState(false);
  const [activeImage, setActiveImage] = useState('');
  const [activeTitle, setActiveTitle] = useState('');
  const [shareImg, setShareImg] = useState(false);
  // Filter
  const [searchVillage, setSearchVillage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchNotInQuery, setSearchNotInQuery] = useState('');
  const [searchParam] = useState(['name']);
  const [villagesIn, setVillagesIn] = useState(VILLAGESINCONTROL);
  const [villagesNotIn, setVillagesNotIn] = useState(villageNotInDetails);
  const [selectedImages, setSelectedImages] = useState([]);

  //IMAGE FOR STATE
  const [imgForm, setImgForm] = useState({
    title: '',
    location: stateName,
    contributed_by: '',
  });

console.log(last_vote_direction)
  //ONCHANGE FOR TITLE
  const onImgChange = (e) => {
    setImgForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(imgForm);
  };

  // FUNCTION FOR PREVIEWING IMAGES

  const [imageUpload, setImageUpload] = useState('');

  //IMAGE ONCHANGE
  const onSelectFile = useCallback(async (e) => {
    const selectedFiles = e.target.files[0];
    const base64 = await convertToBase64(selectedFiles);
    setImageUpload(base64);
    e.target.value = '';
    setSelectedImages(selectedFiles);
  }, []);
  //CONVERT TO BASE64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      if (!file) {
        alert('Please select an image');
      } else {
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
      }
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  //DELETE IMAGE
  const deleteImage = (e) => {
    e.preventDefault();
    setImageUpload(null);
  };

  //PAYLOAD
  //GET DATA AND ADD TO AN UP OBJECT TO POST
  const url = imageUpload;
  const { title, location, contributed_by } = imgForm;

  const imgPayload = { title, location, contributed_by, url };

  //POST DATA TO ENDPOINT
  const onSubmit = (e) => {
    e.preventDefault();

    //Api call
    const headers = {
      accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const callAPI = async () => {
      try {
        const res = await axios
          .post(`https://api.23forobi.com/campaign_images/`, imgPayload, {
            headers: headers,
          })
          .then((res) => {
            console.log(res);
          });

        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    callAPI();
  };

  // Show LightBox Images
  const showImage = (image, text) => {
    setActiveImage(image);
    setActiveTitle(text);
    setLightBox(true);
  };

  // Share Images
  const shareSocial = (image) => {
    setShareImg(!shareImg);
  };
  //SEARCH VILLAGES
  const handleNotInVillageChange = (e) => {
    e.preventDefault();
    setSearchNotInQuery(e.target.value);
  };
  const handleInVillageChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const villagesList = villages.list_of_villages 
  // console.log(villagesList)

  const filter = (villages, query) => {
    return villages.filter((village) => {
      return searchParam.some((newVillage) => {
        return village[newVillage]?.toString().toLowerCase().indexOf(query) > -1;
      });
    });
  };

  // Handle Change
  const handleChange = (e) => {
    e.preventDefault();
    setSearchVillage(e.target.value);
  };
  // Filter Village

  //Effect to hide scroll
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showModal || showModal2 ? 'hidden' : 'auto';
  }, [showModal, showModal2]);

  return (
    <div className={styles.state}>
      <div className="container">
        <div className={styles.state_heading}>
          <StateBreadcrumb state={stateName} />
          <div className={styles.state_heading__title}>
            <h1 className="capitalize">{stateName} Villages</h1>
            <div className={styles.vill_control}>
              <div className={styles.vill_control__text}>
                <h5>Villages in control</h5>
                <p>{vote_control ? `${vote_control} %` : `${0}%`} control</p>
              </div>
              <div className={styles.vill_control__progress}>
                <SingleStateProgress done={progress ? `${progress}` : `${0}`} />
              </div>
            </div>
          </div>
          <div className={styles.state_heading__govt}>
            <div className={styles.govt_box}>
              <div className={styles.current_gov}>
                <p>Current governor</p>
                <div className={styles.current_gov__details}>
                  <Image src={image ? image : avatar} width={78} height={78} />
                  <div className={styles.text}>
                    <h5>
                      {current_governor
                        ? current_governor
                        : ''}
                    </h5>
                  <p>Since: {current_governor_appointment_date ? current_governor_appointment_date : ''}</p>
                    <p>Terms: {terms ? terms : ''}</p>
                  </div>
                </div>
              </div>
              <div className={styles.hr}></div>
              <div className={styles.vote_dir}>
                <p>Last vote direction</p>
                <div className={styles.vote_dir__details}>
                  {/* <Image src={last_vote_direction ? pdp : apc} /> */}
                  <div className={styles.text}>
                    <h5>{last_vote_direction ? last_vote_direction : ''}</h5>
                    <p>{last_vote_direction ? 'People Democratic Party': 'All Progressive Congress'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.state_vilage_controlled}>
          <div className={styles.state_vilage_controlled__head}>
            <h5>Villages in control</h5>
            <div className={styles.head_input}>
              <input
                type="text"
                placeholder="Search village here"
                value={searchQuery}
                onChange={handleInVillageChange}
              />
              <div className={styles.search_icon}>
                <Image src={search} alt="search" />
              </div>
            </div>
          </div>
          <div className="cards">
            {villagesList && villagesList.length > 0 ? (
              filter(villagesList, searchQuery.toLowerCase()).map((item) => (
                <Card
                  key={item.id}
                  village={item.name}
                  type={item.type}
                  progress={item.progress_percentage}
                  slug={item.slug}
                  contributors={item.top_contributors}
                  voters={item.voters}
                  id={item.id}
                />
              ))
            ) : (
              <h2>No Villages</h2>
            )}
          </div>
        </div>
        <div className={styles.state_vilage_not_controlled}>
          <div className={styles.state_vilage_not_controlled__head}>
            <h5>Villages not in control</h5>
            <div className={styles.head_input}>
              <input
                type="text"
                placeholder="Search state here"
                value={searchNotInQuery}
                onChange={handleNotInVillageChange}
              />
              <div className={styles.search_icon}>
                <Image src={search} alt="search" />
              </div>
            </div>
          </div>
          <div className="cards">
            {villages && villages.length > 0 ? (
              filter(villages, searchNotInQuery.toLowerCase()).map(
                (item) => (
                  <Card
                    key={item.id}
                    village={item.name}
                    type={item.type}
                    progress={item.progress}
                    slug={item.slug}
                  />
                )
              )
            ) : (
              <h2>No Villages</h2>
            )}
          </div>
        </div>
        <div className={styles.btn_missing}>
          <button onClick={() => setShowModal(true)} className="btn_dark">
            Add a missing village
          </button>
        </div>

        {/**** Modal *****/}
        {showModal && (
          <Modal
            show={showModal}
            onClose={() => setShowModal(false)}
            width="54.4rem"
          >
            <div className={styles.modal}>
              <div className={`${styles.modal__heading} modal_heading`}>
                <h2>
                  Add a missing <br />
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
                <p>Kindly add a missing village</p>
                <Formik
                  initialValues={{ village: '', location: '' }}
                  validationSchema={Yup.object({
                    village: Yup.string().required('Required'),
                    location: Yup.string().required('Required'),
                  })}
                  onSubmit={(values) => console.log('Form data', values)}
                >
                  {({ values }) => (
                    <Form autoComplete="off">
                      <FormikControl
                        values={values}
                        control="input"
                        placeholder="Enter village name"
                        name="village"
                        type="text"
                      />
                      <FormikControl
                        values={values}
                        control="input"
                        placeholder="Enter a Location"
                        name="location"
                        type="text"
                      />
                      <button className="btn_dark" type="submit">
                        Continue
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </Modal>
        )}
        {/**** End Modal *****/}
        {/* Social Media Images */}
        <div className={styles.social_media_image}>
          <div className={styles.social_media_image__head}>
            <div className={styles.head_text}>
              <h5>Images</h5>
              <p>
                These are social media images across your state from the
                supporters and contributors.
              </p>
            </div>
            <div className={styles.head_btn}>
              <button onClick={() => setShowModal2(true)} className="btn_light">
                Contribute images
              </button>
              {/* CONTRIBUTE MODAL */}
              {showModal2 && (
                <Modal
                  show={showModal2}
                  onClose={() => setShowModal2(false)}
                  width="54.4rem"
                >
                  <div className={styles.modal}>
                    <div className={`${styles.modal__heading} modal_heading`}>
                      <h2>
                        Contribute <br />
                        <span>Your image</span>
                      </h2>
                      <button
                        className={`closeBtn`}
                        onClick={() => setShowModal2(false)}
                      >
                        &times;
                      </button>
                    </div>
                    <div className={styles.modal__body}>
                      <p>
                        You can add new images from activities around your
                        states and village. File should be in .pdf, .jpeg, .jpg,
                        .png formats with less than 10 MB size
                      </p>
                      <div className={styles.file_input}>
                        <form>
                          {imageUpload && (
                            <div className={styles.images_prev_container}>
                              <div className={styles.image_preview}>
                                <Image
                                  src={imageUpload}
                                  width={100}
                                  height={100}
                                />
                                <div
                                  onClick={deleteImage}
                                  className={styles.cancel}
                                >
                                  <FaTimes />
                                </div>
                              </div>
                            </div>
                          )}
                          <div className={styles.upload}>
                            <button type="button" className={styles.btn_upload}>
                              <Image src={add_img} />
                              <p>Add a new image</p>
                              <input
                                type="file"
                                name="imageUpload"
                                id=""
                                onChange={onSelectFile}
                                multiple
                                accept="image/*, png, jpeg, jpg, image/jpeg, image/webp"
                              />
                            </button>
                          </div>
                          <div className="flex flex-col my-4">
                            <label
                              className="text-2xl text-left mt-2 mb-7 font-bold"
                              htmlFor="img_title"
                            >
                              Name your image
                            </label>
                            <input
                              name="title"
                              type="text"
                              className="outline-none border-[#018226]"
                              value={title}
                              onChange={onImgChange}
                              maxLength={30}
                            />
                            <p className="text-right py-1 font-semibold">
                              {imgForm.title.length} / 30
                            </p>
                          </div>
                          <p className={styles.input_text}>
                            You can upload upto 3 pdf or 10 image files
                          </p>
                          <button
                            className={`${styles.btn_submit} btn_dark`}
                            onClick={onSubmit}
                          >
                            Complete
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </Modal>
              )}
              {/* END CONTRIBUTE MODAL */}

              {/* COMPLETE MODAL */}

              {/* <Modal
                show={showModal2}
                onClose={() => setShowModal2(false)}
                width="54.4rem"
              >
                <div className={`${styles.modal} ${styles.complete}`}>
                  <div>                    
                    <button
                      className={`closeBtn ${styles.complete_btn}`}
                      onClick={() => setShowModal2(false)}
                    >
                      &times;
                    </button>
                  </div>
                  <div className={styles.complete_body}>
                    <Image src={uploaded} />
                    <h2>Your image has been added successfully</h2>
                    <p>Congratulations! Your image has been added successfully</p>
                    <button
                      className={`${styles.btn_submit} btn_dark`}
                      onClick={onSubmit}
                    >
                      Complete
                    </button>
                  </div>
                </div>
              </Modal> */}

              {/* END COMPLETE MODAL */}
            </div>
          </div>
          <div className={styles.state_body_cards}>
            {images && images.length > 0 ? (
              images.map((item, index) => (
                <ImgCard
                  src={item.url}
                  key={index}
                  title={item.title}
                  onClick={() => {
                    showImage(item.url, item.title), setShowModal3(true);
                  }}
                />
              ))
            ) : (
              <h2 className="font-bold">No Images </h2>
            )}
            {showModal3 && (
              <Modal
                show={showModal}
                onClose={() => setShowModal3(false)}
                width="54.4rem"
              >
                <div className="py-4 text-[##2F3733]">
                  <h5 className="font-light">Uploaded</h5>
                  <p className="font-bold">Images</p>
                </div>
                <hr className="border-[#E1E1E1] border-1 mb-5" />
                <div className="rounded-2xl">
                  {lightBox ? (
                    <div className={styles.lightbox}>
                      <Image
                        src={activeImage}
                        width="612px"
                        height="278px"
                        alt=""
                      />
                    </div>
                  ) : (
                    ''
                  )}
                </div>

                <div className="pt-6">
                  <h5 className="text-4xl lg:text-2xl font-bold text-[#2F3733]">
                    {activeTitle.toUpperCase()}
                  </h5>
                  <div className="flex justify-between w-1/3 text-[#5678CE] py-6">
                    <div
                      className="flex items-center justify-between text-2xl mr-10 hover:text-black"
                      onClick={() => shareSocial(shareImg)}
                    >
                      <BsShare />
                      <h5 className="text-4xl lg:text-2xl ml-3">Share</h5>
                      {shareImg && (
                        <ShareCard image={activeImage} title={activeTitle} />
                      )}
                    </div>
                    <div>
                      <a
                        href={`${activeImage}`}
                        download
                        className="flex items-center justify-between hover:text-black"
                      >
                        <BsDownload className="text-2xl" />
                        <h5 className="text-4xl lg:text-2xl ml-3 ">Download</h5>
                      </a>
                    </div>
                  </div>
                </div>
              </Modal>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default State;
