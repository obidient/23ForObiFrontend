import React, { useState } from 'react'
import useAuthStore from './../../store/authStore';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Loader from './../Loader/index';

const ProtectedHOC = (WrappedComponent) => {

    return (props) => {
    //Loading state
        const [loading, setLoading] = useState(true);
    // Auth State
    const { userProfile } = useAuthStore();

    //   console.log(userProfile);
    const router = useRouter();
    useEffect(() => {
        if (!userProfile) {
        router.push('/');
        } else {
            setLoading(false);
        }
    }, [userProfile, router]);

    if (loading) return <Loader />;
    return <WrappedComponent {...props} />;
}
return null
};

export default ProtectedHOC