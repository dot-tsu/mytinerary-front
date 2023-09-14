import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
const GoogleSignInButton = () => {
  const googleButton = useRef(); 
 const navigate = useNavigate('/');
  useEffect(() => {

    const handleCredentialResponse = (response) => {
      localStorage.setItem('token', response.credential);
      console.log("Encoded JWT ID token: " + localStorage.getItem('token'));
      navigate('/');
    };

    const initializeGoogleSignIn = () => {
      window.google.accounts.id.initialize({
        client_id: "617289649440-ksln7eb89ph42c4qhnlfmfa18unq92pg.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });
    };

    if (window.google) {
      initializeGoogleSignIn();
      window.google.accounts.id.renderButton(
        googleButton.current,
        {
          type: 'standard',
          shape: 'rectangular',
          theme: "outline",
          size: "large",
          text: 'continue_with',
          logo_alignment: "left"
        }  
      );
    }
  }, []);

  return <div ref={googleButton}></div>;
};

export default GoogleSignInButton;
