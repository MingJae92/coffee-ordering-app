import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import { Typography } from "@mui/material";
import CoffeeMenu from "../../component/CoffeeMenu/CoffeeMenu";

function Menu() {
  return (
    <div>
      <Typography>Menu</Typography>
      <Navbar />
      <CoffeeMenu />
      <Footer />
    </div>
  );
}

export default Menu;
