// import styles from '../styles/Home.module.scss';
// import Homepage from './';homepage
import Homepage from './states';
import React from 'react';

import {
  getStates,
  getSupportGroups,
  getOverallprogress,
} from './../adapters/requests/index';

export default function Home({
  total_number_of_voters,
  progress,
  initailData,
}) {
  return (
    <div>
      <Homepage
        data={initailData}
        progress={progress}
        total_number_of_voters={total_number_of_voters}
      />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const supportGroups = await getSupportGroups();
    const states = await getStates();
    const progress = await getOverallprogress();
    return {
      props: {
        initailData: supportGroups?.data,
        states: states?.data,
        progress: progress?.data?.progress_percentage,
        total_number_of_voters: progress?.data?.total_number_of_voters,
      },
    };
  } catch (error) {
    // console.log(error);
    return {
      props: {
        states: [],
      },
    };
  }
  {
  }
}
