import React, { useRef } from 'react';
import { Button, Form, ToastContainer } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import OthersLogin from '../OthersLogin/OthersLogin';
import './Login.css'

const Login = () => {


    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    //--------------
    let errorElement;



    // for signin

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // password 
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);



    if (loading || sending) {
        return <Loading></Loading>
    }


    //---------------
    if (user) {
        navigate(from, { replace: true });

    }

    //------------------
    if (error) {

        errorElement = <p className=' text-danger'>Error: {error?.message}</p>

    }



    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);

    }


    const navigateRegister = event => {
        navigate('/register');
    }

    //password
    const resetPassword = async () => {
        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address')
        }
    }

    return (
        <div className='mt-2 mb-5  give-info mx-auto'>
            <h2 className='text-center text-primary my-1'>Please Login</h2>
            <hr />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='w-50 mb-3 ' variant="primary" type="login">
                    Login
                </Button>
            </Form>

            {errorElement}

            <div>
                <p className='mb-0'> Have Not any Account?
                    <Link to='/signup'
                        className='btn btn-link text-decoration-none'
                        onClick={navigateRegister}            >
                        Sign Up
                    </Link>
                </p>
                <p>Forget Password?
                    <button className=' btn btn-link text-primary text-decoration-none'
                        onClick={resetPassword}>
                        Reset Password
                    </button>
                </p>
            </div>



            <OthersLogin></OthersLogin>

            <ToastContainer />



        </div>
    );
};

export default Login;