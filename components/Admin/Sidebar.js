import styles from './Styles.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from '../../assets/23forobi.svg';
import dashIcon from '../../assets/dashIcon.png';
import profileIcon from '../../assets/profileIcon.png';
import noteIcon from '../../assets/noteIcon.png'
import settings from '../../assets/setting.png'


const Sidebar = () => {
  const router = useRouter();

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Link href="/admin/dashboard">
          <Image src={logo} />
        </Link>
      </div>
      <ul>
        <li>
          <Link href={'/admin/dashboard'}>
            <div className="flex items-center ml-10 text-3xl">
              <div className="px-2">
                <Image src={dashIcon} />
              </div>
              <a
                className={
                  router.pathname == '/admin/dashboard' ? styles.active : ''
                }
              >
                Dashboard
              </a>
            </div>
          </Link>
        </li>

        <li>
          <Link href={'/admin/users'}>
            <div className="flex items-center ml-10 text-3xl">
              <div className="px-2">
                <Image src={profileIcon} />
              </div>
              <a
                className={
                  router.pathname == '/admin/users' ? styles.active : ''
                }
              >
                Contributors
              </a>
            </div>
          </Link>
        </li>

        <li>
          <Link href={'/admin/villages'}>
            <div className="flex items-center ml-10 text-3xl">
              <div className="px-2">
                <Image src={noteIcon} />
              </div>
              <a
                className={
                  router.pathname == '/admin/villages' ? styles.active : ''
                }
              >
                Villages
              </a>
            </div>
          </Link>
        </li>

        <li>
          <Link href={'/admin/settings'}>
            <div className="flex items-center ml-10 text-3xl">
              <div className="px-2">
                <Image src={settings} />
              </div>
              <a
                className={
                  router.pathname == '/admin/settings' ? styles.active : ''
                }
              >
                Settings
              </a>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
