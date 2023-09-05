import  { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <section id="signup" className="flex h-screen items-center justify-center">
      <div className="bg-primary w-2/3 rounded-3xl shadow-xl max-w-sm">
        <h2 className="text-4xl text-white text-center p-5 font-light">Create account</h2>
        <div className="bg-white p-8 rounded-3xl rounded-tr-none">
          <form onSubmit={handleSubmit} className="form-control">
            <label htmlFor="email">
              <span className="label-text">What is your email?</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full max-w-xs bg-white"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />

            <label htmlFor="password">
              <span className="label-text">Create a password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs bg-white"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />

            <label htmlFor="confirmPassword">
              <span className="label-text">Confirm password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs bg-white"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />

            <button type="submit" className="btn btn-primary mt-5">
              Sign Up
            </button>
          </form>

          <div className="divider">Or sign up with</div>

          <button className="btn btn-accent w-full">Sign Up with Google</button>

          <p className="text-center pt-5">Already have an account? <Link to="/signin" className="link link-hover font-semibold">Sign in</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;