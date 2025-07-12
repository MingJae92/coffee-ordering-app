import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';

export const drawerWidth = 56;  // Slightly wider to fit icons comfortably

// Sidebar container
export const StyledDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    backgroundColor: '#F69B09',   // Primary amber-orange
    color: '#1F1D2B',             // Deep navy text color
    borderRight: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    boxSizing: 'border-box',
  },
});

// Logo / header (coffee cup or brand text)
export const SidebarHeader = styled('div')({
  fontSize: 30,
  textAlign: 'center',
  marginBottom: '1rem',
  color: '#1F1D2B',
  cursor: 'default',
  fontWeight: 600,
  letterSpacing: 2,
  userSelect: 'none',
});

// List container for icons
export const StyledList = styled(List)({
  paddingTop: 0,
  margin: 0,
  flex: 1,                      // Take full vertical space between header and footer if any
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',     // Center children vertically
});


// Each icon list item
export const StyledListItem = styled(ListItem)({
  justifyContent: 'center',
  paddingTop: 10,
  paddingBottom: 10,
  cursor: 'pointer',
  borderRadius: 16,
  transition: 'background-color 0.3s ease',

  '&:hover': {
    backgroundColor: '#FFB52F', // lighter orange on hover
    '& svg': {
      color: '#1F1D2B',
      filter: 'grayscale(0)',    // full color on hover
    },
  },
});

// Active (selected) icon list item
export const ActiveListItem = styled(StyledListItem)({
  backgroundColor: '#FFCF70',
  '& svg': {
    color: '#1F1D2B',
    filter: 'grayscale(0)',      // full color for active
  },
});

// Icon container
export const StyledListItemIcon = styled(ListItemIcon)({
  color: '#1F1D2B',
  minWidth: 'auto',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  fontSize: 20,
  userSelect: 'none',
  filter: 'grayscale(1)',         // greyscale by default
  transition: 'filter 0.3s ease, color 0.3s ease',
});
