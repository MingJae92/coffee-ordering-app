import { SxProps, Theme } from "@mui/material";

// export const footerStyle: SxProps<Theme> = {
//   width: "100%",
//   backgroundColor: "#333",
//   color: "#fff",
//   padding: "20px 0",
//   textAlign: "center",
//   marginTop: "auto", // Allows it to stick to the bottom in a flex layout
// };

export const footerStyle: SxProps<Theme> = {
  width: "100vw",              // span full viewport width
  backgroundColor: "#333",
  color: "#fff",
  padding: "20px 0",
  textAlign: "center",
  marginTop: "auto",           // keep sticky to bottom if parent uses flex layout
  position: "relative",        // ensure positioned relative for alignment
  left: 0,                    // align to left edge
};


export const footerTextStyle: SxProps<Theme> = {
  fontSize: "14px",
};