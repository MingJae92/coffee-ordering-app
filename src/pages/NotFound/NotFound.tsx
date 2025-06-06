import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <Container
        maxWidth="md"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          py: 10,
        }}
      >
        <Typography variant="h2" color="error" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Sorry, the page you’re looking for doesn’t exist.
        </Typography>
      </Container>

      <Footer />
    </Box>
  );
};

export default NotFound;
