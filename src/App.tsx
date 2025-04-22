import { Box } from "@mui/material";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Box
        sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      ></Box>
      <Footer />
    </div>
  );
}

export default Homepage;
