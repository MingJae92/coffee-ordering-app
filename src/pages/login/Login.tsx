import { Box, Paper, Typography } from "@mui/material";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import { useAuth } from "../../component/context/AuthContext";
import axios from "axios";
import { styles } from "../../styles/login/login.styles";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSuccess = async (credentialResponse: CredentialResponse) => {
  const token = credentialResponse.credential;
  if (!token) return;

  try {
    const response = await axios.post("http://localhost:7128/api/auth", { token });
    const user = response.data.user;

    if (user) {
      login(user); // store user in context
      console.log("✅ User successfully logged in:", user); // <-- log here
      navigate("/dashboard");
    }
  } catch (error) {
    console.error("Login failed", error);
  }
};


  const handleError = () => {
    console.error("Login Failed");
  };

  return (
    <>
      <Navbar />
      <Box sx={styles.wrapper}>
        {/* Left side image */}
        <Box sx={styles.leftSide} />

        {/* Right side login box */}
        <Box sx={styles.container}>
          <Paper elevation={0} sx={styles.card}>
            <Typography variant="h5" sx={styles.title}>
              Welcome Back 👋
            </Typography>
            <Typography sx={styles.subtitle}>Sign in to your account</Typography>
            <Box sx={styles.loginBtnContainer}>
              <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
            </Box>
            <Typography sx={styles.note}>Use your Google account to sign in</Typography>
          </Paper>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Login;
