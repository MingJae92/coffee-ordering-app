import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';

export const drawerWidth = 240;

export const StyledDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    backgroundColor: '#1e1e2f',
    color: '#fff',
    borderRight: 'none',
  },
});

export const SidebarHeader = styled('div')({
  padding: 16,
  fontSize: 20,
  fontWeight: 'bold',
  borderBottom: '1px solid #333',
  textAlign: 'center',
  color: '#fff',
});

export const StyledListItem = styled(ListItem)({
  '&:hover': {
    backgroundColor: '#333',
  },
});

export const StyledListItemIcon = styled(ListItemIcon)({
  color: '#fff',
});
