import { GoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';
import {useRouter} from 'next/router'

export default function GoogleAuth(props) {
    const router = useRouter()
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

          axios
            .post(url, data, headers)
            .then((res) => {
                console.log(res.data)
                if(res.data && res.data.access_token){
                    router.push('/dashboard')
                }
            });
        }}
        onError={console.log('Login Failed')}
        text="signup_with"
        size="large"
        width="250%"
        shape="circle"
      />
    </div>
  );
}
