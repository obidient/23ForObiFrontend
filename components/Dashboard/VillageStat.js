import styles from './Styles.module.scss'

const VillageStat = () => {
  return (
    <div className={styles.village_stat}>
      <div className={styles.stat_one}>
        <div className={styles.stat_one__num_votes}>
          <p>Number of voters</p>
          <h3>25</h3>
        </div>
      </div>
      <div className={styles.stat_two}>
        <div className={styles.stat_two__rewards}>
          <p>Rewards</p>
          <h3>05</h3>
        </div>
        <div className={styles.stat_two__num_villages}>
          <p>Number of Villages</p>
          <h3>02</h3>
        </div>
      </div>
    </div>
  );
}

export default VillageStat