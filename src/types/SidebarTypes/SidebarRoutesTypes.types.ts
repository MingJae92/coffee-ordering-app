import { ReactNode } from "react";

export default interface SidebarRoutes{
    path:string,
    label:string,
    icon:ReactNode
    component:ReactNode
} 