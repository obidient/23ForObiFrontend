import styles from './Styles.module.scss';

const SGCard = ({ groupname, nvotes }) => {
  return (
    <div className={styles.sgcard}>
      <div className={styles.group_name}>
        <p>Group name</p>
        <h5>{groupname}</h5>
      </div>
      <div className={styles.number_votes}>
        <p>Number of votes brought in</p>
        <div className={styles.nvotes}>
          <h5>{nvotes}</h5>
        </div>
      </div>
    </div>
  );
};

export default SGCard;
