import React from 'react';
import { List, ListItemText } from '@mui/material';
import {
  ReceiptLong as OrdersIcon,
  MenuBook as MenuIcon,
  People as CustomersIcon,
  RateReview as ReviewsIcon,
  CardGiftcard,
  Favorite,
  HelpOutline,
  LocalCafe,
  Person,
  ShoppingCart,
} from '@mui/icons-material';

import {
  StyledDrawer,
  SidebarHeader,
  StyledListItem,
  StyledListItemIcon,
} from '../../styles/SideBar/SideBar.styles';

const Sidebar = () => {
  const menuItems = [
     { text: 'Order Coffee', icon: <LocalCafe /> },
    { text: 'My Orders', icon: <ShoppingCart /> },
    { text: 'Favorites', icon: <Favorite /> },
    { text: 'Account', icon: <Person /> },
    { text: 'Rewards', icon: <CardGiftcard /> },
    { text: 'Help', icon: <HelpOutline /> },

  ];

  return (
    <StyledDrawer variant="permanent" anchor="left">
      <SidebarHeader>My App</SidebarHeader>
      <List>
        {menuItems.map(({ text, icon }, index) => (
          <StyledListItem  key={index}>
            <StyledListItemIcon>{icon}</StyledListItemIcon>
            <ListItemText primary={text} />
          </StyledListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default Sidebar;
