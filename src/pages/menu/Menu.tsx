import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import { Box } from "@mui/material";
import CoffeeMenu from "../../component/CoffeeMenu/CoffeeMenu";
import MenuHero from "../../component/MenuHero/MenuHero";
import Searchbar from "../../component/Searchbar/Searchbar";

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

      <Box sx={{ my: 4 }}>
        <Searchbar
          value={""}
          onChange={(newValue: string) => {
            console.log(newValue);
          }}
        />
      </Box>

      
        <CoffeeMenu />


      <Footer />
    </Box>
  );
}

export default Menu;
