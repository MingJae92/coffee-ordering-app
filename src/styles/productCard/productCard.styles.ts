import { SxProps, Theme } from "@mui/material";

export const featuredStyles: { [key: string]: SxProps<Theme> } = {
  wrapper: {
    width: "100%",
    padding: "4rem 2rem",
    backgroundColor: "#f9f6f2",
  },
  heading: {
    textAlign: "center",
    marginBottom: "2rem",
    fontWeight: "bold",
    color: "#3e2723",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: 3,
    borderRadius: 2,
    backgroundColor: "#fff",
  },
  cardTitle: {
    fontWeight: 600,
    color: "#4e342e",
  },
  cardDescription: {
    color: "#6d4c41",
    marginTop: "0.5rem",
  },
};
