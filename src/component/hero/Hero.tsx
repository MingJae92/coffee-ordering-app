import { Box, Typography, Button } from "@mui/material";
import { heroStyles } from "../../styles/hero/hero.styles";

const Hero = () => {
  return (
    <Box sx={heroStyles.container}>
      <Box sx={heroStyles.overlay} />

      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography variant="h2" component="h1" sx={heroStyles.heading}>
          Welcome to Hallabrujah Coffee!
        </Typography>

        <Typography variant="h6" component="p" sx={heroStyles.subHeading}>
          Freshly brewed coffee, delivered to your door.
        </Typography>

        <Button variant="contained" sx={heroStyles.button}>
          Order Now
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
