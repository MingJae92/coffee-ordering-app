import React, { useState } from 'react';
import {
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
  InputBase,
  Paper,
  Modal,
  Fade,
  Backdrop,
  Button,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { StyledAppBar } from '../../styles/DashboardHeader/DashboardHeader.styles';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const DashboardHeader: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const handleLogout = () => {
    setOpenModal(true);
  };

  const confirmLogout = () => {
    logout();
    setOpenModal(false);
    navigate('/login');
  };

  return (
    <>
      <StyledAppBar position="fixed" elevation={0}>
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            position: 'relative',
            px: 3,
          }}
        >
          {/* Left: Dashboard Title */}
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#FDA402' }}>
            COFFEE AND CODE
          </Typography>

          {/* Center: Search Bar */}
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 300,
            }}
          >
            <Paper
              component="form"
              sx={{
                p: '2px 8px',
                display: 'flex',
                alignItems: 'center',
                borderRadius: 4,
                backgroundColor: '#f5f5f5',
                width: '100%',
                boxShadow: 'none',
              }}
            >
              <SearchIcon sx={{ color: '#999' }} />
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search coffee..."
                inputProps={{ 'aria-label': 'search coffee' }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Paper>
          </Box>

          {/* Right: Notification + Avatar */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton>
              <NotificationsIcon sx={{ color: '#1F1D2B' }} />
            </IconButton>

            <IconButton onClick={handleLogout}>
              <Avatar
                alt={user?.name}
                src={user?.avatarUrl}
                sx={{ width: 40, height: 40 }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </StyledAppBar>

      {/* Modal */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
        }}
      >
        <Fade in={openModal}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 320,
              bgcolor: 'background.paper',
              boxShadow: 24,
              borderRadius: 2,
              p: 4,
              textAlign: 'center',
            }}
          >
            <Avatar
              alt={user?.name}
              src={user?.avatarUrl}
              sx={{ width: 70, height: 70, margin: '0 auto', mb: 2 }}
            />
            <Typography variant="subtitle1" gutterBottom>
              Logged in as
            </Typography>
            <Typography variant="body1" fontWeight="bold" gutterBottom>
              {user?.email}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={confirmLogout}
              sx={{ mt: 2 }}
            >
              Confirm Logout
            </Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default DashboardHeader;
