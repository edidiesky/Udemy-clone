
import { lazy } from 'react';

const Home = lazy(() => import("./Home"));
const Cart = lazy(() => import("./Cart"));
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
import LayoutIndex from './Layout'
export {
    Home,
    LayoutIndex,
    Cart,
    Login,
    Register
    // SingleIndex,
    // ShopIndex
}