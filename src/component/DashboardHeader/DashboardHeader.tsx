import React, { useState } from 'react';
import {
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
  InputBase,
  Paper,
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

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
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
          Dashboard
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

          <IconButton>
            <Avatar
              alt={user?.name}
              src={user?.avatarUrl}
              sx={{ width: 40, height: 40 }}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default DashboardHeader;
