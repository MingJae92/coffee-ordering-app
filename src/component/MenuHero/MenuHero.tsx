import { Box, Typography } from "@mui/material";
import { MenuHeroStyles } from "../../styles/MenuHero/MenuHero.styles";

const MenuHero = () => {
  return (
    <Box sx={MenuHeroStyles.container}>
      {/* Overlay */}
      <Box sx={MenuHeroStyles.overlay} />

      {/* Content on top */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography variant="h2" component="h1" sx={MenuHeroStyles.heading}>
         Coffee and CODE! Coffee Menu!
        </Typography>
      </Box>
    </Box>
  );
};

export default MenuHero;
