import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../component/context/AuthContext';
import Sidebar from '../../component/Sidebar/Sidebar';
import { Box, Typography } from '@mui/material';
import DashboardHeader from '../../component/DashboardHeader/DashboardHeader';

function Dashboard() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <DashboardHeader />
        <Box sx={{ mt: 8, p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Welcome {`${user.name}` }!
          </Typography>

          <Outlet /> {/* Renders /dashboard child components like /dashboard/basket */}
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
