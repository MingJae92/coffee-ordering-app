// src/components/coffeeMenuStyles.ts
import { SxProps, Theme } from '@mui/material';

const coffeeMenuStyles: Record<string, SxProps<Theme>> = {
  wrapper: {
    p: 4,
  },
  card: {
    borderRadius: 4,
    boxShadow: 3,
  },
  media: {
    height: 200,
  },
  title: {
    fontWeight: 'bold',
  },
  description: {
    mb: 1,
  },
  price: {
    color: 'primary.main',
    fontWeight: 'bold',
  },
};

export default coffeeMenuStyles;
