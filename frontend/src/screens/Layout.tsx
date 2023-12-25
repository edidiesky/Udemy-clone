import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../components/common/Footer';

const LayoutIndex: React.FC = () => {
    return (
        <>
            <Outlet />
            <Footer/>
        </>
    )
}


export default LayoutIndex