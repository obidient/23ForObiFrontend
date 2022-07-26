import { useRouter } from 'next/router';
import Breadcrumbs from '../../../components/misc/Breadcrumbs';
import State from '../../../components/State/Index';
import Page from './../../../components/Page';
import axios from 'axios';
import { getStateDetails, getCampaignImages, getVillages } from '../../../adapters/requests';

const state = ({ data, images, villages }) => {
  const router = useRouter();
  const { state } = router.query;

  // console.log(data);
  console.log(router.query);

  return (
    <div>
      <Page title={`State || ${state}`}>
        {/* <Navbar /> */}

        <State
          stateName={data.state_name}
          detail={data}
          images={images}
          villages={villages}
        />
        {/* <Footer /> */}
      </Page>
    </div>
  );
};

export const getServerSideProps = async ({ params, res }) => {
  try {
    const { state } = params;
    const { data } = await getStateDetails(state);
    const images = await getCampaignImages(state);

    const villages = await getVillages(state);

    return {
      props: {
        data,
        images: images.data,
        villages: villages.data,
      },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};

export default state;
