import React, { useState } from 'react'
import useAuthStore from './../../store/authStore';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Loader from './../Loader/index';

const ProtectedAdmin = (WrappedComponent) => {

    return (props) => {
    //Loading state
        const [loading, setLoading] = useState(true);
    // Auth State
    const { adminUser } = useAuthStore();

    //   console.log(userProfile);
    const router = useRouter();
    useEffect(() => {
      if (!adminUser) {
        router.push('/');
      } else {
        setLoading(false);
      }
    }, [adminUser, router]);

    if (loading) return <Loader />;
    return <WrappedComponent {...props} />;
}
return null
};

export default ProtectedAdmin;