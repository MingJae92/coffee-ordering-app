import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

const drawerWidth = 56;

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: 64,
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  backgroundColor: '#ffffff',
  justifyContent: 'center',
  width: `calc(100% - ${drawerWidth}px)`,
  marginLeft: drawerWidth,
  borderBottom: '1px solid #eee',
  color: '#FDA402',
}));
