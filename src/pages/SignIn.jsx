import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/authSlice';
import GoogleSignInButton from '../components/GoogleSignInButton';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate()
    const [isLoggedIn] = useState(!!token);

    if (isLoggedIn) {
        console.info('Signin and signout routes cannot be accesed if logged in')
        window.location.href = '/';
    }
    const error = useSelector((state) => state.auth.error);

    const initialFormData = {
        email: '',
        password: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await dispatch(loginUser(formData));

        if (!error) {
            const token = localStorage.getItem('token');
            if (token) navigate('/');
        }
    };

    return (
        <>
            {error && (
                error === 'Email not registered 😿' ? (
                    <div className="alert alert-warning absolute right-10 top-10 z-50 max-w-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        <span>Email not registered<br /> Would you like to <Link to='/signup' className='link link-hover font-semibold'>Sign up now</Link>?</span>
                    </div>
                ) : (
                    <div className="alert alert-error absolute right-10 top-10 z-50 max-w-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{error}</span>
                    </div>
                )
            )}            <section id="signin" className='flex min-h-screen items-center justify-center max-w-xl py-28'>

                <div className="bg-primary w-2/3 rounded-3xl shadow-xl">
                    <h2 className="text-4xl text-white text-center p-5 font-light">Login</h2>
                    <div className='bg-white p-8 rounded-3xl rounded-tr-none'>
                        <form onSubmit={handleSubmit} className='form-control'>
                            <label htmlFor="email"><span className="label-text">What is your email?</span></label>
                            <input
                                type="email"
                                className="input input-sm input-bordered w-full max-w-xs bg-white"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />

                            <label htmlFor="password"><span className="label-text">What is your password?</span></label>
                            <input
                                type="password"
                                className="input input-sm input-bordered w-full max-w-xs bg-white"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                            <a className='link link-hover place-self-end font-semibold mt-2'>Forgot your password?</a>

                            <button type="submit" className='btn btn-sm btn-primary mt-5'>Login</button>
                        </form>

                        <div className='divider'>Or login with</div>

                        <div>
                            <GoogleSignInButton />
                        </div>
                        <p className='text-center pt-5'>Don&apos;t have an account? <Link to='/signup' className='link link-hover font-semibold'>Sign up now</Link></p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignIn;