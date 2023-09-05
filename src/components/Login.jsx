import { useState } from "react";

const Login = ({ isScrolled }) => {
  const [isRegistering, setIsRegistering] = useState(true);

  const toggleRegistering = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <>
     <button
          className={`btn btn-ghost font-bold ${
            isScrolled ? "text-black" : "text-white"
          }`}
          onClick={() => window.loginModal.showModal()}
        >
          Login
        </button>
        
      <dialog id="loginModal" className="modal">

        <div className="modal-box bg-primary p-0">
          <div className="flex flex-col items-center p-3">
            
              <>
                <h3 className="text-lg xl:text-2xl text-white">{isRegistering ? ('Welcome,') : ('Create Account')}</h3>
                <h4 className="font-light text-md xl:text-xl text-white">
                {isRegistering ? ('Glad to see you!') : ('to get started now')}
                </h4>
              </>
            
          </div>

          <div className="flex flex-col items-center bg-white rounded-t-3xl">
            <div className="form-control w-full max-w-xs mt-5 p-5 md:p-0">
              {isRegistering ? (
                <>
                  <label className="label">
                    <span className="label-text">What is your email?</span>
                  </label>
                  <input
                    type="text"
                    placeholder="johndoe@somemail.com"
                    className="input input-bordered shadow-sm bg-white w-full max-w-xs"
                  />
                  <label className="label">
                    <span className="label-text">What is your password?</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered shadow-sm bg-white w-full max-w-xs"
                  />
                  <a className="link link-hover text-sm self-end p-2 font-bold">
                    Forgot your password?
                  </a>
                  <button className="btn btn-primary shadow-sm my-2">
                    Login
                  </button>
                </>
              ) : (
                <>
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="johndoe@somemail.com"
                    className="input input-sm input-bordered shadow-sm bg-white w-full max-w-xs"
                  />
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-sm input-bordered shadow-sm bg-white w-full max-w-xs"
                  />
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input input-sm input-bordered  shadow-sm bg-white w-full max-w-xs"
                  />
                  <button className="btn  btn-primary shadow-sm mb-2 mt-7">
                    Sign up
                  </button>
                </>
              )}

              <div className="divider text-sm">Or Login with</div>
              <button className="btn btn-accent shadow-sm my-2">
                Google Login
              </button>

              <p className="text-center my-4">
                {isRegistering
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <button
                  className="link link-hover font-bold"
                  onClick={toggleRegistering}
                >
                  {isRegistering ? "Sign up now" : "Log in"}
                </button>
              </p>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => window.loginModal.close()}>Close</button>
        </form>
      </dialog>
    </>
  );
};

export default Login;
