import { SxProps, Theme } from "@mui/material";

export const navWrapper: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
};

export const navLogo: SxProps<Theme> = {
  fontWeight: 700,
  fontSize: "1.5rem",
  textTransform: "uppercase",
  a: {
    textDecoration: "none",
    color: "inherit",
  },
};

export const navLinks: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  flex: 1,
  a: {
    color: "#000",
    fontWeight: 500,
    fontSize: "0.95rem",
    "&:hover": {
      color: "#00754a", // Starbucks green
    },
  },
};

export const navRightLink: SxProps<Theme> = {
  a: {
    color: "#000",
    fontWeight: 500,
    fontSize: "0.95rem",
    "&:hover": {
      color: "#00754a",
    },
  },
};
