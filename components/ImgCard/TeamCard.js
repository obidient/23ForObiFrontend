import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Styles.module.scss';

import LinkedInLogo from '../../assets/LinkedIn.png';
const TeamCard = ({ src, linkedIn, name, position, description }) => {
  return (
    <div className="flex flex-col items-center justify-center my-7">
      <div className="relative p-2">
        <Image src={src} width="130px" height="130px" alt={name} />
        <div className={styles.logo}>
          <Link href={linkedIn ? linkedIn : 'https://linkedin.com'}>
            <Image
              src={LinkedInLogo}
              width="32px"
              height="32px"
              alt="linkedin"
            />
          </Link>
        </div>
      </div>
      <h2 className="font-bold text-3xl my-2">{name ? name : 'Member Name'}</h2>
      <h3 className="font-normal text-2xl mb-5">
        {position ? position : 'Position'}
      </h3>
      <p className="font-normal text-xl">
        {description ? description : 'Short Job Description'}
      </p>
    </div>
  );
};

export default TeamCard;
