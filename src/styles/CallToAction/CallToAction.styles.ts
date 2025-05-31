import { Theme } from '@mui/material';

export const containerStyle = (theme: Theme) => ({
  width: '100%',
  backgroundColor: '#f6f6f6',
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  paddingX: theme.spacing(2),
  textAlign: 'center',
});

export const descriptionStyle = (theme: Theme) => ({
  maxWidth: '500px',
});
