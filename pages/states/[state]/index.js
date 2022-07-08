import { useRouter } from 'next/router';
import Breadcrumbs from '../../../components/misc/Breadcrumbs';
import Footer from '../../../components/Footer/Index';
import Navbar from '../../../components/NavBar/Index';
import State from '../../../components/State/Index';
import Page from './../../../components/Page';

const state = () => {
  const router = useRouter();
  const { state } = router.query;

  return (
    <div>
      <Page title={`State || ${state}`}>
        {/* <Navbar /> */}

        <State stateName={state} />
        {/* <Footer /> */}
      </Page>
    </div>
  );
};

export default state;
