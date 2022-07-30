import styles from './Styles.module.scss';
import StatCard from './StatCard';
import UserTable from './UserTable';
import avatar from '../../assets/avatar.png';
import dashCont from '../../assets/dashCont.png';
import dashVill from '../../assets/dashVill.png';
import dashVisits from '../../assets/dashVisits.png';
import dashVotes from '../../assets/dashVotes.png';

const AdminDashboard = () => {
  return (
    <div className={styles.admin_dashboard}>
      <div className={styles.top_card}>
        <StatCard
          img={dashCont}
          details="These are the list of people who have registered on the platform."
          title="Total number of contributors"
          number={500}
          percent="-2.5"
        />
        <StatCard
          img={dashVill}
          details="These are the list villages that are registered on the platform."
          title="Total number of villages"
          number={10000}
          percent='+10.5'
        />
        <StatCard
          img={dashVisits}
          details="These are the total website visits by the contributors on the platform."
          title="Total website visits"
          number={10000}
          percent='+10.5'
        />
        <StatCard
          img={dashVotes}
          details="Total number of votes guaranteed by contributors on the platform"
          title="Total number of guaranteed votes"
          number={501251}
          percent='-10.5'
        />
      </div>
      <div className='border border-[#F1F1F1] h-[671px] w-full rounded-xl bg-white'>
       <div className='flex py-9 items-center justify-between pr-6 pl-12'>
        <h2 className='text-[#2F3733] text-[16px]'>Recent activity</h2>
        <select>
          <option>This week</option>
        </select>
       </div>
       <div>
        Graph
       </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
