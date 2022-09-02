// import styles from '../styles/Home.module.scss';
// import Homepage from './';homepage
import Homepage from './states';
import React from 'react';

import {
  getStates,
  getSupportGroups,
  getOverallprogress,
  getStat
} from './../adapters/requests/index';

export default function Home({
  total_number_of_voters,
  progress,
  initailData,
  stats
}) {

  // console.log(initailData);
  return (
    <div>
      <Homepage
        data={initailData}
        stats={stats}
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
    const stats = await getStat();
    return {
      props: {
        initailData: supportGroups?.data,
        states: states?.data,
        progress: progress?.data?.progress_percentage,
        total_number_of_voters: progress?.data?.total_number_of_voters,
        stats: stats?.data
      },
    };
  } catch (error) {
    // console.log(error);
    return {
      props: {
        states: [],
        stats: []
      },
    };
  }
  {
  }
}
