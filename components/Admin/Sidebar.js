import styles from './Styles.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from '../../assets/23forobi.svg';
import dashIcon from '../../assets/dashIcon.png';
import profileIcon from '../../assets/profileIcon.png';
import noteIcon from '../../assets/noteIcon.png';
import settings from '../../assets/setting.png';
import map from '../../assets/Map.png';
import logoutIcon from '../../assets/log-out.svg'
import { useState } from 'react';

const Sidebar = () => {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(true);
  // const normalLink = ``;
  const activeStyle =
    'bg-[#018226] px-10 py-3 rounded-full flex items-center gap-2 cursor-pointer text-[#F51997]';
  const inactiveStyle =
    'hover:bg-[#018226] px-10 py-3 rounded-full flex items-center gap-2  cursor-pointer text-black';

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Link href="/admin/dashboard">
          <Image src={logo} />
        </Link>
      </div>
      <div className="my-3 w-[200px] text-justify">
        <Link href={'/admin/dashboard'}>
          <div
            className={
              router.pathname == '/admin/dashboard'
                ? activeStyle
                : inactiveStyle
            }
          >
            <span className="font-bold text-2xl xl:text-md">
              <Image src={dashIcon} />
            </span>
            <span className="text-3xl font-medium text-white  capitalize">
              Dashboard
            </span>
          </div>
        </Link>
      </div>
      <div className="my-3  w-[200px] text-justify">
        <Link href={'/admin/users'}>
          <div
            className={
              router.pathname == '/admin/users' ? activeStyle : inactiveStyle
            }
          >
            <span className="font-bold text-2xl xl:text-md">
              <Image src={profileIcon} />
            </span>
            <span className="text-3xl font-medium text-white capitalize">
              Contributors
            </span>
          </div>
        </Link>
      </div>
      <div className="my-3  w-[200px] text-justify">
        <Link href={'/admin/villages'}>
          <div
            className={
              router.pathname == '/admin/villages' ? activeStyle : inactiveStyle
            }
          >
            <span className="font-bold text-2xl xl:text-md">
              <Image src={map} />
            </span>
            <span className="text-3xl font-medium text-white capitalize">
              Villages
            </span>
          </div>
        </Link>
      </div>
      <div className="my-3 w-[200px] text-justify">
        <Link href={'/admin/states'}>
          <div
            className={
              router.pathname == '/admin/states' ? activeStyle : inactiveStyle
            }
          >
            <span className="font-bold text-2xl xl:text-md">
              <Image src={noteIcon} />
            </span>
            <span className="text-3xl font-medium text-white capitalize">
              States
            </span>
          </div>
        </Link>
      </div>
      <div className="my-3 w-[200px] text-justify">
        <Link href={'/admin/settings'}>
          <div
            className={
              router.pathname == '/admin/settings' ? activeStyle : inactiveStyle
            }
          >
            <span className="font-bold text-2xl xl:text-md">
              <Image src={settings} />
            </span>
            <span className="text-3xl font-medium text-white capitalize">
              Settings
            </span>
          </div>
        </Link>
      </div>
      <div className='w-[200px] text-justify absolute bottom-0'>
        <button className={inactiveStyle}>
          <span className="flex items-center justify-center font-bold text-2xl xl:text-md">
            <Image src={logoutIcon} />
          </span>
          <span className="text-3xl font-medium text-white capitalize">
              log-out
            </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
