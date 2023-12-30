

import styled from "styled-components";
import { BsCart3 } from "react-icons/bs";
import Image from "./Image";
import Rating from "./Rating";

const DashboardHeader = () => {
    let userInfo = true
    return (

        <HeaderStyles className="w-100 flex column gap-2">
            <div className="w-90 auto Header_wrapper flex item-center justify-space">
                <div className="flex item-center gap-1">
                </div>
                <div className="flex item-center gap-2">
                    <div className="flex item-center profile_wrapper relative gap-4">
                        <h4 className="flex item-center justify-center fs-16 text-light text-dark">Student</h4>
                        <div className="profile_avatar flex item-center justify-center fs-16 text-extra-bold text-white">E</div>
                        <div className="profile_dropdown absolute">
                            <div className="w-100 flex column gap-2">
                                <div className="flex profile_dropdown_top auto item-center gap-1">
                                    <div className="profile_avatar_large flex item-center justify-center fs-20 text-extra-bold text-white">ED</div>
                                    <h4 className="fs-18 text-extra-bold">Edidiong Victor Essien
                                        <span className="text-light fs-12 text-grey block">essienedido!00@gmail.com</span>
                                    </h4>
                                </div>

                                <div className="flex profile_dropdown_bottom column w-100 gap-1">
                                    <span className="text-light fs-14 w-100 profile_list text-grey block">My Learning</span>
                                    <span className="text-light fs-14 w-100 profile_list text-grey block">My Cart</span>
                                    <span className="text-light fs-14 w-100 profile_list text-grey block">My wishlist</span>
                                    <span className="text-light fs-14 w-100 profile_list text-grey block">Account Settings</span>
                                    <span className="text-light fs-14 w-100 profile_list text-grey block">Profile</span>
                                    <span className="text-light fs-14 w-100 profile_list text-grey block">Log Out</span>
                                    <span className="text-light fs-14 w-100 profile_list text-grey block">Instructor Dashboard</span>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </HeaderStyles>
    )
}


export const HeaderStyles = styled.div`
    padding:1.5rem 0;
    width:100%;
    background:#fff;
    z-index:200;
    /* overflow:hidden; */
    .Header_wrapper{
        gap:2rem;
    }
    .cart_icon{
        cursor:pointer;
    }
    .profile_avatar {
        width:35px;
        height:35px;
        border-radius:50%;
        background:#2D2F31;
    }
    .profile_dropdown_top{
        padding:1.4rem 2rem;
        border-bottom:1px solid rgba(0,0,0,.1);
    }
    /* .profile_dropdown_bottom{
        padding:1rem 0;

    } */
    .profile_list{
          padding:.7rem 2rem;
        border-bottom:1px solid rgba(0,0,0,.1);
            transition:all .3s;
            cursor:pointer;

            &:nth-last-child() {
               border-bottom:none;
            }
        &:hover {
            color:var(--blue-2);
        }
    }
    .profile_avatar_large {
    width:70px;
        height:70px;
        border-radius:50%;
        background:#2D2F31;
    }

    h5 {
        @media (max-width:780px) {
            display:none;
        }
    }
        .profile_wrapper:hover  .profile_dropdown {
            opacity:1;
            transform:scale(1);
            visibility: visible;
        }
    .profile_dropdown{
        width:300px;
         opacity:0;
            transform:scale(0.8);
            transition:all .3s;
            visibility:hidden;
        box-shadow:0 2px 4px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.08);
        z-index:220;
        background:#fff;
        padding:1rem 0;
        top:170%;
        right:0%;
        .profile_card{
            padding:1.7rem 1.5rem;
            border-bottom:1px solid rgba(0,0,0,.1);
            cursor:pointer;
        }
    }
    .cart_wrapper:hover  .cart_dropdown {
            opacity:1;
            transform:scale(1);
            visibility: visible;
        }
    .cart_dropdown{
        width:300px;
         opacity:0;
            transform:scale(0.8);
            transition:all .3s;
            visibility:hidden;
        box-shadow:0 2px 4px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.08);
        z-index:220;
        background:#fff;
        padding:1rem 0;
        top:200%;
        right:40%;
        .cart_card{
            padding:1.7rem 1.5rem;
            border-bottom:1px solid rgba(0,0,0,.1);
        }
    }
    .form_input {
        border:1px solid rgba(0,0,0,.5);
        padding:1.5rem 3rem;
        background-color: var(--grey-3);
        border-radius:40px;
    }
`;



export default DashboardHeader