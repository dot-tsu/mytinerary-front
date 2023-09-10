import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/countriesSlice';
import { registerUser } from '../redux/authSlice';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '', 
    email: '',
    password: '',
    confirmPassword: '', 
    country: '',
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

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <section id="signup" className="flex h-screen items-center justify-center">
      <div className="bg-primary w-2/3 rounded-3xl shadow-xl">
        <h2 className="text-4xl text-white text-center p-5 font-light">Create account</h2>
        <div className="bg-white p-8 rounded-3xl rounded-tr-none">
          <form onSubmit={handleSubmit} className="form-control">
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="name">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full bg-white"
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
                  className="input input-bordered w-full bg-white"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName} 
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <label htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full bg-white"
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
              className="input input-bordered w-full bg-white"
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
              className="input input-bordered w-full bg-white"
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
              className="select select-bordered w-full bg-white"
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

            <button type="submit" className="btn btn-primary mt-5">
              Sign Up
            </button>
          </form>

          <div className="divider">Or sign up with</div>

          <button className="btn btn-accent w-full">Sign Up with Google</button>

          <p className="text-center pt-5">
            Already have an account? <Link to="/signin" className="link link-hover font-semibold">Sign in</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;