import styles_login from '../../pages/pagestyles/home.module.scss';
import styles from './Styles.module.scss';
import GoogleAuth from './../../utils/googleLogin';

//images
import Image from 'next/image';
import google from '../../assets/google.png';
import facebook from '../../assets/facebook.png';
import apple from '../../assets/apple.png';
import twitter from '../../assets/twitter.png';

const LoginModal = ({ setShowModal, setSignInIsVisible, onClose, type }) => {
  return (
    <div>
      <div className={styles_login.login_modal}>
        <div className={`${styles.deliver_modal__heading} modal_heading`}>
          <h2>
            Welcome to <br /> <span>Peter Obi Campaign</span>
          </h2>
          <button
            className={`closeBtn`}
            onClick={ () => {
              setShowModal(false);
              setSignInIsVisible(false);
            }}
          >
            &times;
          </button>
        </div>
        <div className={styles_login.login_modal__body}>
          <p>Sign-up with social media</p>
          <div className={styles_login.login_modal__body__container}>
            <div
              className={styles_login.login_modal__body__container__content2}
            >
              <div
                onClick={() => console.log('clicked')}
                className={
                  styles_login.login_modal__body__container__content__para
                }
              >
                <GoogleAuth />
              </div>
            </div>

            <div className={styles_login.login_modal__body__container__content}>
              <div
                style={{ display: 'grid', placeItems: 'end' }}
                className={
                  styles_login.login_modal__body__container__content__image
                }
              >
                <Image src={facebook} alt="google icon" />
              </div>
              <div
                className={
                  styles_login.login_modal__body__container__content__para
                }
              >
                <p>Join with Facebook</p>
              </div>
            </div>

            <div className={styles_login.login_modal__body__container__content}>
              <div
                style={{ display: 'grid', placeItems: 'end' }}
                className={
                  styles_login.login_modal__body__container__content__image
                }
              >
                <Image src={twitter} alt="google icon" />
              </div>
              <div
                className={
                  styles_login.login_modal__body__container__content__para
                }
              >
                <p>Join with Twitter</p>
              </div>
            </div>

            <div className={styles_login.login_modal__body__container__content}>
              <div
                style={{ display: 'grid', placeItems: 'end' }}
                className={
                  styles_login.login_modal__body__container__content__image
                }
              >
                <Image src={apple} alt="google icon" />
              </div>
              <div
                className={
                  styles_login.login_modal__body__container__content__para
                }
              >
                <p>Join with Apple</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal