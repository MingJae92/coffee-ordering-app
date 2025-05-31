// Homepage.tsx
import { Box } from "@mui/material";
import CallToAction from "../../component/CallToAction/CallToAction";
import Footer from "../../component/footer/Footer";
import Hero from "../../component/hero/Hero";
import Navbar from "../../component/navbar/Navbar";
import Reviews from "../../component/reviews/Reviews";

function Homepage() {
  return (
    <>
      <Navbar />
      
      {/* Hero is full viewport height */}
      <Hero />

      {/* All following content sections */}
      <Box
        component="section"
        sx={{
          width: "100vw",
          backgroundColor: "#fff", // solid bg so fixed bg doesn't show through
          display: "block",
        }}
      >
        <CallToAction />
      </Box>

      <Box
        component="section"
        sx={{
          width: "100vw",
          backgroundColor: "#fff",
          display: "block",
        }}
      >
        <Reviews />
      </Box>

      <Box
        component="section"
        sx={{
          width: "100vw",
          backgroundColor: "#fff",
          display: "block",
        }}
      >
        <Footer />
      </Box>
    </>
  );
}

export default Homepage;
