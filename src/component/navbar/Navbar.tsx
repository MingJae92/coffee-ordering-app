import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Container,
  Box,
  Link as MuiLink,
} from "@mui/material";
import {
  navWrapper,
  navLogo,
  navLinks,
  navRightLink,
} from "../../styles/navbar/navbar.styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{ backgroundColor: "#ffffff", color: "#000000" }}
    >
      <Toolbar disableGutters>
        <Container maxWidth="lg">
          <Box sx={navWrapper}>
            {/* Left: Logo */}
            <Box>
              <Typography variant="h6" sx={navLogo}>
                <Link to="/">Coffee and CODE! </Link>
              </Typography>
            </Box>

            {/* Center: Navigation links */}
            <Stack direction="row" spacing={4} sx={navLinks}>
              <MuiLink component={Link} to="/menu" underline="none" >
                Menu
              </MuiLink>
              <MuiLink component={Link} to="/about" underline="none">
                About
              </MuiLink>
            </Stack>

            {/* Right: Login/Account */}
            <Box sx={navRightLink}>
              <MuiLink component={Link} to="/login" underline="none">
                Login
              </MuiLink>
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
