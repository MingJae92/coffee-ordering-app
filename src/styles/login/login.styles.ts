import { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  wrapper: {
    width: "100vw",
    minHeight: "80vh",
    backgroundColor: "#fff", // full white background on left
    display: "flex",
    justifyContent: "flex-end", // push container to right side
    alignItems: "center",
    padding: "20px",
  },
  container: {
    backgroundColor: "#f4f6f8", // grey shadow background on right side
    borderRadius: "20px",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
    padding: "40px",
    maxWidth: "400px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  card: {
    backgroundColor: "transparent", // no additional background
    boxShadow: "none", // remove Paper shadow, handled by container
    padding: 0,
  },
  title: {
    fontWeight: 700,
    marginBottom: "10px",
    fontSize: "24px",
  },
  subtitle: {
    color: "#666",
    fontSize: "14px",
    marginBottom: "30px",
  },
  loginBtnContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  note: {
    color: "#999",
    fontSize: "13px",
  },
};
