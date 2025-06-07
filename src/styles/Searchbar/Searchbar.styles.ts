import { SxProps, Theme } from '@mui/material/styles';

export const searchBarContainer: SxProps<Theme> = {
  width: '100%',
  maxWidth: 400,
  margin: '10px auto', // 16px top & bottom margin for equal vertical spacing
  boxSizing: 'border-box',
};

export const searchInput: SxProps<Theme> = {
  width: '100%',
  boxSizing: 'border-box',
};
