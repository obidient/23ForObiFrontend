import styles from '../admin.module.scss';
import Image from 'next/image';
import AdminPage from '../../../components/Admin/AdminPage';

import filterIcon from '../../../assets/filter.svg';
import circleIcon from '../../../assets/circle_add.svg';
import VillageList from '../../../components/Admin/VillageList';

const villages = () => (
  <AdminPage>
    <div className="flex items-center justify-between mx-4 my-8">
      <div className="flex items-center justify-center">
        <button className='flex items-center justify-around border w-[100px] p-1 text-[#979797]'>
          <span className='flex items-center justify-center px-2'>
            <Image src={filterIcon} />
          </span>
          Filter
        </button>
      </div>
      <div>
        <button className="bg-[#018226] w-[197px] h-[44px] rounded-full text-white flex items-center justify-center">
          <span className='flex items-center justify-center px-2'>
            <Image src={circleIcon} />
          </span>
          Add a new Village
        </button>
      </div>
    </div>
    <div className='my-6 bg-white border border-[#FFFFFF] rounded-xl m-10 h-[723px]'>

    </div>
    <div className='my-6 m-10 bg-white border border-[#FFFFFF] rounded-xl h-[61px] flex items-center justify-between'>
        <div className='m-5 text-[#2F3733] text-2xl'>
            <h3>Showing 1-10 of 20</h3>
        </div>
        <div className='flex items-center justify-around m-5 text-[#979797]'>
            <button className='w-[72px] h-[41px] border border-[#979797] rounded-full mx-2 hover:bg-[#018226] hover:text-white'>Last</button>
            <button className='w-[72px] h-[41px] border border-[#979797] rounded-full mx-2 hover:bg-[#018226] hover:text-white'>Prev</button>
            <button className='w-[41px] h-[41px] border border-[#979797] rounded-full mx-2 hover:bg-[#018226] hover:text-white bg-[#018226] text-white'>1</button>
            <button className='w-[41px] h-[41px] border border-[#979797] rounded-full mx-2 hover:bg-[#018226] hover:text-white'>2</button>
            <button className='w-[41px] h-[41px] border border-[#979797] rounded-full mx-2 hover:bg-[#018226] hover:text-white'>3</button>
            <button className='w-[72px] h-[41px] border border-[#979797] rounded-full mx-2 hover:bg-[#018226] hover:text-white'>Next</button>
            <button className='w-[72px] h-[41px] border border-[#979797] rounded-full mx-2 hover:bg-[#018226] hover:text-white'>Last</button>
        </div>
    </div>
  </AdminPage>
);

export default villages;
