
import { lazy } from 'react';
const Home = lazy(() => import("./Home"));
const Cart = lazy(() => import("./Cart"));
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
import User from './User'
import TeachingExperience from './onBoarding/Teaching'
import VideoExperience from './onBoarding/VideoExperience'
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
    TeachingExperience,
    VideoExperience
    // SingleIndex,
    // ShopIndex
}