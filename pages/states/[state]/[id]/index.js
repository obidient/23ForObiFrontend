import { useRouter } from 'next/router';
import Footer from '../../../../components/Footer/Index';
import Village from '../../../../components/Village/Index';
import Navbar from '../../../../components/NavBar/Index';
import Page from '../../../../components/Page';
import { getVillage } from '../../../../adapters/requests';

const village = ({ village }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(village);
  const { name, progress_percentage, voters, top_contributors } = village;

  return (
    <div>
      <Page
        title={
          village === 'undefinded' ? 'loading...' : `Village || ${name}`
        }
      >
        {/* <Navbar /> */}
        <Village
          village_id={id}
          village_name={name}
          progress_percentage={progress_percentage}
          voters={voters}
        />
        {/* <Footer /> */}
      </Page>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  try {
    const { id } = params;
    const village = await getVillage(id);
    // console.log(village.data)
    return {
      props: {
        village: village.data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        village: {},
      },
    };
  }
};
export default village;
