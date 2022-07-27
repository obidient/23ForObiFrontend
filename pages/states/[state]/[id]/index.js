import { useRouter } from 'next/router';
import Footer from '../../../../components/Footer/Index';
import Village from '../../../../components/Village/Index';
import Navbar from '../../../../components/NavBar/Index';
import Page from '../../../../components/Page';
import { getVillage, getVoters } from '../../../../adapters/requests';

const village = ({ village, votersData }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(village);
  console.log(votersData)
  const { name, progress_percentage, top_contributors } = village;
  

  return (
    <div>
      <Page
        title={
          village === 'undefinded' ? 'loading...' : `Village || ${village}`
        }
      >
        {/* <Navbar /> */}
        <Village
          village_id={id}
          village_name={name}
          progress_percentage={progress_percentage}
          votersData={votersData}
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
    const votersData = await getVoters(id);
    return {
      props: {
        village: village.data,
        votersData: votersData.data,
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
