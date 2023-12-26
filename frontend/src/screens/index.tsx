
import { lazy } from 'react';

const Home = lazy(() => import("./Home"));
const Cart = lazy(() => import("./Cart"));
const Auth = lazy(() => import("./Auth"));
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
import LayoutIndex from './Layout'
export {
    Home,
    LayoutIndex,
    Auth,
    Cart,
    Login,
    Register
    // SingleIndex,
    // ShopIndex
}