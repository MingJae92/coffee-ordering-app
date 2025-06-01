import { Box, Typography } from "@mui/material";
import { heroStyles } from "../../styles/hero/hero.styles";

const Hero = () => {
  return (
    <Box sx={heroStyles.container}>
      {/* Overlay */}
      <Box sx={heroStyles.overlay} />

      {/* Content on top */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography variant="h2" component="h1" sx={heroStyles.heading}>
          Welcome to Hallabrujah Coffee!
        </Typography>

        <Typography variant="h6" component="p" sx={heroStyles.subHeading}>
         " Freshly brewed coffee before SOC Eng service starts!"
        </Typography>

        <Typography variant="h6" component="p" sx={heroStyles.subHeading}>
          "Scent the coffee as you walk up service, the Lord is waiting upon your arrival!"
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
