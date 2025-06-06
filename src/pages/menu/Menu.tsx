import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import { Typography, Box } from "@mui/material";
import CoffeeMenu from "../../component/CoffeeMenu/CoffeeMenu";

function Menu() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      
      <Typography sx={{ p: 2 }}>Menu</Typography>

      <Box sx={{ flexGrow: 1 }}>
        <CoffeeMenu />
      </Box>

      <Footer />
    </Box>
  );
}

export default Menu;
