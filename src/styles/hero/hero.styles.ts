import { SxProps, Theme } from "@mui/material";

export const heroStyles: Record<string, SxProps<Theme>> = {
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
      "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1470&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    // THIS is the key:
    backgroundAttachment: "local", // Fixes bg relative to container scroll

    // Optional: if container scrolls internally
    // overflow: "auto", 
    // If you want a scrollable container limited in height, uncomment above.

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
