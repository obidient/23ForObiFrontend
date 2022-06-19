import styles from './Styles.module.scss';
import SGCard from './SGCard';

const SupportGroups = () => {
  return (
    <div className={styles.support}>
      <div className="container">
        <h2>Support groups</h2>
        <div className={styles.cards}>
          <SGCard groupname={'Lagos group'} nvotes={25} />
          <SGCard groupname={'Lagos group'} nvotes={25} />
          <SGCard groupname={'Lagos group'} nvotes={25} />
          <SGCard groupname={'Lagos group'} nvotes={25} />
          <SGCard groupname={'Lagos group'} nvotes={25} />
          <SGCard groupname={'Lagos group'} nvotes={25} />
          <SGCard groupname={'Lagos group'} nvotes={25} />
          <SGCard groupname={'Lagos group'} nvotes={25} />
          <SGCard groupname={'Lagos group'} nvotes={25} />
          <SGCard groupname={'Lagos group'} nvotes={25} />
          <SGCard groupname={'Lagos group'} nvotes={25} />
          <SGCard groupname={'Lagos group'} nvotes={25} />
        </div>
        <div className={styles.btn_div}>
          <button className={styles.btn}>Add a group</button>
        </div>
      </div>
    </div>
  );
};

export default SupportGroups;
