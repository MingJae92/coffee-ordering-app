import React, { useState } from "react";
import { Box } from "@mui/material";
import {
  StyledDrawer,
  SidebarHeader,
  StyledList,
  StyledListItem,
  StyledListItemIcon,
  ActiveListItem,
  drawerWidth,
} from "../../styles/SideBar/SideBar.styles";
import { SideBarRoutes } from "../SidebarRoutes/SidebarRoutes";
import { Link } from "react-router-dom"; // ✅ Step 1

const Sidebar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <StyledDrawer
      variant="permanent"
      anchor="left"
      open
      sx={{ width: drawerWidth }}
    >
      <StyledList>
        {SideBarRoutes.map((item, idx) => {
          const ListItemComponent =
            idx === activeIndex ? ActiveListItem : StyledListItem;

          return (
            <Link
              to={item.path} // ✅ Step 2: Set route
              key={idx}
              style={{ textDecoration: "none", color: "inherit" }} // Optional: remove link styling
              onClick={() => setActiveIndex(idx)} // ✅ Highlight current link
            >
              <ListItemComponent aria-label={item.label}>
                <StyledListItemIcon>{item.icon}</StyledListItemIcon>
              </ListItemComponent>
            </Link>
          );
        })}
      </StyledList>
    </StyledDrawer>
  );
};

export default Sidebar;
