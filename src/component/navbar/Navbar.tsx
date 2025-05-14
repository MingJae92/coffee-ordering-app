import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Container,
} from "@mui/material";
import { navStack, logoStyle } from "../../styles/navbar/navbar.styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{ width: "100%" }}
    >
      <Toolbar disableGutters>
        <Container maxWidth="lg">
          <Stack direction="row" spacing={4} sx={navStack}>
            <Typography variant="h6" sx={logoStyle}>
              <Link to="/"> BrewBuddy</Link>
            </Typography>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
