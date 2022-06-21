import { useRouter } from 'next/router';
import Footer from '../../../../components/Footer/Index';
import Navbar from '../../../../components/Navbar/Index';
import Village from '../../../../components/Village/Index';

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
