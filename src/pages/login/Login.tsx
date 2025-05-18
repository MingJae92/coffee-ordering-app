import React from "react";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import { useAuth } from "../../component/context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Destructure login function from your auth context

  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    const token = credentialResponse.credential;
  console.log(token)
    if (!token) {
      console.log("No credentials returned");
      return;
    }

    console.log("Login success!");

    // Call the login function from AuthContext and pass token or user info
    // You might want to call your backend here to verify token and get user data
    login(token);
  

    // After login is successful, navigate to dashboard
    navigate("/dashboard");
  };

  const handleError = () => {
    console.error("Login Failed");
    // TODO: Show error message to user
  };

  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>Sign in with Google</h1>
        <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
