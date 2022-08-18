import { GoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';
import { useRouter } from 'next/router';
import useAuthStore from '../store/authStore';

export default function GoogleAuth(props) {
  // Auth State
  const { addUser } = useAuthStore();
  const { addUserAuth } = useAuthStore();
  const router = useRouter();
  return (
    <div>
      <GoogleLogin
        onSuccess={(res) => {
          // console.log(res);
          const url = 'https://api.23forobi.com/google/token';
          const headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          };
          const data = {
            token: res.credential,
          };

          axios.post(url, data, headers).then((res) => {
            // console.log(res.data);
            if (res.data && res.data.access_token) {
              addUser(res.data);
              addUserAuth(res.data.access_token);
              // console.log(res.data);
              if (res.data.is_new_user === true) {
                router.push('/dashboard/welcome');
              } else {
                router.push('/dashboard');
              }
            }
          });
        }}
        // onError={console.log('Login Failed')}
        text="signup_with"
        size="large"
        width="250%"
        shape="circle"
      />
    </div>
  );
}
