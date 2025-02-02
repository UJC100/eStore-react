

import { lazy } from "react";
import Home from "./pages/Home";




const Products = lazy(() => import("./pages/Products"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/checkout"));
const Login = lazy(() => import("./pages/Login"));

export const appRoutes = [
    {
        path: "/",
        component: Home,
        requiresAuth: false
    },
    {
        path: "/products/:category?",
        component: Products,
        requiresAuth: false
    },
    {
        path: "/cart",
        component: Cart,
        requiresAuth: false
    },
    {
        path: "/checkout",
        component: Checkout,
        requiresAuth: true
    },
    {
        path: "/login",
        component: Login,
        requiresAuth: false
    },
]