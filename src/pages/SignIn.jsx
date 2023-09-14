import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/authSlice';
import GoogleSignInButton from '../components/GoogleSignInButton';

const SignIn = () => {
    const dispatch = useDispatch();
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
            if (token) {
                window.location.href = '/';
            }
        }
    };

    return (
        <section id="signin" className='flex min-h-screen items-center justify-center max-w-xl py-28'>
            <div className="bg-primary w-2/3 rounded-3xl shadow-xl">
                <h2 className="text-4xl text-white text-center p-5 font-light">Login</h2>
                <div className='bg-white p-8 rounded-3xl rounded-tr-none'>
                    <form onSubmit={handleSubmit} className='form-control'>
                        <label htmlFor="email"><span className="label-text">What is your email?</span></label>
                        <input
                            type="email"
                            className="input input-bordered w-full max-w-xs bg-white"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />

                        <label htmlFor="password"><span className="label-text">What is your password?</span></label>
                        <input
                            type="password"
                            className="input input-bordered w-full max-w-xs bg-white"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                        <a className='link link-hover place-self-end font-semibold mt-2'>Forgot your password?</a>
                        {error && <p className='text-red-500'>{error}</p>}
                        <button type="submit" className='btn btn-primary mt-5'>Login</button>
                    </form>

                    <div className='divider'>Or login with</div>

                    <div>
                        <GoogleSignInButton />
                    </div>
                    <p className='text-center pt-5'>Don&apos;t have an account? <Link to='/signup' className='link link-hover font-semibold'>Sign up now</Link></p>
                </div>
            </div>
        </section>
    );
};

export default SignIn;