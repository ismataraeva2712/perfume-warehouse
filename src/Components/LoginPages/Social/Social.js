import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import google from '../../../banner/google.png'

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate()
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    let errorText;
    if (error) {
        errorText = <p>{error?.message}</p>
    }
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center '>
                <div style={{ height: '1px' }} className="bg-primary w-50 me-2"></div>
                <div>or</div>
                <div style={{ height: '1px' }} className="bg-primary w-50 ms-2"></div>
            </div>
            <div className=' text-center'>
                <p className='text-danger'>{errorText}</p>
                <button onClick={() => signInWithGoogle()} className='border-0 w-75 p-1 rounded-pill'> <img style={{ height: '30px' }}
                    src={google} alt="" /> <span className='fw-bold'>Google Sign In</span> </button>
            </div>

        </div>
    );
};

export default Social;