import { FaShoppingCart } from "react-icons/fa";
import Basket from "../../pages/Basket/Basket";
import type SidebarRoutes from "../../types/SidebarTypes/SidebarRoutesTypes.types";

export const SideBarRoutes: SidebarRoutes[] = [
  {icon: <FaShoppingCart /> ,path: "/dashboard/basket", label: "Basket", component:<Basket/> }, // ✅ corrected key

];
