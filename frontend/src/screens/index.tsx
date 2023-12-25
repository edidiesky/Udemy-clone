
import { lazy } from 'react';

const Home = lazy(() => import("./Home"));
const Cart = lazy(() => import("./Cart"));
const Auth = lazy(() => import("./Auth"));
import LayoutIndex from './Layout'
export {
    Home,
    LayoutIndex,
    Auth,
    Cart
    // SingleIndex,
    // ShopIndex
}