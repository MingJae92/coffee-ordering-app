import React, { useState } from "react";
import { Box } from "@mui/material";
import {
  FaCoffee,
  FaChartLine,
  FaUser,
  FaShoppingCart,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import {
  StyledDrawer,
  SidebarHeader,
  StyledList,
  StyledListItem,
  StyledListItemIcon,
  ActiveListItem,
  drawerWidth,
} from "../../styles/SideBar/SideBar.styles";

const Sidebar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const links = [
    { icon: <FaCoffee />, label: "Dashboard" },
    { icon: <FaShoppingCart />, label: "Orders" },
    { icon: <FaChartLine />, label: "Analytics" },
    { icon: <FaUser />, label: "Customers" },
    { icon: <FaCog />, label: "Settings" },
  ];

  return (
    <StyledDrawer
      variant="permanent"
      anchor="left"
      open
      sx={{ width: drawerWidth }}
    >
      <SidebarHeader>☕</SidebarHeader>

      <StyledList>
        {links.map((item, idx) =>
          idx === activeIndex ? (
            <ActiveListItem
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={item.label}
            >
              <StyledListItemIcon>{item.icon}</StyledListItemIcon>
            </ActiveListItem>
          ) : (
            <StyledListItem
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={item.label}
            >
              <StyledListItemIcon>{item.icon}</StyledListItemIcon>
            </StyledListItem>
          )
        )}
      </StyledList>

      <Box>
        <StyledListItem
          onClick={() => alert("Logout clicked")}
          aria-label="Logout"
        >
          <StyledListItemIcon>
            <FaSignOutAlt />
          </StyledListItemIcon>
        </StyledListItem>
      </Box>
    </StyledDrawer>
  );
};

export default Sidebar;
