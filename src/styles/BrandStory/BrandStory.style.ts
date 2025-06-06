// src/styles/BrandStory/BrandStory.style.ts
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const BrandStoryWrapper = styled(Box)(({ theme }) => ({
  width: '100vw',
  minHeight: '100vh',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  backgroundImage: `url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  color: '#fff',
}));

export const Overlay = styled(Box)(({ }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(46, 30, 18, 0.6)', // semi-transparent overlay
  zIndex: 1,
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  maxWidth: '1200px',
  padding: theme.spacing(4),
}));
