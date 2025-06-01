import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const CoreValuesWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(8, 2),
  backgroundColor: '#2e1e12',
  color: '#fff',
}));

export const ValuesGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const ValueCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#3e2a1c',
  borderRadius: 16,
  padding: theme.spacing(3),
  aspectRatio: '1 / 1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'left',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6)',
  },
}));

export const ValueTitle = styled(Typography)(({ theme }) => ({
  color: '#d3b18a',
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  fontSize: '1.25rem',
}));

export const ValueDesc = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
  fontSize: '0.95rem',
  lineHeight: 1.6,
}));
