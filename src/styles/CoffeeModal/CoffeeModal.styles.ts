import { SxProps, Theme } from "@mui/material";

export const dialogContentStyles: SxProps<Theme> = {
  position: "relative",
  p: 0,
  backgroundColor: "#000",
  color: "#fff",
  display: "flex",
  flexDirection: "row", // side-by-side layout
  alignItems: "stretch",
  height: "60vh", // force consistent height
};

export const closeButtonStyles: SxProps<Theme> = {
  position: "absolute",
  top: 8,
  right: 8,
  color: "white",
  backgroundColor: "rgba(0,0,0,0.5)",
  "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
  zIndex: 2,
};

export const imageStyles: React.CSSProperties = {
  width: "50%",
  height: "100%",
  objectFit: "cover",
  backgroundColor: "#111",
};

export const cardContentStyles: SxProps<Theme> = {
  width: "50%",
  height: "100%",
  backgroundColor: "#111",
  p: 3,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  textAlign: "center",
};

export const coffeeHeadingStyles: SxProps<Theme> = {
  fontFamily: `'Georgia', serif`,
  color: "#d2b48c",
  letterSpacing: 1.5,
  marginBottom: 2,
};
