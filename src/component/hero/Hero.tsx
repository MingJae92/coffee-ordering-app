import { Box, Typography, Button } from "@mui/material";
import { heroStyles } from "../../styles/hero/hero.styles"; // Make sure you have these styles correctly imported

const Hero = () => {
  return (
    <Box sx={heroStyles.container}>
      <Box sx={heroStyles.overlay} />
      
      {/* Main Heading (H1) */}
      <Typography variant="h2" component="h1" sx={heroStyles.heading}>
        Welcome to BrewBuddy Coffee!
      </Typography>
      
      {/* Subheading (Paragraph) */}
      <Typography variant="h6" component="p" sx={heroStyles.subHeading}>
        Freshly brewed coffee, delivered to your door.
      </Typography>
      
      {/* Call-to-Action Button */}
      <Button variant="contained" color="primary" sx={heroStyles.button}>
        Order Now
      </Button>
    </Box>
  );
};

export default Hero;
