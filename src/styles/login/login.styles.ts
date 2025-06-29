import { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  wrapper: {
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center", // ✅ centers horizontally
    alignItems: "center",     // ✅ centers vertically
  },
  leftSide: {
    width: "60%",
    height: "600px", // Or adjust as needed for balance
    backgroundImage:
      "url('https://images.unsplash.com/photo-1518481710357-695a502e225b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "20px 0 0 20px",
    padding: "40px",
    boxSizing: "border-box",
  },
  container: {
    backgroundColor: "#f4f6f8",
    borderRadius: "0 20px 20px 0",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
    padding: "40px",
    maxWidth: "400px",
    width: "40%",
    height: "600px", // Match leftSide height
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    boxSizing: "border-box",
  },
  card: {
    backgroundColor: "transparent",
    boxShadow: "none",
    padding: 0,
    height: "100%",
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
