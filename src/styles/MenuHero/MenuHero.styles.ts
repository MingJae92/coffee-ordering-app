import { SxProps, Theme } from "@mui/material";

export const MenuHeroStyles: Record<string, SxProps<Theme>> = {
  container: {
    height: "100vh",
    width: "100vw",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#fff",
    m: 0,
    p: 0,
    fontFamily: "'Roboto', sans-serif",

    backgroundImage:
      "url('https://plus.unsplash.com/premium_photo-1668472273029-ba03dfaf5c45?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    backgroundAttachment: "local",
    zIndex: 1,
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",

    background:
      "linear-gradient(to bottom, rgba(220, 220, 220, 0.4), rgba(200, 200, 200, 0.6))",

    zIndex: 1,
  },

  heading: {
    fontWeight: "bold",
    fontSize: { xs: "2.5rem", md: "3rem" },
    mb: 2,
    textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)",
    lineHeight: 1.2,
    px: 2,
  },

  subHeading: {
    fontWeight: 300,
    fontSize: { xs: "1rem", md: "1.2rem" },
    mb: 3,
    lineHeight: 1.5,
    px: 2,
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)",
  },

  button: {
    mt: 3,
    px: 4,
    py: 1.5,
    fontSize: "1rem",
    textTransform: "uppercase",
    backgroundColor: "#ff6600",
    color: "#fff",
    border: "none",
    boxShadow: "0 4px 8px rgba(255,102,0,0.6)",
    "&:hover": {
      backgroundColor: "#e65c00",
      boxShadow: "0 6px 12px rgba(230,92,0,0.8)",
    },
  },
};
