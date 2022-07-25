// import styles from '../styles/Home.module.scss';
// import Homepage from './';homepage
import Homepage from './states';
import axios from 'axios';
import StateContext from '../Context/StateContext';
import React from 'react';
import GoogleLogin from 'react-google-login';
import { useScript } from '../hooks/useScript';
import { useState, useRef } from 'react';

export default function Home(props) {
  // console.log(props);
  const googlebuttonref = useRef();
  const [token, setToken] = useState(false);
  console.log(token);
  const onGoogleSignIn = (user) => {
    let token = user.credential;
    // let payload = jwt_deocde(userCred);
    // console.log(payload);
    setToken(token);

    //Api call
    const config = {
      headers: {
        accept: 'application/json',
        // ' www-Authenticate': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };

    const callAPI = async () => {
      try {
        const res = await axios
          .post(`https://api.23forobi.com/google/token?token=${token}`, config)
          .then((res) => {
            console.log(res);
          });

        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    callAPI();
  };

  useScript('https://accounts.google.com/gsi/client', () => {
    window.google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID, // here's your Google ID
      callback: onGoogleSignIn,
      auto_select: false,
    });

    window.google.accounts.id.renderButton(googlebuttonref.current, {
      size: 'medium',
    });
  });

  return (
    <div>
      {!token && <div ref={googlebuttonref} className="opacity: 0"></div>}
      <Homepage data={props.initailData} progress={props.progress} />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const supportGroups = await axios.get(
      'https://api.23forobi.com/support-group/'
    );
    const states = await axios.get('https://api.23forobi.com/states/');
    const progress = await axios.get(
      'https://api.23forobi.com/overall-progress'
    );
    return {
      props: {
        initailData: supportGroups?.data,
        states: states.data,
        progress: progress.data.progress_percentage,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        states: [],
      },
    };
  }
  {
    /**
try {
    // const { data } = await axios.get('https://api.23forobi.com/support-group/');
    // const states = await axios.get('https://api.23forobi.com/states/');
    // const allStates = JSON.parse(JSON.stringify(states))

    const supportGroupsReq = axios({
      method: 'GET',
      url: 'https://api.23forobi.com/support-group/',
      headers: { cookie: ctx.req.headers.cookie },
    });
    const statesReq = axios({
      method: 'GET',
      url: 'https://api.23forobi.com/states/',
      headers: { cookie: ctx.req.headers.cookie },
    });
    const [support, states] = await Promise.all([supportGroupsReq, statesReq]);
    return {
      props: {
        // initialData: states,
        initialData: support.data,
        states: states.data,
      },
    };
  } catch (error) {
    // res.statusCode = 404;
    console.log(error);
    return {
      props: {},
    };
  }

*/
  }
}
