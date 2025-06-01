import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const MissionWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(8, 2),
  backgroundColor: '#3e2a1c',
  color: '#fff',
  textAlign: 'center',
}));

export const MissionText = styled(Typography)(({ theme }) => ({
  maxWidth: 700,
  margin: '0 auto',
  color: theme.palette.grey[300],
}));
