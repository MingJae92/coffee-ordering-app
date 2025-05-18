import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import { useAuth } from "../../component/context/AuthContext";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); 

  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    const token = credentialResponse.credential;
    console.log(token);
    if (!token) {
      console.log("No credentials returned");
      return;
    }

    try {
      const response = await axios.post("http://localhost:7128/api/auth", {
        token,
      });
      const user = response.data.user;
      if (user) {
        login(user);
        navigate("/dashboard");
      } else {
        console.log("No user info returned from backend");
      }
    } catch (error) {
      console.log(error)
      console.log("Login failed"!);

    }
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
