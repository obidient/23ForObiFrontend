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

import google from '../../assets/google.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import apple from '../../assets/google.png';
import SelectInput from '../misc/SelectInput';

const Village = () => {
  const [showModal, setShowModal] = useState(false);

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

            {/* DETAILS FORM */}
            {showModal && (
              <Modal show={showModal} onClose={() => setShowModal(false)}>
                <div className={styles.modal}>
                  <div className={styles.modal__heading}>
                    <h2>
                      Enter your <br />
                      <span>Details</span>
                    </h2>
                  </div>
                  <div className={styles.modal__body}>
                    <p>Kindly fill our your personal details</p>
                    <div className={styles.details_form}>
                      <form action="">
                        <input type="text" placeholder="First name" />
                        <input type="text" placeholder="Last Name" />
                        <input type="text" placeholder="Email address" />
                        <div className={styles.select}>
                          <SelectInput option="Select your state" />
                        </div>
                        <div className={styles.select}>
                          <SelectInput option="Select your village" />
                        </div>
                        <div className={styles.btn_submit}>
                          <input type="button" value="Continue" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Modal>
            )}
            {/* DETAILS MODAL END */}

            {/* HAVE PVC MODAL */}
            {/* {showModal && (
              <Modal show={showModal} onClose={() => setShowModal(false)}>
                <div className={styles.modal}>
                  <div className={styles.modal__heading}>
                    <h2>
                      Help us complete <br />
                      <span>This Details</span>
                    </h2>
                  </div>
                  <div className={styles.modal__body}>
                    <div className={styles.have_pvc}>
                      <p>
                        Do you have a <span>PVC</span>
                      </p>
                      <div className={styles.radios}>
                        <div className={styles.radio__container}>
                          <label for="html">YES</label>
                          <input type="radio" id="no" name="pvc" value="YES" />
                        </div>
                        <div className={styles.radio__container}>
                          <label for="html">NO</label>
                          <input type="radio" id="no" name="pvc" value="NO" />
                        </div>
                      </div>
                    </div>
                    <div className={styles.will_vote}>
                      <p>
                        Will you be <span>VOTING</span>
                      </p>
                      <div className={styles.radios}>
                        <div className={styles.radio__container}>
                          <label for="html">YES</label>
                          <input
                            type="radio"
                            id="yes"
                            name="vote"
                            value="YES"
                          />
                        </div>
                        <div className={styles.radio__container}>
                          <label for="html">NO</label>
                          <input type="radio" id="no" name="vote" value="NO" />
                        </div>
                      </div>
                    </div>
                    <button>Next</button>
                  </div>
                </div>
              </Modal>
            )} */}
            {/* HAVE PVC MODAL END */}
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
