import React, { useState } from "react";
import {
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
  Button,
  Modal,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { StyledAppBar } from "../../styles/DashboardHeader/DashboardHeader.styles";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const DashboardHeader: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <StyledAppBar position="fixed" elevation={0}>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700, color: "#FDA402" }}>
            Dashboard
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton>
              <NotificationsIcon sx={{ color: "#1F1D2B" }} />
            </IconButton>


            <IconButton onClick={() => setOpen(true)}>
              <Avatar
                alt={user?.name}
                src={user?.avatarUrl} 
                sx={{ width: 24, height: 24 }} 
              />
            </IconButton>
          </Box>
        </Toolbar>
      </StyledAppBar>

      {/* Logout Modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="user-modal-title"
        aria-describedby="user-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar
            alt={user?.name}
            src={user?.avatarUrl} // Google avatar URL here too
            sx={{ width: 64, height: 64 }}
          />
          <Typography variant="subtitle1" fontWeight={600}>
            {user?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user?.email}
          </Typography>
          <Button onClick={handleLogout} variant="outlined" color="error" fullWidth>
            Logout
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default DashboardHeader;
