import { FaCog, FaMugHot, FaShoppingBag, FaUsers, FaShoppingCart, FaHome, FaReceipt, FaQuestionCircle, FaRegComments } from "react-icons/fa";
import Basket from "../../pages/Basket/Basket";
import type SidebarRoutes from "../../types/SidebarTypes/SidebarRoutesTypes.types";
import DashboardMenu from "../DashboardMenu/DashboardMenu";
import CustomerHistory from "../CustomerHistory/CustomerHistory";
import CustomerSupport from "../CustomerSupport/CustomerSupport";
import Checkout from "../../pages/Checkout/Checkout";
import DashboardHome from "../../pages/DashboardHome/DashboardHomepage";
import Receipts from "../../pages/Reciepts/Reciepts";
import CustomerFeedback from "../../pages/CustomerFeedback/CustomerFeedback";

export const SideBarRoutes: SidebarRoutes[] = [
{
  icon:< FaHome/>,
  path:"/dashboard",
  label:"Dashboard home",
  component:<DashboardHome/>,
},
  {
    icon: <FaMugHot />,
    path: "/dashboard/menu",
    label: "Menu",
    component: <DashboardMenu />,
  },
  {
    icon: <FaShoppingBag />,
    path: "/dashboard/basket",
    label: "Basket",
    component: <Basket  />,
  },
  {
    icon: <FaShoppingCart/>,
    path:"/dashboard/checkout",
    label:"Checkout",
    component:<Checkout/>,
  }
,
  {
    icon:<FaReceipt/>,
    path:"/dashboard/reciepts",
    label:"Receipts",
    component:<Receipts/>
  }
  ,
  {
    icon: <FaUsers />,
    path: "/dashboard/customer-history",
    label: "customer-history",
    component: <CustomerHistory />,
  },
  {
    icon: <FaQuestionCircle />,
    path: "/dashboard/customer-support",
    label: "customer-support",
    component: <CustomerSupport />,
  },
  {
    icon:< FaRegComments/>,
    path:"/dashboard/customer-feedback",
    label:"customer-feedback",
    component:<CustomerFeedback/>,
  }
];
