/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/countriesSlice';
import { registerUser } from '../redux/authSlice';
import GoogleSignInButton from '../components/GoogleSignInButton';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    profilePicUrl: '',
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    setPasswordsMatch(true);
    // Remove 'confirmPassword' from the data sent to the backend
    const { confirmPassword, ...dataToSend } = formData;
    dispatch(registerUser(dataToSend));
  };

  const countries = useSelector((state) => state.countries.countries);
  const dispatch = useDispatch();
  const defaultprofilePicUrl = 'https://www.hardiagedcare.com.au/wp-content/uploads/2019/02/default-avatar-profile-icon-vector-18942381.jpg';
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <section id="signup" className="flex min-h-screen items-center justify-center max-w-xl py-28">
      <div className="bg-primary w-2/3 rounded-3xl shadow-xl">
        <h2 className="text-2xl text-white text-center p-2 font-light">Create account</h2>
        <div className="bg-white p-6 rounded-3xl rounded-tr-none">
          <form onSubmit={handleSubmit} className="form-control">
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="name">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  className="input input-sm input-bordered w-full bg-white"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  className="input input-sm input-bordered w-full bg-white"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="flex-1">
              <label htmlFor="profilePicUrl" >
                <span className="label-text">Profile picture url</span>
              </label>
              <div className="mt-1 flex items-center">
                <div className="avatar">
                  <div className="w-10 mx-3 rounded-full">
                  <img
                      src={formData.profilePicUrl || defaultprofilePicUrl} 
                      alt="Profile Preview"
                    />
                  </div>
                </div>
                <input
                  type="text"
                  className="input input-sm input-bordered w-full bg-white"
                  id="profilePicUrl"
                  name="profilePicUrl"
                  value={formData.profilePicUrl}
                  onChange={handleInputChange}
                />

              </div>
            </div>

            <label htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-sm input-bordered w-full bg-white"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="password">
              <span className="label-text">Create a password</span>
            </label>
            <input
              type="password"
              className="input input-sm input-bordered w-full bg-white"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="confirmPassword">
              <span className="label-text">Confirm password</span>
            </label>
            <input
              type="password"
              className="input input-sm input-bordered w-full bg-white"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="country">
              <span className="label-text">Country</span>
            </label>
            <select
              className="select select-sm select-bordered w-full bg-white"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
            >
              <option disabled selected>Select your country</option>
              {countries.map((country, index) => (
                <option key={index}>{country}</option>
              ))}
            </select>

            {!passwordsMatch && (
              <p className="text-red-500">Passwords do not match.</p>
            )}

            <button type="submit" className="btn btn-sm btn-primary mt-5">
              Sign Up
            </button>
          </form>

          <div className="divider">Or sign up with</div>
          <div>
            <GoogleSignInButton />
          </div>
          <p className="text-center pt-5">
            Already have an account? <Link to="/signin" className="link link-hover font-semibold">Sign in</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;