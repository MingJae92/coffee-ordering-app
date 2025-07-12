import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../component/context/AuthContext";
import Sidebar from "../../component/Sidebar/Sidebar";
import { Box, Typography, Button } from "@mui/material";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {/* Other dashboard components/content here */}
      </Box>

      {/* Absolute top-right user info */}
      <Box
        sx={{
          position: "fixed", // Fix to viewport
          top: 16,
          right: 16,
          zIndex: 1300, // Higher than most content
          textAlign: "right",
          backgroundColor: "background.paper",
          boxShadow: 3,
          p: 2,
          borderRadius: 2,
        }}
      >
       
        <Typography variant="body1">Welcome {user.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={handleLogout}
          sx={{ mt: 1 }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
}

export default Dashboard;
