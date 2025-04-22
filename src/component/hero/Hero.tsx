// Hero.tsx
import { Box, Typography, Button } from "@mui/material";
import { heroStyles } from "../../styles/hero/hero.styles"; // Import styles from the styles file

const Hero = () => {
  return (
    <Box sx={heroStyles.container}>
      <Box sx={heroStyles.overlay} />
      <Typography variant="h2" sx={heroStyles.heading}>
        Welcome to BrewBuddy Coffee!
      </Typography>
      <Typography variant="h6" sx={heroStyles.subHeading}>
        Freshly brewed coffee, delivered to your door.
      </Typography>
      <Button variant="contained" color="primary" sx={heroStyles.button}>
        Order Now
      </Button>
    </Box>
  );
};

export default Hero;
