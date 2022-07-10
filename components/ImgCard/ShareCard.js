import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
} from 'react-share';
import styles from './Styles.module.scss';

const ShareCard = ({ image, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <FacebookShareButton url={`https://facebook.com${image}`} title={title}>
          <FacebookIcon size={24} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={`https://twitter.com${image}`} title={title}>
          <TwitterIcon size={24} round={true} />
        </TwitterShareButton>
        <WhatsappShareButton url={`https://whatsapp.com${image}`} title={title}>
          <WhatsappIcon size={24} round={true} />
        </WhatsappShareButton>
        <TelegramShareButton url={`https://telegram.com${image}`} title={title}>
          <TelegramIcon size={24} round={true} />
        </TelegramShareButton>
      </div>
    </div>
  );
};

export default ShareCard;
