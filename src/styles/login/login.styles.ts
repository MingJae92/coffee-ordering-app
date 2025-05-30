import { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  wrapper: {
    width: "100vw",
    minHeight: "80vh",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "flex-end", // keeps container right aligned
    alignItems: "center",
    padding: "20px",
  },
  leftSide: {
    width: "60%", // left side takes 60% of width
    minHeight: "80vh",
    backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "20px 0 0 20px", // rounded corners only left side
  },
  container: {
    backgroundColor: "#f4f6f8",
    borderRadius: "0 20px 20px 0", // rounded corners only right side
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
    padding: "40px",
    maxWidth: "400px",
    width: "40%", // container takes 40% width to the right
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  card: {
    backgroundColor: "transparent",
    boxShadow: "none",
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
