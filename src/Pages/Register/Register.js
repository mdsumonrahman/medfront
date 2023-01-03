import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthProvider } from '../../Context/AuthContext/AuthContext';
import { SetTitle } from '../../Utilities/SetTitle';

const Register = () => {
    SetTitle('Register');
    const { emailRegister, updateUserInfo } = useContext(AuthProvider);
    const { register, handleSubmit, reset } = useForm();
    const handleEmailRegister = data => {
        const imageBbApikey = process.env.REACT_APP_IMAGEBB_API;
        const profilePhoto = new FormData();
        profilePhoto.append('image', data.profilePhoto[0]);
        fetch(`https://api.imgbb.com/1/upload?key=${imageBbApikey}`, {
            method: 'POST',
            body: profilePhoto
        })
            .then(res => res.json())
            .then(imageData => {
                const email = data.email;
                const password = data.password;
                const username = data.username;
                const userInfo = { displayName: username, photoURL: imageData.data.url }
                emailRegister(email, password)
                    .then(() => {
                        updateUserInfo(userInfo)
                        const userData = {
                            email,
                            username,
                            image: imageData.data.url,
                        };
                        fetch('https://medlife-server-devshowmik.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(userData)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data) {
                                    toast.success('User Registered')
                                }
                            })
                        reset()
                    })
                    .catch(error => console.log(error))
            })
    }
    return (
        <div className='register py-5 text-capitalize'>
            <div className="container">
                <form onSubmit={handleSubmit(handleEmailRegister)}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label fw-semibold text-muted">User Name</label>
                        <input {...register('username')} type="text" className="form-control rounded-0" name='username' id="username" placeholder="full name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="profilePhoto" className="form-label fw-semibold text-muted">profile Photo</label>
                        <input {...register('profilePhoto')} type="file" className="form-control rounded-0" name="profilePhoto" id="profilePhoto" accept='.png, .jpg, .jpeg' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-semibold text-muted">email address</label>
                        <input {...register('email')} type="email" className="form-control rounded-0" name="email" id="email" accept='.png, .jpg, .jpeg' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label fw-semibold text-muted">password </label>
                        <input {...register('password')} type="password" className="form-control rounded-0" name="password" id="password" accept='.png, .jpg, .jpeg' />
                    </div>
                    <div className="mb-3">
                        <input type="submit" className='btn btn-primary bg-gradient fw-semibold btn-lg' value="Register" />
                    </div>
                    <div className="mb-3">
                        <p>Already have an account ? <Link to='/login'>Login here</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;