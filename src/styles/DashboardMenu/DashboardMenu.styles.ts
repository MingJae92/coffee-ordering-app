import { SxProps, Theme } from '@mui/material';

export const containerSx: SxProps<Theme> = {
  px: 4,
  py: 4,
};

export const titleSx: SxProps<Theme> = {
  fontWeight: 700,
  mb: 4,
};

export const flexWrapperSx: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 3,
  justifyContent: 'center',
};

export const cardSx: SxProps<Theme> = {
  width: 260,
  height: 380,
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 4,
  boxShadow: 3,
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.03)',
  },
};

export const cardMediaSx: SxProps<Theme> = {
  height: 180,
  objectFit: 'cover',
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
};

export const cardContentSx: SxProps<Theme> = {
  flexGrow: 1,
  mt: 1,
};
