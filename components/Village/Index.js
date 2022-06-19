import Progress from '../misc/Progress';
import styles from './Styles.module.scss';
import Contributor from './Contributor';
import Image from 'next/image';
import check from '../../assets/check.png';

/* Images Import */
import village_img_1 from '../../assets/village_img_1.png';
import village_img_2 from '../../assets/village_img_2.png';
import village_img_3 from '../../assets/village_img_3.png';
import village_img_4 from '../../assets/village_img_4.png';
import village_img_5 from '../../assets/village_img_5.png';

const Village = () => {
  return (
    <div className={styles.state}>
      <div className="container">
        <div className={styles.state_heading}>
          <div className={styles.state_heading__title}>
            <h1>Eziama village</h1>
            <div className={styles.title_btn}>
              <button>Contribute here</button>
            </div>
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
