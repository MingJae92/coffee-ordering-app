import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const CoreValuesWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(8, 2),
  backgroundColor: '#2e1e12',
  color: '#fff',
}));

export const ValueCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#3e2a1c',
  borderRadius: 12,
  height: '100%',
  textAlign: 'left',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
}));

export const ValueTitle = styled(Typography)(({ theme }) => ({
  color: '#d3b18a',
  fontWeight: 600,
  marginBottom: theme.spacing(1),
}));

export const ValueDesc = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
}));
