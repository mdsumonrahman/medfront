import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext/AuthContext';
import { SetTitle } from '../../Utilities/SetTitle';

const Login = () => {

    SetTitle('Login');
    const { emailLogin } = useContext(AuthProvider);
    const redirect = useNavigate();
    const { register, handleSubmit } = useForm();
    const handleEmailLogin = data => {
        const email = data.email;
        const password = data.password;
        emailLogin(email, password)
            .then(() => {
                redirect('/')
            })
            .catch(error => console.log(error))
    }
    return (
        <div className='login py-5 text-capitalize'>
            <div className="container">
                <form onSubmit={handleSubmit(handleEmailLogin)}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-semibold text-muted">email address</label>
                        <input {...register('email')} type="email" className="form-control rounded-0" name="email" id="email" placeholder='Email' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label fw-semibold text-muted">password </label>
                        <input {...register('password')} type="password" className="form-control rounded-0" name="password" id="password" placeholder='Password' />
                    </div>
                    <div className="mb-3">
                        <input type="submit" className='btn btn-primary bg-gradient fw-semibold' value="Login" />
                    </div>
                    <div className="mb-3">
                        <p>need an account ? <Link to='/register'>register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;