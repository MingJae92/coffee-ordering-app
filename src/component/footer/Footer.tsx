import { Box, Typography } from "@mui/material";
import { footerStyle, footerTextStyle } from "../../styles/footer/footer.styles";

const Footer = () => {
  return (
    <Box sx={footerStyle}>
      <Typography variant="body1" sx={footerTextStyle}>
        &copy; 2025 Hallabrujah, All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;