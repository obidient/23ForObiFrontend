import styles from './Styles.module.scss';
import StatCard from './StatCard';
import UserTable from './UserTable';

const AdminDashboard = () => {
  return (
    <div className={styles.admin_dashboard}>
      <div className={styles.top_card}>
        <StatCard title="Users" number={10} />
        <StatCard title="States" number={36} />
        <StatCard title="Villages" number={1000} />
      </div>
      <div className={styles.user_table}>
        <h2>Recent User</h2>
        <UserTable />
      </div>
    </div>
  );
};

export default AdminDashboard;
