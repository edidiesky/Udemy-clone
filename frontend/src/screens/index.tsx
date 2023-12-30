
import { lazy } from 'react';
const Home = lazy(() => import("./Home"));
const Cart = lazy(() => import("./Cart"));
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
import User from './User'
import TeachingExperience from './onBoarding/Teaching'
import VideoExperience from './onBoarding/VideoExperience'
import Audience from './onBoarding/Audience'
import CourseCreationStep1 from './courseCreation/CourseCreationStep1'
import CourseCreationStep2 from './courseCreation/CourseCreationStep2'
import CourseCreationStep3 from './courseCreation/CourseCreationStep3'
import LayoutIndex from './Layout'
import OnBoardingLayout from './OnBoardingLayout'
import CourseCreationLayout from './CourseCreationLayout'
export {
    Home,
    LayoutIndex,
    Cart,
    Login,
    Register,
    User,
    OnBoardingLayout,
    TeachingExperience,
    VideoExperience,
    Audience,
    CourseCreationLayout,
    CourseCreationStep1,
    CourseCreationStep2,
    CourseCreationStep3
    // SingleIndex,
    // ShopIndex
}