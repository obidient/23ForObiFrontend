import { useRouter } from 'next/router';
import Footer from '../../../../components/Footer/Index';
import Village from '../../../../components/Village/Index';
import Navbar from './../../../../components/NavBar/Index';

const village = () => {
  const router = useRouter();
  const { state } = router.query;
  return (
    <div>
      <Navbar />
      <Village id={state} />
      <Footer />
    </div>
  );
};

export default village;
