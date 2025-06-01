import { SxProps, Theme } from "@mui/material";

export const reviewsWrapper: SxProps<Theme> = {
  py: 10,
  px: 2,
  backgroundColor: "#F6F7F9",
};

export const reviewsContainer: SxProps<Theme> = {
  maxWidth: "1200px",
  margin: "0 auto",
  px: 2,
};

export const reviewCard: SxProps<Theme> = {
  p: 4,
  borderRadius: 6,
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  minHeight: 320,
  boxShadow:
    "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow:
      "0 20px 25px -5px rgba(0,0,0,0.15), 0 10px 10px -5px rgba(0,0,0,0.1)",
  },
};

export const avatarBox: SxProps<Theme> = {
  mb: 2,
};

export const reviewerName: SxProps<Theme> = {
  fontWeight: 700,
  mt: 2,
  fontSize: "1rem",
  color: "#222",
};

export const reviewText: SxProps<Theme> = {
  fontStyle: "italic",
  color: "#555",
  fontSize: "1rem",
  mt: 2,
  maxWidth: 280,
  mx: "auto",
};

export const starRow: SxProps<Theme> = {
  mb: 2,
};

export const quoteIcon: SxProps<Theme> = {
  fontSize: 40,
  color: "#d6d6d6",
  mb: 2,
};

