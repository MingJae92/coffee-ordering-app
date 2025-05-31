import { SxProps, Theme } from "@mui/material";

export const reviewsContainer: SxProps<Theme> = {
  py: 10,
  px: 2,
  backgroundColor: "#F6F7F9",
  minHeight: "100vh",
};

export const reviewCard: SxProps<Theme> = {
  p: 4,
  borderRadius: 4,
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  boxShadow:
    "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow:
      "0 20px 25px -5px rgba(0,0,0,0.15), 0 10px 10px -5px rgba(0,0,0,0.1)",
  },
};

export const avatarBox: SxProps<Theme> = {
  mb: 3,
};

export const reviewerName: SxProps<Theme> = {
  fontWeight: 700,
  mb: 1,
  fontSize: "1.25rem",
};

export const reviewText: SxProps<Theme> = {
  fontStyle: "italic",
  color: "#555",
  fontSize: "1rem",
  mb: 3,
  maxWidth: 300,
  margin: "0 auto",
};

export const starIcon: SxProps<Theme> = {
  fontSize: 28,
  color: "#FFD700", // Gold star color
};
