import styles from './Styles.module.scss';

const StatCard = ({ title, number }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <h3>{number}</h3>
    </div>
  );
};

export default StatCard;
