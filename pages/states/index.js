import Image from 'next/image';
import styles from '../pagestyles/home.module.scss';
import labourparty from '../../assets/labourparty.png';
import ProgressBar from '../../components/misc/Progress';
import States from '../../components/States/Index';
import SupportGroups from '../../components/SupportGroups/Index';
import { useRouter } from 'next/router';
import Link from 'next/link';
import NavBar from '../../components/NavBar/Index';
import Footer from '../../components/Footer/Index';
import { FetchEvent } from 'next/dist/server/web/spec-compliant/fetch-event';
import { countryContext } from './../../Context/countryContext';
import { useContext } from 'react';
import Page from './../../components/Page';
import SGCard from '../../components/SupportGroups/SGCard';

const homepage = (props) => {
  const done = 13;

  const { data } = useContext(countryContext);
  // console.log('home', data);
  const router = useRouter();
  const query = router.query;

  return (
    <Page
      description="deliver 23 votes per village for peter obi"
      title="Homepage"
    >
      <div className={styles.homepage}>
        <div className={styles.hero}>
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
                <button className={`${styles.btn_vote} btn_dark`}>
                  Yes, I can
                </button>
              </div>
              <div className={styles.hero__img}>
                <Image src={labourparty} />
              </div>
            </div>
            <div className={styles.hero__bottom}>
              <h5>OUR PROGRESS SO FAR</h5>
              <ProgressBar
                done={done}
                bgColor="#E4FFEC"
                pgColor="rgba(1, 130, 38, 1)"
                type="state"
              />
              <div className={styles.percent}>
                <h5>{done}%</h5>
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
                        groupname={item.name && 'Lagos Group'}
                        nvotes={item.votes_delivered}
                      />
                    ))
                  ) : (
                    <h2>No Support Group Found</h2>
                  )}
                </div>
                <div className={styles.btn_div}>
                  <button className={`${styles.btn} btn_dark`}>
                    Add a group
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </Page>
  );
};

export default homepage;
