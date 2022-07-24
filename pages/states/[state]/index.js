import { useRouter } from 'next/router';
import Breadcrumbs from '../../../components/misc/Breadcrumbs';
import Footer from '../../../components/Footer/Index';
import Navbar from '../../../components/NavBar/Index';
import State from '../../../components/State/Index';
import Page from './../../../components/Page';
import axios from 'axios';

const state = ({ data, images }) => {
  const router = useRouter();
  const { state } = router.query;

  // console.log(data);
  // console.log(images);

  return (
    <div>
      <Page title={`State || ${state}`}>
        {/* <Navbar /> */}

        <State stateName={data.state_name} detail={data} images={images} />
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
    const images = await axios.get(
      `https://api.23forobi.com/campaign-images/${state}`
    );

    return {
      props: { data, images: images.data },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};

export default state;
