import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { PiVideoFill } from "react-icons/pi";
import { TbMessage } from "react-icons/tb";
import { IoMdStats } from "react-icons/io";
import { SiCodereview } from "react-icons/si";
import { BsFillPeopleFill } from "react-icons/bs";
export const sidebarData = [
    {
        icon: <PiVideoFill />,
        title: "Courses",
        path: "",
    },
    {
        icon: <TbMessage />,
        title: "Messages",
        path: "messages",
    }, {
        icon: <IoMdStats />,
        title: "Overview",
        path: "overview",
    }, {
        icon: <SiCodereview />,
        title: "Reviews",
        path: "reviews",
    }, {
        icon: <BsFillPeopleFill />,
        title: "Students",
        path: "students",
    },
];
const DashboardSidebar = () => {
    return (

        <HeaderStyles className="w-100 flex column gap-2">
            <div className="100 Header_wrapper flex item-center column justify-space gap-4">
                <h4 className="fs-35 w-90 auto text-center text-extra-bold text-white">U</h4>
                <ul className="flex column w-100">
                    {sidebarData.map((x) => {
                        return (
                            <NavLink
                                className={({ isActive, isPending }) =>
                                    isActive ? "active fs-16 text-extra-bold" : "fs-16 text-extra-bold"
                                }
                                to={`/instructor/${x.path}`}
                                end
                            >
                                {x.icon}
                                {/* <span>{x.title}</span> */}
                            </NavLink>
                        );
                    })}
                </ul>
            </div>
        </HeaderStyles>
    )
}


export const HeaderStyles = styled.div`
    padding:2rem 0;
    width:6rem;
    background:#2D2F31;
    position:absolute;
    top:0;
    left:0;
    height:100%;
    bottom:0;

     a {
        padding: 17px 0;
        font-size: 1.36rem;
        min-height: 5rem;
        font-weight: 500;
        margin: 0 auto;
        width: 100%;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        position: relative;
        @media (max-width: 1180px) {
          padding: 10px 0;
          justify-content: center;
          flex-direction:column;
          gap:1rem;
        }

        &:hover {
          background: #3e4143;
        }
        svg {
          font-size: 2.4rem;
        }
        &.active {
          position: relative;
          background:#3e4143;
          color: #fff;
          &:after {
          position: absolute;
          background:#A435F0;
          width: 4px;
          height: 100%;
          left: 0;
          top: 0;
          content:"";
          }
        }
      }
`;



export default DashboardSidebar