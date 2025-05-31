import { SxProps, Theme } from "@mui/material";

export const reviewsContainer: SxProps<Theme> = {
  py: 6,
  px: 2,
  backgroundColor: "#f9f9f9",
};

export const reviewCard: SxProps<Theme> = {
  p: 3,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow: 3,
  borderRadius: 2,
  backgroundColor: "#fff",
};

export const reviewerName: SxProps<Theme> = {
  mt: 2,
  fontWeight: 600,
};

export const reviewText: SxProps<Theme> = {
  mt: 1,
  color: "text.secondary",
};
