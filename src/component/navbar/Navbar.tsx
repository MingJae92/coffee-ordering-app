import { AppBar, Toolbar, Typography, Button, Stack, Container } from "@mui/material";
import { navStack, logoStyle } from "../../styles/navbar/navbar.styles"

const Navbar = () => {
  return (
    <AppBar position="fixed" color="transparent" elevation={0} sx={{ width: "100%" }}>
      <Toolbar disableGutters>
        <Container maxWidth="lg">
          <Stack direction="row" spacing={4} sx={navStack}>
            <Typography variant="h6" sx={logoStyle}>
              BrewBuddy
            </Typography>
            <Button color="inherit">Menu</Button>
            <Button color="inherit">How It Works</Button>
            <Button color="inherit">Sign In</Button>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
