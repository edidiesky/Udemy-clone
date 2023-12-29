import React from 'react';
import { Outlet } from "react-router-dom";
import OnBoardingHeader from '../components/common/OnBoardingHeader'
import OnBoardingFooter from '../components/common/OnBoardingFooter'
const OnBoardingLayout: React.FC = () => {
    return (
        <div style={{position:"relative"}}>
            <OnBoardingHeader />
            <Outlet />
            <OnBoardingFooter/>
        </div>
    )
}


export default OnBoardingLayout