import Image from 'next/image';
import styles from './Styles.module.scss';

const StatCard = ({ title, number, img, details, percent }) => {
  return (
    <div className={styles.card}>
      <div className="w-[44px] h-[40px] flex items-center justify-center">
        <Image src={img} width={36} height={36} />
      </div>
      <div className="my-3">
        <h2>{title}</h2>
        <p className="text-[12px] text-[#979797]">{details}</p>
      </div>
      <div className='flex items-center pb-10'>
        <h3>{number}</h3>
        <div className='mx-8'>
          <small className='px-2 text-[13px]'>{percent}{' '}%</small>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
