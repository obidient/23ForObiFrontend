import { useRouter } from 'next/router';
import Footer from '../../../../components/Footer/Index';
import Village from '../../../../components/Village/Index';
import Navbar from './../../../../components/NavBar/Index';
import Page from './../../../../components/Page';

const village = () => {
  const router = useRouter();
  const { village } = router.query;
  const villageTitle = village?.toLowerCase();

  return (
    <div>
      <Page
        title={
          village === 'undefinded' ? 'loading...' : `State || ${villageTitle}`
        }
      >
        {/* <Navbar /> */}
        <Village id={village} />
        {/* <Footer /> */}
      </Page>
    </div>
  );
};

export default village;
