import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import { Box } from "@mui/material";
import CoffeeMenu from "../../component/CoffeeMenu/CoffeeMenu";
import MenuHero from "../../component/MenuHero/MenuHero";

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
      <MenuHero />

      {/* <Box sx={{ flexGrow: 1 }}>
      
      </Box> */}
      <Box sx={{ py: 4 }}>
        <CoffeeMenu />
      </Box>

      <Footer />
    </Box>
  );
}

export default Menu;
