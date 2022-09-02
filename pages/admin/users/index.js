import styles from '../admin.module.scss';
import Sidebar from '../../../components/Admin/Sidebar';
import AdminNav from '../../../components/Admin/AdminNav';
import UserList from '../../../components/Admin/UsersList';
import AdminPage from '../../../components/Admin/AdminPage';
import { Contributors } from '../../../components/Admin/adminContributors/Contributors';
import ProtectedAdmin from './../../../components/misc/ProtectedAdmin';

const users = () => (
  <Contributors />
);

export default ProtectedAdmin(users);
