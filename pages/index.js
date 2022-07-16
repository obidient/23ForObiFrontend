// import styles from '../styles/Home.module.scss';
// import Homepage from './';homepage
import Homepage from './states';
import axios from 'axios';
import StateContext from '../Context/StateContext';
import React from 'react';

export default function Home({}) {
  return (
    <div>
      <Homepage />
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get('https://api.23forobi.com/support-group/');
  const {
    data: { states },
  } = await axios.get('https://api.23forobi.com/ng/states/');

  return {
    props: {
      initialData: data,
      states,
    },
  };
}
