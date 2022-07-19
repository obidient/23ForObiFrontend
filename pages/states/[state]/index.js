import { useRouter } from 'next/router';
import Breadcrumbs from '../../../components/misc/Breadcrumbs';
import Footer from '../../../components/Footer/Index';
import Navbar from '../../../components/NavBar/Index';
import State from '../../../components/State/Index';
import Page from './../../../components/Page';

const state = ({ data }) => {
  const router = useRouter();
  const { state } = router.query;

  console.log(data)

  return (
    <div>
      <Page title={`State || ${state}`}>
        {/* <Navbar /> */}

        <State stateName={state} detail={data} />
        {/* <Footer /> */}
      </Page>
    </div>
  );
};

export const getServerSideProps = async ({ params, res }) => {
  try {
    const { state } = params;
    const { data } = await axios.get(
      `https://api.23forobi.com/state-details/${state}`
    );

    return {
      props: { data },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};

export default state;
