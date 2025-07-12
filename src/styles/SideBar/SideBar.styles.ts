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
    color: '#1F1D2B',             // Deep navy text color for contrast
    borderRight: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    boxSizing: 'border-box',
  },
});

// Logo / header (coffee cup)
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

// The list containing icons
export const StyledList = styled(List)({
  paddingTop: 0,
  margin: 0,
});

// Each icon list item
export const StyledListItem = styled(ListItem)({
  justifyContent: 'center',
  paddingTop: 16,
  paddingBottom: 16,
  cursor: 'pointer',
  borderRadius: 16,
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#FFB52F',  // Lighter orange on hover
    '& svg': {
      color: '#1F1D2B',          // Deep navy icon on hover
    },
  },
});

// Active (selected) icon list item
export const ActiveListItem = styled(StyledListItem)({
  backgroundColor: '#FFCF70',    // Even lighter amber for active
  '& svg': {
    color: '#1F1D2B',            // Dark icon for strong contrast
  },
});

// Icon container to center icon exactly
export const StyledListItemIcon = styled(ListItemIcon)({
  color: '#1F1D2B',              // Default icon color (deep navy)
  minWidth: 'auto',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  fontSize: 28,                  // Reduced from 126 to fit sidebar width
  userSelect: 'none',
});
