import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

// Mission Wrapper with full bg image, full width and height
export const MissionWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  minHeight: '600px', // adjust as needed for height
  padding: theme.spacing(12, 2),
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  backgroundImage: `url('https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}));

// Overlay to darken background for better text readability
export const Overlay = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(46, 30, 18, 0.75)', // semi-transparent dark overlay
  zIndex: 1,
}));

// Content container to be above overlay
export const MissionContent = styled(Box)(() => ({
  position: 'relative',
  zIndex: 2,
  maxWidth: 700,
  margin: '0 auto',
}));

// Heading
export const MissionHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '2.8rem',
  color: '#f3e5dc',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

// Body Text
export const MissionText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontSize: '1.125rem',
  lineHeight: 1.8,
  color: theme.palette.grey[300],
}));
