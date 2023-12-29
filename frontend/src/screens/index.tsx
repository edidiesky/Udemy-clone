
import { lazy } from 'react';

const Teaching = lazy(() => import("./Teaching"));
const Home = lazy(() => import("./Home"));
const Cart = lazy(() => import("./Cart"));
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
import User from './User'
import TeachingExperience from './onBoarding/Teaching'
import LayoutIndex from './Layout'
import OnBoardingLayout from './OnBoardingLayout'
export {
    Home,
    LayoutIndex,
    Cart,
    Login,
    Register,
    User,
    OnBoardingLayout,
    TeachingExperience
    // SingleIndex,
    // ShopIndex
}