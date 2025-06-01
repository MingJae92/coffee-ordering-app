import { Theme } from '@mui/material';

export const outerWrapperStyle = {
  position: 'relative',
  width: '100%',
  height: '80vh',
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
  height: '100vh',
  backgroundImage: "url('https://images.unsplash.com/photo-1498967228681-2c8d6f312e1f?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: 0,
  filter: 'brightness(0.7)',
};

export const overlayContentStyle = (theme: Theme) => ({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center' as const,
  maxWidth: 500,
  padding: theme.spacing(4),
  color: '#fff',
});

export const headingStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: '#fff',
};

export const descriptionStyle = (theme: Theme) => ({
  marginTop: theme.spacing(2),
  fontWeight: 400,
  fontSize: '1.1rem',
  lineHeight: 1.6,
  color: '#f5f5f5',
});

export const buttonContainedStyle = {
  backgroundColor: '#645CAA',
  color: '#fff',
  borderRadius: 24,
  padding: '12px 32px',
  textTransform: 'none',
  fontWeight: 'bold',
  fontSize: '1rem',
  boxShadow: '0 8px 15px rgba(100, 92, 170, 0.25)',
  '&:hover': {
    backgroundColor: '#5149a5',
  },
};

export const buttonOutlinedStyle = {
  borderColor: '#fff',
  color: '#fff',
  borderRadius: 24,
  padding: '12px 32px',
  textTransform: 'none',
  fontWeight: 'bold',
  fontSize: '1rem',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: '#fff',
  },
};
