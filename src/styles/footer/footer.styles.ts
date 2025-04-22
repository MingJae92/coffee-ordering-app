import { SxProps, Theme } from "@mui/material";

export const footerStyle: SxProps<Theme> = {
  width: "100%",             // Ensures the footer spans the full width of the page
  backgroundColor: "#333",   // Dark background color
  color: "#fff",             // White text color
  position: "absolute",      // Makes the footer stick at the bottom of the page
  bottom: 0,                 // Positions it at the very bottom of the page
  left: 0,                   // Ensures it's aligned to the left edge
  padding: "20px 0",         // Padding inside the footer
  textAlign: "center",       // Center the text horizontally
};

export const footerTextStyle: SxProps<Theme> = {
  fontSize: "14px",
};
