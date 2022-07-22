// import styles from '../styles/Home.module.scss';
// import Homepage from './';homepage
import Homepage from './states';
import axios from 'axios';
import StateContext from '../Context/StateContext';
import React from 'react';
import GoogleLogin from 'react-google-login'
import {useScript} from '../hooks/useScript'
import { useState, useRef } from 'react';

export default function Home({}) {

   const googlebuttonref = useRef();
   const [user, setuser] = useState(false);
   console.log(user)
   const onGoogleSignIn = (user) => {
     let userCred = user;
     // let payload = jwt_deocde(userCred);
     // console.log(payload);
     setuser(userCred);
   };

   useScript('https://accounts.google.com/gsi/client', () => {
     window.google.accounts.id.initialize({
       client_id: 'process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID', // here's your Google ID
       callback: onGoogleSignIn,
       auto_select: false,
     });

     window.google.accounts.id.renderButton(googlebuttonref.current, {
       size: 'medium',
     });
   });

  return (
    <div>
      {user && <div ref={googlebuttonref}>
        
      </div>}
      <Homepage />
    </div>
  );
}

export async function getServerSideProps({ params, res }) {
  try {
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
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
}
