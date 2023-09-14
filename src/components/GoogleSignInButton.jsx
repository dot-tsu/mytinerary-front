import { useEffect, useRef } from 'react';

const GoogleSignInButton = () => {
  const googleButton = useRef(); 

  useEffect(() => {

    const handleCredentialResponse = (response) => {
      console.log("Encoded JWT ID token: " + response.credential);
      localStorage.setItem('token', response.credential);
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
