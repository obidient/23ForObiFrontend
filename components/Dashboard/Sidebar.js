import styles from './Styles.module.scss';
import Image from 'next/image';
import epic_champ from '../../assets/epic_champ.png';
import level_1 from '../../assets/level-1.svg';
import level_2 from '../../assets/level-2.svg';
import level_3 from '../../assets/level-3.svg';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Loader from '../Loader';
import axios from 'axios';
import useAuthStore from '../../store/authStore';

const Sidebar = () => {
  const { accessToken } = useAuthStore();
  const [voters, setVoters] = useState(0);
  const [villaId, setVillaId] = useState(null);

  useEffect(() => {
    const fetchUserVilla = async () => {
      await axios
        .get('https://api.23forobi.com/user-villages', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            // console.log(res.data[0].village.id);
            setVillaId(res.data[0].village.id);
          } else {
            return;
          }
        });
    };
    fetchUserVilla();
  }, []);

  useEffect(() => {
    const fetchVillaById = async () => {
      await axios
        .get(`https://api.23forobi.com/voters/${villaId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setVoters(res.data);
        });
    };
    fetchVillaById();
  }, [villaId]);

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__achievements}>
        <h2>Achievements</h2>
        <hr />

        {voters && voters.length > 0 ? (
          <>
            <div className={styles.achievements_images}>
              {voters.length >= 3 ? (
                <>
                  <div>
                    <Image src={level_1} alt="level" />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <Image src={level_1} style={{ opacity: 0.4 }} alt="level" />
                  </div>
                </>
              )}
              {voters.length >= 6 ? (
                <>
                  <div>
                    <Image src={level_2} alt="level" />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <Image src={level_2} style={{ opacity: 0.4 }} alt="level" />
                  </div>
                </>
              )}
              {voters.length >= 9 ? (
                <>
                  <div>
                    <Image src={level_3} alt="level" />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <Image src={level_3} style={{ opacity: 0.4 }} alt="level" />
                  </div>
                </>
              )}
            </div>
          </>
        ) : (
          <div className="flex items-center">
            <p className="text-[#2F3733]">No Achievements yet!</p>
          </div>
        )}
        <hr />
      </div>
      <h2>Learn how to deliver votes</h2>
      <hr />
      <p>These are instructions on how to deliver votes</p>
      <div className={styles.instruction_cards}>
        <div className={styles.card}>
          <div className={styles.num}>
            <p>01</p>
          </div>
          <div>
            <h3>Get your PVC</h3>
            <p>
              Get your PVC if you haven’t, this is the first step to start the
              change we need, you can get your PVC here{' '}
              <span className={styles.inec}>
                <a href="https://cvr.inecnigeria.org/">
                  https://cvr.inecnigeria.org/
                </a>
              </span>
            </p>
          </div>
        </div>
        <hr />
        <div className={styles.card}>
          <div className={styles.num}>
            <p>02</p>
          </div>
          <div>
            <h3>Organise meetings in your community</h3>
            <p>
              Organise a meet-up within your community and encourage the people
              in your community to vote for the right reasons.
            </p>
          </div>
        </div>
        <hr />
        <div className={styles.card}>
          <div className={styles.num}>
            <p>03</p>
          </div>
          <div>
            <h3>Get people to vote</h3>
            <p>
              Educate people on the reason why their vote counts and how they
              can go about mobilising others to join in to vote for Peter Obi.
            </p>
          </div>
        </div>
        <hr />
        <div className={styles.card}>
          <div className={styles.num}>
            <p>04</p>
          </div>
          <div>
            <h3>Mobilise others to join in</h3>
            <p>
              Get people around you to join in the campaign, share fliers and
              information on WhatsApp and other groups they are involved in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
