import styles from './Styles.module.scss';
import Image from 'next/image';
import epic_champ from '../../assets/epic_champ.png';
import level1 from '../../assets/level_1.png';
import level2 from '../../assets/level_2.png';
import level3 from '../../assets/level_3.png';
import Link from 'next/link';

const Sidebar = ({voters}) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__achievements}>
        <h2>Achievements</h2>
        <hr />
        {voters && voters.length > 0 ? (
          <>
            <div className={styles.achievements_images}>
          <div>
            <Image src={level1} />
          </div>
          <div>
            <Image src={level2} />
          </div>
          <div>
            <Image src={level3} />
          </div>
        </div>
        <div className={styles.link}>
          <Link href="">View all</Link>
        </div>
          </>
        ): (
          <div className='flex items-center'>
            <h2 className='text-[#2F3733]'>No Achievements yet!</h2>
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
