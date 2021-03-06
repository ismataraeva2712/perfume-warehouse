import axios from 'axios';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import Social from '../Social/Social';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
    );
    if (user) {
        navigate(from, { replace: true });
        console.log(user)
    }

    if (loading || sending) {
        return <Loading></Loading>
    }
    const handleLogin = async event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        await signInWithEmailAndPassword(email, password)
        const { data } = await axios.post('https://dry-citadel-76897.herokuapp.com/login', { email })
        console.log(data)
        localStorage.setItem('accessToken', data.accessToken)

    }
    const handleResetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email);
            toast("send password reset link in your email.")
        }
        else {
            toast('please enter a valid mail')
        }

    }
    let errorText;
    if (error || error1) {
        errorText = <p>{error?.message}</p>
    }
    return (
        <div className='w-50 mx-auto mt-5'>
            <h2 className='mb-5 '> Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{errorText}</p>
                <button className='my-btn text-white py-1 rounded-pill px-5 fw-bolder fs-6' variant="primary" type="submit">
                    Login
                </button>
            </Form>
            <p className='mt-3'>Are you new in Perfume-Warehouse ? please <span> <Link className='text-decoration-none' to='/signup'>sign up</Link> </span></p>
            <ToastContainer />
            <p>Forget Your password? <span style={{ cursor: 'pointer' }} className='text-primary' onClick={handleResetPassword}>reset password</span></p>

            <Social></Social>
        </div>
    );
};

export default Login;