import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import OthersLogin from '../OthersLogin/OthersLogin';

const SignUp = () => {

    const [agree, setAgree] = useState(false);


    // for login using email and password 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,

    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // for update profile
    const [updateProfile, updating] = useUpdateProfile(auth);

    // for defulet navgate
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }


    if (loading || updating) {
        return <Loading></Loading>
    }


    // if user is available 
    if (user) {
        navigate(from, { replace: true });
    }


    const handleSignup = async (event) => {
        event.preventDefault();
        const displayName = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;


        await createUserWithEmailAndPassword(email, password);

        await updateProfile({ displayName });
        // navigate('/home');
    }


    return (
        <div className='mt-2 mb-5  give-info mx-auto'>

            <h2 className='text-center text-primary my-1'>Please Sign Up</h2>
            <hr />
            <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" >
                    <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Your Email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />

                    <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms"> Accept Terms And Condition </label>
                </Form.Group>

                <Button
                    disabled={!agree}
                    className='w-50 mb-3 '
                    variant="primary"
                    type="signup"
                    value="Signup">
                    Sign Up
                </Button>
            </Form>

            <p className='mb-0'> Already Have an Account?
                <Link to='/login'
                    className='btn btn-link text-decoration-none'
                    onClick={navigateLogin}>
                    Please Login
                </Link>
            </p>


            <OthersLogin></OthersLogin>

        </div>
    );
};

export default SignUp;