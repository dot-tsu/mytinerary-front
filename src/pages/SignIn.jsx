import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <section id="signin" className='flex h-screen items-center justify-center'>
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
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />

                        <label htmlFor="password"><span className="label-text">What is your password?</span></label>
                        <input
                            type="password"
                            className="input input-bordered w-full max-w-xs bg-white"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                        <a className='link link-hover place-self-end font-semibold mt-2'>Forgot your password?</a>
                        <button type="submit" className='btn btn-primary mt-5'>Login</button>
                    </form>

                    <div className='divider'>Or login with</div>

                    <button className='btn btn-accent w-full'>Login with Google</button>
                        <p className='text-center pt-5'>Don&apos;t have an account? <Link to='/signup' className='link link-hover font-semibold'>Sign up now</Link></p>
                </div>
            </div>
        </section>
    );
};

export default SignIn;
