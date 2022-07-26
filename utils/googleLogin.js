import { GoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';

export default function GoogleAuth(props) {

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
                        console.log(res);
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