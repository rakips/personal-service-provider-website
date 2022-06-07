import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import './OthersLogin.css'
import { useNavigate } from 'react-router-dom';



const OthersLogin = () => {

    // google login
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // github 
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    // for navigate
    const navigate = useNavigate();

    // google
    const handleGoogleSinging = () => {
        signInWithGoogle();
    }

    //github

    const handleGithubSinging = () => {
        signInWithGithub();
    }

    if (loading) {
        return <Loading></Loading>;
    };


    //error message
    let errorMessage;

    // auto login page solve & loading & error message show

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {

        errorMessage = <p className=' text-danger'>Error: {error?.message}{error1?.message}</p>
    }

    if (user || user1) {
        navigate('/home');
    }



    return (
        <div>
            <div className=' d-flex align-items-center'>
                <div style={{ height: '2px' }} className=' bg-warning w-50'></div>
                <p className='mt-2 px-2' > Or </p>
                <div style={{ height: '2px' }} className=' bg-warning w-50'></div>
            </div>
            {errorMessage}

            <div className=' d-flex justify-content-around m-4'>
                <button
                    onClick={handleGoogleSinging}
                    className=' social-link btn btn-primary'>
                    <img src="https://i.ibb.co/3dfcv2y/Google-G-Logo-svg.png" alt="" />
                    Google Sign In
                </button>

                <button
                    onClick={handleGithubSinging}
                    className=' social-link btn btn-primary'>

                    <span className='px-2 '>Github Sign In</span>
                </button>
            </div>




        </div>
    );
};

export default OthersLogin;