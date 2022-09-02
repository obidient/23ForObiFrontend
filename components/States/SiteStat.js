import styles from './Styles.module.scss';
import { useState, useEffect } from 'react';
import Modal from './../Modal/Index';
import DeliverModal from '../Modal/DeliverModal';
import useAuthStore from './../../store/authStore';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { getStat } from '../../adapters/requests';
import axios from 'axios';

const SiteStat = (stats) => {
  
    const fetcher = (url) => axios.get(url).then((res) => res.data);

    const { data, error } = useSWR("https://api.23forobi.com/statistcis", fetcher);

    console.log(data)

  //STATES
  const [showDeliverModal, setShowDeliverModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [signInIsVisible, setSignInIsVisible] = useState(false);

  //TO ROUTE USER TO DASHBOARD IF LOGGED IN
  const router = useRouter();

  const { userProfile, removeUser } = useAuthStore();

  //Effect to hide scroll
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showDeliverModal ? 'hidden' : 'auto';
  }, [showDeliverModal]);

  console.log(stats);

  const { number_of_users, number_of_voters, number_of_villages } = stats.stats;
  return (
    <div className={styles.site_stat}>
      <div className="container">
        <h2>This is what our growth looks like</h2>
        <div className={styles.site_stat__count}>
          <div className={styles.users}>
            <h3>Total No of users</h3>
            <p className="text-[#018226]">{number_of_users}</p>
          </div>
          <div className={styles.voters}>
            <h3>Total No of voters</h3>
            <p className="text-[#CE9E56]">{number_of_voters}</p>
          </div>
          <div className={styles.villages}>
            <h3>Total No of villages</h3>
            <p className="text-[#CE5D56]">{number_of_villages}</p>
          </div>
        </div>
        <hr />
        <div className={styles.site_stat__below_hr}>
          <h3>Be a part of the movement today</h3>
          <p>
            You can become a part of the movement today in just a few simple
            steps, all you have to do is.
          </p>
          <ul>
            <div>
              <li>
                <p>Register with your email by clicking on the button below.</p>
              </li>
              <li>
                <p>Answer a few questions about yourself.</p>
              </li>
              <li>
                <p>
                  {' '}
                  Become our man on ground and help encourage the people in your
                  immediate vicinity to get their <span>PVC</span> and{' '}
                  <span>VOTE</span>.
                </p>
              </li>
              <li>
                <p>Add your village/town.</p>
              </li>
            </div>
            <div className="hr"></div>
            <div>
              <li>
                <p>Add a person(s) you know would vote for Peter Obi.</p>
              </li>
              <li>
                <p>Spread the word amongst your peers</p>
              </li>
              <li>
                <p>Welcome to the movement</p>
              </li>
            </div>
          </ul>
          <p>It’s not too late, join us today and:</p>
          {/* {!userProfile && ( */}
          <button
            className={`${styles.btn_vote} btn_dark`}
            onClick={() => {
              userProfile
                ? router.push('/dashboard')
                : setShowDeliverModal(true);
            }}
          >
            Deliver votes
          </button>
          {/* )} */}
        </div>
      </div>
      {/* MODAL */}
      {showDeliverModal && (
        <Modal
          show={showDeliverModal}
          onClose={() => setShowDeliverModal(false)}
          setShowModal={setShowDeliverModal}
          setSignInIsVisible={setSignInIsVisible}
          type="contribute"
          // width={width.container(matches)}
          width={signInIsVisible ? '50rem' : null}
        >
          <DeliverModal
            show={showDeliverModal}
            onClose={() => setShowDeliverModal(false)}
            setSignInIsVisible={setSignInIsVisible}
            signInIsVisible={signInIsVisible}
            setShowModal={setShowDeliverModal}
          />
        </Modal>
      )}
      {/* END MODAL */}
    </div>
  );
};

export default SiteStat;
