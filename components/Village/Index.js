import Progress from '../misc/Progress';
import styles from './Styles.module.scss';
import Contributor from './Contributor';
import Image from 'next/image';
import check from '../../assets/check.png';
import Modal from '../Modal/Index';
import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import Breadcrumbs from '../misc/Breadcrumbs';
import avatar from '../../assets/avatar.png'

/* Images Import */
import village_img_1 from '../../assets/village_img_1.png';
import village_img_2 from '../../assets/village_img_2.png';
import village_img_3 from '../../assets/village_img_3.png';
import village_img_4 from '../../assets/village_img_4.png';
import village_img_5 from '../../assets/village_img_5.png';

import ContributeModal from './ContributeModal';

const Village = ({
  contributors,
  progress_percentage,
  village_name,
  village_id,
  votersData,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [registerFormIsVisible, setRegisterFormIsVisible] = useState(false);
  const [signInIsVisible, setSignInIsVisible] = useState(false);

  //Effect to hide scroll
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  return (
    <div className={styles.state}>
      <div className="container">
        <div className={styles.state_heading}>
          <div className={styles.breadcrumb}>
            <Breadcrumbs />
          </div>
          <div className={styles.state_heading__title}>
            <div>
              <h1>{village_name ? `${village_name} village` : ''}</h1>
              <p className={styles.red}>
                {contributors > 0
                  ? `We have got 5 votes guaranteed in ${
                      village_name ? village_name : ''
                    } Village in Abia State.Robert Okonkwo is our man on ground.Calistus Okafor is coordinating activities in this village`
                  : `We do not have anyone on ground in ${
                      village_name ? village_name : ''
                    } village.Can you help?`}
              </p>
            </div>
            <div className={styles.title_btn}>
              <button onClick={() => setShowModal(true)} className="btn_light">
                Contribute here
              </button>
            </div>

            {/* DETAILS FORM */}
            {showModal && (
              <Modal
                show={showModal}
                onClose={() => setShowModal(false)}
                width={registerFormIsVisible ? '54.4rem' : '50rem'}
              >
                <ContributeModal
                  setShowModal={setShowModal}
                  registerFormIsVisible={registerFormIsVisible}
                  setRegisterFormIsVisible={setRegisterFormIsVisible}
                  setSignInIsVisible={setSignInIsVisible}
                  signInIsVisible={signInIsVisible}
                />
              </Modal>
            )}
            {/* DETAILS MODAL END */}

            {/* HAVE PVC MODAL */}
            {/* {showModal && (
              <Modal show={showModal} 
              onClose={() => setShowModal(false)}               
              width="54.4rem"
              >
                <div className={styles.modal}>
                  <div className={`${styles.modal__heading} modal_heading`}>
                    <h2>
                      Help us complete <br />
                      <span>This Details</span>
                    </h2>
                    <button
                    className={`closeBtn`}
                    onClick={() => setShowModal(false)}
                  >
                    &times;
                  </button>
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
                    <button className="btn_dark">Next</button>
                  </div>
                </div>
              </Modal>
            )} */}
            {/* HAVE PVC MODAL END */}
          </div>
          <div className={styles.state_heading__contribution_progress}>
            <div className={styles.text}>
              <p>Contribution Progress</p>
              <p>
                {progress_percentage ? `${progress_percentage}%` : '0%'} control
                of {village_name ? village_name : ''} village
              </p>
            </div>
            <Progress
              done={progress_percentage > 0 ? progress_percentage : 0}
              pgColor="#CE9E56"
              bgColor="#FAF1E4"
              type="village"
            />
            <div className={styles.prog_percent}>
              <p>{progress_percentage ? `${progress_percentage}%` : '0%'}</p>
              <p>100%</p>
            </div>
          </div>
        </div>
        <div className={styles.top_contributor}>
          <h2>{contributors ? 'Top' : 'No'} Contributor</h2>

          <p>
            {contributors
              ? 'These are the top contributors in this village'
              : 'There are no contributors in this village'}
          </p>
          {contributors > 0 &&
            contributors.map((item, index) => (
              <Contributor
                key={index}
                name={item.name}
                votes={item.votes}
                type="vote"
              />
            ))}
          {/**
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
           */}
        </div>
        <div className={styles.votes_guaranteed}>
          <h2>{votersData ? `${votersData.length} Votes` : 'No Votes'} Guaranteed</h2>
          <p>
            {votersData
              ? 'There are the votes quaranteed in this village'
              : 'These are no votes quaranteed in this village'}
          </p>
          <div className={styles.contributors}>
            {votersData.length > 0 &&
              votersData.map((item, index) => (
                <Contributor
                  key={index}
                  name={item.name}
                  votes={item.votes}
                  type="vote"
                  img={avatar}
                />
              ))}
            {/*<Contributor
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
              />*/}
          </div>
        </div>
        {/* <div className={styles.votes_delivered}>
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
        </div> */}
      </div>
    </div>
  );
};

export default Village;
