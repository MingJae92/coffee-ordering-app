// styles/NotFoundStyles.ts
import { SxProps, Theme } from "@mui/material";

export const pageContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

export const contentContainer: SxProps<Theme> = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  py: 10,
};
