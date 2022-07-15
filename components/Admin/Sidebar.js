import styles from './Styles.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className={styles.sidebar}>
      <ul>
        {/* <Link href="/admin">
          <li>Dashboard</li>
        </Link> */}
        <Link href="/admin">
          <li>
            <a className={router.pathname == '/admin' ? styles.active : ''}>
              Dashboard
            </a>
          </li>
        </Link>
        <Link href="/admin/users">
          <li>
            <a className={router.pathname == '/admin' ? styles.active : ''}>
              Users
            </a>
          </li>
        </Link>
        <Link href="/admin/villages">
          <li>
            <a className={router.pathname == '/admin' ? styles.active : ''}>
              Villages
            </a>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
