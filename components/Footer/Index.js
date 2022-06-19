import Image from 'next/image';
import styles from './Styles.module.scss';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footer_container}>
          <div className={styles.footer__logo}>
            <Image src={logo} />
          </div>
          <div className={styles.footer__details}>
            <h2>Be a part of the movement</h2>
            <p>
              It matters today and it will even matter more tomorrow, let’s get
              back our Nigeria
            </p>
            <div className={styles.btn_div}>
              <button>Deliver votes</button>
            </div>
          </div>
          <div>{/* <p>Game</p> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
