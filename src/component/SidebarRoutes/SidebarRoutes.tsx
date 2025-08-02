import { FaCog, FaMugHot, FaShoppingCart, FaUsers } from "react-icons/fa";
import Basket from "../../pages/Basket/Basket";
import type SidebarRoutes from "../../types/SidebarTypes/SidebarRoutesTypes.types";
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import CustomerHistory from "../CustomerHistory/CustomerHistory";
import AccountSettings from "../AccountSettings/AccountSettings";

export const SideBarRoutes: SidebarRoutes[] = [
  {
    icon: <FaShoppingCart />,
    path: "/dashboard/basket",
    label: "Basket",
    component: <Basket />,
  },
  {
    icon: <FaMugHot />,
    path: "/dashboard/menu",
    label: "Menu",
    component: <DashboardMenu />,
  },
  {
    icon: <FaUsers />,
    path: "/dashboard/customer-history",
    label: "customer-history",
    component: <CustomerHistory />,
  },
  {
    icon: <FaCog />,
    path: "/dashboard/account-settings",
    label: "account-settings",
    component: <AccountSettings />,
  },
];
