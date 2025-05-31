import { SxProps, Theme } from "@mui/material";

export const footerStyle: SxProps<Theme> = {
  width: "100%",
  backgroundColor: "#333",
  color: "#fff",
  padding: "20px 0",
  textAlign: "center",
  marginTop: "auto", // Allows it to stick to the bottom in a flex layout
};

export const footerTextStyle: SxProps<Theme> = {
  fontSize: "14px",
};
