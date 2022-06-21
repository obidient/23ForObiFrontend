import { useRouter } from 'next/router';
import Footer from '../../../components/Footer/Index';
import Navbar from '../../../components/Navbar/Index';
import State from '../../../components/State/Index';


const state = () => {
  const router = useRouter();
  const { state } = router.query;

  return (
    <div>
      <Navbar />
      <State id={state} />
      <Footer />
    </div>
  );
};

export default state;
