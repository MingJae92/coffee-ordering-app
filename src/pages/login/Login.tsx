import React from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../component/navbar/Navbar';
import Footer from '../../component/footer/Footer';

const Login = () => {
  const navigate = useNavigate();

  const handleSuccess = (credentialResponse: CredentialResponse) => {
    const token = credentialResponse.credential;
    if (token) {
      console.log('You are logged in!', token);
      // TODO: Store token (e.g., in context or localStorage)
      navigate('/dashboard');
    } else {
      console.error('No credential returned');
      // TODO: Show error to user if necessary
    }
  };

  const handleError = () => {
    console.error('Login Failed');
    // TODO: Show error message to user
  };

  return (
    <div>
      <Navbar />
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1>Sign in with Google</h1>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
