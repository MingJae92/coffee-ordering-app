import { Navigate } from 'react-router-dom';
import { useAuth } from '../../component/context/AuthContext';
import Sidebar from '../../component/Sidebar/Sidebar';
import { Box } from '@mui/material';
import DashboardHeader from '../../component/DashboardHeader/DashboardHeader';

function Dashboard() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <DashboardHeader />

      {/* Main dashboard content */}
      <Box sx={{ mt: 8, p: 3, width: '100%' }}>
       
      </Box>
    </Box>
  );
}

export default Dashboard;
