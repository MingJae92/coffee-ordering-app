import { Theme } from '@mui/material';

export const outerWrapperStyle = {
  position: 'relative',
  width: '100%',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
};

export const backgroundImageStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: 0,
  filter: 'brightness(0.85)', // darkens the image for better contrast
};

export const containerStyle = (theme: Theme) => ({
  position: 'relative',
  zIndex: 1,
  backgroundColor: '#E9E7F7',
  padding: theme.spacing(8, 4),
  maxWidth: 420,
  borderRadius: 32,
  boxShadow: '0 10px 30px rgba(92, 79, 171, 0.25)',
  textAlign: 'center' as const,
  margin: '2rem',
});

export const descriptionStyle = (theme: Theme) => ({
  color: '#645CAA',
  marginTop: theme.spacing(1),
  fontWeight: 500,
  fontSize: '1rem',
  lineHeight: 1.6,
  maxWidth: 360,
  marginLeft: 'auto',
  marginRight: 'auto',
});

export const buttonContainedStyle = {
  backgroundColor: '#645CAA',
  color: '#fff',
  borderRadius: 24,
  padding: '12px 40px',
  textTransform: 'none',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  boxShadow: '0 8px 15px rgba(100, 92, 170, 0.25)',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#5149a5',
    boxShadow: '0 10px 20px rgba(81, 73, 165, 0.4)',
  },
};

export const buttonOutlinedStyle = {
  borderColor: '#645CAA',
  color: '#645CAA',
  borderRadius: 24,
  padding: '12px 40px',
  textTransform: 'none',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  '&:hover': {
    backgroundColor: '#e3e0f7',
    borderColor: '#5149a5',
    color: '#5149a5',
  },
};
