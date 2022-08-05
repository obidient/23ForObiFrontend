import { useRouter } from 'next/router';
import Footer from '../../../../components/Footer/Index';
import Village from '../../../../components/Village/Index';
import Navbar from '../../../../components/NavBar/Index';
import Page from '../../../../components/Page';
import { getVillage, getVoters } from '../../../../adapters/requests';

const village = ({ village, votersData }) => {
  const router = useRouter();
  const { id } = router.query;
  const { name, progress_percentage, voters, top_contributors, state } = village;
  
  // console.log(village);

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
          villageState={state?.state_name}
          state_id={state?.id}
          votersData={votersData}
        />
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
    // console.log(error);
    return {
      props: {
        village: {},
      },
    };
  }
};
export default village;
