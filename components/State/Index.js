import Image from 'next/image';
import styles from './Styles.module.scss';
import search from '../../assets/search.png';

//Images
import pdp from '../../assets/pdp.png';
import ikpeazu from '../../assets/ikpeazu.png';
import SingleStateProgress from './../misc/SingleStateProgress';
import Card from '../Card/Card';

import sm_image_1 from '../../assets/sm_image_1.png';
import sm_image_2 from '../../assets/sm_image_2.png';
import sm_image_3 from '../../assets/sm_image_3.png';
import sm_image_4 from '../../assets/sm_image_4.png';
import sm_image_5 from '../../assets/sm_image_5.png';
import sm_image_6 from '../../assets/sm_image_6.png';
import sm_image_7 from '../../assets/sm_image_7.png';
import sm_image_8 from '../../assets/sm_image_8.png';
import sm_image_9 from '../../assets/sm_image_9.png';
import sm_image_10 from '../../assets/sm_image_10.png';
import sm_image_11 from '../../assets/sm_image_11.png';
import sm_image_12 from '../../assets/sm_image_12.png';
import sm_image_13 from '../../assets/sm_image_13.png';
import sm_image_14 from '../../assets/sm_image_14.png';
import sm_image_15 from '../../assets/sm_image_15.png';
import sm_image_16 from '../../assets/sm_image_16.png';

const State = ({ id }) => {
  return (
    <div className={styles.state}>
      <div className="container">
        <div className={styles.state_heading}>
          <div className={styles.state_heading__title}>
            <h1>Abia State Villages</h1>
            <div className={styles.vill_control}>
              <div className={styles.vill_control__text}>
                <h5>Villages in control</h5>
                <p>10% control</p>
              </div>
              <div className={styles.vill_control__progress}>
                <SingleStateProgress done={10} />
              </div>
            </div>
          </div>
          <div className={styles.state_heading__govt}>
            <div className={styles.govt_box}>
              <div className={styles.current_gov}>
                <p>Current governor</p>
                <div className={styles.current_gov__details}>
                  <Image src={ikpeazu} />
                  <div className={styles.text}>
                    <h5>Okezie Ikpeazu</h5>
                    <p>Since: May 29, 2015</p>
                    <p>Terms: 2(Two)</p>
                  </div>
                </div>
              </div>
              <div className={styles.hr}></div>
              <div className={styles.vote_dir}>
                <p>Last vote direction</p>
                <div className={styles.vote_dir__details}>
                  <Image src={pdp} />
                  <div className={styles.text}>
                    <h5>PDP</h5>
                    <p>People Democratic Party</p>
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
              <input type="text" placeholder="Search state here" />
              <div className={styles.search_icon}>
                <Image src={search} alt="search" />
              </div>
            </div>
          </div>
          <div className={styles.state_body_cards}>
            <Card
              type="contributor"
              progress={10}
              voteControl={20}
              state="Ezenwa village"
              slug="/Ezenwa"
            />
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
          </div>
        </div>
        <div className={styles.state_vilage_not_controlled}>
          <div className={styles.state_vilage_not_controlled__head}>
            <h5>Villages not in control</h5>
            <div className={styles.head_input}>
              <input type="text" placeholder="Search state here" />
              <div className={styles.search_icon}>
                <Image src={search} alt="search" />
              </div>
            </div>
          </div>
          <div className={styles.state_body_cards}>
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
            <Card type="contributor" />
          </div>
        </div>
        <div className={styles.btn_missing}>
          <button>Add a missing village</button>
        </div>

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
              <button>Contrubute images</button>
            </div>
          </div>
          <div className={styles.state_body_cards}>
            <Image src={sm_image_1} />
            <Image src={sm_image_2} />
            <Image src={sm_image_3} />
            <Image src={sm_image_4} />
            <Image src={sm_image_5} />
            <Image src={sm_image_6} />
            <Image src={sm_image_7} />
            <Image src={sm_image_8} />
            <Image src={sm_image_9} />
            <Image src={sm_image_10} />
            <Image src={sm_image_11} />
            <Image src={sm_image_12} />
            <Image src={sm_image_13} />
            <Image src={sm_image_14} />
            <Image src={sm_image_15} />
            <Image src={sm_image_16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default State;
