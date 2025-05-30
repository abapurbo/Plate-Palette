import { createBrowserRouter } from "react-router";
import DessertCarts from "../Page/Desserts/DessertCarts";
import MainLayout from "../Layout/MainLayout"
export const router=createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                index:true,
                Component:DessertCarts,
                loader:()=>fetch('data.json')
            }
        ]
    }
])