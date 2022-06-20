import Progress from '../misc/Progress';
import styles from './Styles.module.scss';
import Contributor from './Contributor';
import Image from 'next/image';
import check from '../../assets/check.png';
import Modal from '../Modal/Index';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

/* Images Import */
import village_img_1 from '../../assets/village_img_1.png';
import village_img_2 from '../../assets/village_img_2.png';
import village_img_3 from '../../assets/village_img_3.png';
import village_img_4 from '../../assets/village_img_4.png';
import village_img_5 from '../../assets/village_img_5.png';
import add_img from '../../assets/add_img.png';

import google from '../../assets/google.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import apple from '../../assets/google.png';

const Village = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imageArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imageArray));
  };
  return (
    <div className={styles.state}>
      <div className="container">
        <div className={styles.state_heading}>
          <div className={styles.state_heading__title}>
            <h1>Eziama village</h1>
            <div className={styles.title_btn}>
              <button onClick={() => setShowModal(true)}>
                Contribute here
              </button>
            </div>
            {/* CONTRIBUTE MODAL */}
            {showModal && (
              <Modal show={showModal} onClose={() => setShowModal(false)}>
                <div className={styles.modal}>
                  <div className={styles.modal__heading}>
                    <h2>
                      Contribute <br />
                      <span>Your image</span>
                    </h2>
                  </div>
                  <div className={styles.modal__body}>
                    <p>
                      You can add new images from activities around your states
                      and village. File should be in .pdf, .jpeg, .jpg, .png
                      formats with less than 10 MB size
                    </p>
                    <div className={styles.file_input}>
                      <form>
                        <div className={styles.images_prev_container}>
                          {selectedImages &&
                            selectedImages.map((image, index) => {
                              return (
                                <div
                                  key={image}
                                  className={styles.image_preview}
                                >
                                  <Image src={image} width={100} height={100} />
                                  <button
                                    onClick={() =>
                                      setSelectedImages(
                                        selectedImages.filter(
                                          (e) => e !== image
                                        )
                                      )
                                    }
                                    className={styles.cancel}
                                  >
                                    <FaTimes />
                                  </button>
                                </div>
                              );
                            })}
                        </div>
                        <div className={styles.upload}>
                          <button type="button" className={styles.btn_upload}>
                            <Image src={add_img} />
                            <p>Add a new image</p>
                            <input
                              type="file"
                              name=""
                              id=""
                              onChange={onSelectFile}
                              multiple
                              accept="image/png, image/jpeg, image/webp"
                            />
                          </button>
                        </div>
                        <p className={styles.input_text}>
                          You can upload upto 3 pdf or 10 image files
                        </p>
                        <button className={styles.btn_submit}>Complete</button>
                      </form>
                    </div>
                  </div>
                </div>
              </Modal>
            )}

            {/* SIGN IN MODAL  */}

            {/* {showModal && (
              <Modal show={showModal} onClose={() => setShowModal(false)}>
                <div className={styles.modal}>
                  <div className={styles.modal__heading}>
                    <h2>
                      Welcome to <br />
                      <span>Peter Obi Campaign</span>
                    </h2>
                  </div>
                  <div className={styles.modal__body}>
                    <p>Sign-up with social media</p>
                    <div className={styles.social_login}>
                      <button>
                        <Image src={google} />
                        Join with Google
                      </button>
                      <button>
                        <Image src={facebook} />
                        Join with Facebook
                      </button>
                      <button>
                        <Image src={twitter} />
                        Join with Twitter
                      </button>
                      <button>
                        <Image src={apple} />
                        Join with Apple
                      </button>
                    </div>
                  </div>
                </div>
              </Modal>
            )} */}
          </div>
          <div className={styles.state_heading__contribution_progress}>
            <div className={styles.text}>
              <p>Contribution Progress</p>
              <p>10% control of Eziama village</p>
            </div>
            <Progress
              done={10}
              pgColor="#CE9E56"
              bgColor="#FAF1E4"
              type="village"
            />
            <div className={styles.prog_percent}>
              <p>10%</p>
              <p>100%</p>
            </div>
          </div>
        </div>
        <div className={styles.top_contributor}>
          <h2>Top Contributor</h2>
          <p>These are the top contributors in this village</p>
          <div className={styles.contributors}>
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_1}
              type="top_contributor"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_2}
              type="top_contributor"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_3}
              type="top_contributor"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_4}
              type="top_contributor"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_5}
              type="top_contributor"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_4}
              type="top_contributor"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_5}
              type="top_contributor"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_2}
              type="top_contributor"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_3}
              type="top_contributor"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_1}
              type="top_contributor"
            />
          </div>
        </div>
        <div className={styles.votes_guaranteed}>
          <h2>Vote Guaranteed</h2>
          <p>These are the votes quaranteed in this village</p>
          <div className={styles.contributors}>
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_1}
              type="vote"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_2}
              type="vote"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_3}
              type="vote"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_4}
              type="vote"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_5}
              type="vote"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_4}
              type="vote"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_5}
              type="vote"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_2}
              type="vote"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_3}
              type="vote"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_1}
              type="vote"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_5}
              type="vote"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_2}
              type="vote"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_3}
              type="vote"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_1}
              type="vote"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_5}
              type="vote"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_2}
              type="vote"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_3}
              type="vote"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_1}
              type="vote"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_5}
              type="vote"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_2}
              type="vote"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_3}
              type="vote"
            />
            <Contributor
              name="Ejima Benson"
              votes={50}
              img={village_img_1}
              type="vote"
            />
          </div>
        </div>
        <div className={styles.votes_delivered}>
          <h2>Vote delivered</h2>
          <div className={styles.detail}>
            <Image src={village_img_1} />
            <div className={styles.name}>
              <h5>Ejima Benson</h5>
              <div className={styles.guaranteed}>
                <Image src={check} />
                <p>Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Village;
