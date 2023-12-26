

import styled from "styled-components";
import { BsCart3 } from "react-icons/bs";
import Image from "./Image";
import Rating from "./Rating";
import { courses } from "../../data/courses";

const Header = () => {
    let cart = []
    let userInfo = true
    return (

        <HeaderStyles className="w-100 flex column gap-2">
            <div className="w-90 auto Header_wrapper flex item-center justify-space">
                <div className="flex item-center gap-1">
                    <img style={{ width: "90px" }} src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="" className="" />
                    <h5 className="fs-14 text-light text-grey family1">Categories</h5>
                </div>
                <div className="flex-1 item-center">
                    <input type="text" placeholder='Search for anything' className="form_input family1 w-100 fs-14" />
                </div>
                <div className="flex item-center gap-2">
                    <h5 className="fs-14 text-light text-grey family1">Cdemy Business</h5>
                    <h5 className="fs-14 text-light text-grey family1">Teach on Cdemy</h5>
                    {
                        userInfo && <h5 className="fs-14 text-light text-grey family1">My Learning</h5>
                    }
                    <div className="cart_wrapper relative flex item--center justify-center">
                        <span className="cart_icon flex item-center justify-center">
                            <BsCart3 fontSize={'24px'} color={'var(--dark-1)'} />
                        </span>
                        <div className="cart_dropdown absolute">
                            {
                                courses?.length === 0 ?
                                    <div className="w-100 flex column gap-1">
                                        <div className="w-100 py-1 text-center fs-16 text-light family1 text-grey">
                                            Your Cart is empty

                                            <span className="text-blue block text-bold">Keep Shopping</span>
                                        </div>
                                    </div> :
                                    <div className="w-100 flex column gap-1">
                                        {
                                            courses?.slice(0, 2)?.map((x?: any, key?: any) => {
                                                return <div key={key} className="w-100 cart_card flex gap-1">

                                                    <Image
                                                        width={"100px"}
                                                        height={'100%'}
                                                        src={x?.image}
                                                        placeholderSrc={x?.image}
                                                    />
                                                    <div className="flex column">
                                                        <h4 style={{ lineHeight: "1.2" }} className="fs-14 text-bold">{x?.title}
                                                        </h4>
                                                        <h5 style={{ lineHeight: "21px" }} className="fs-12 family1 gap-1 flex item-center text-light text-grey">{x?.tutor}
                                                        </h5>
                                                        <h4 style={{ lineHeight: "20px" }} className="fs-14 family1 flex item-center gap-1 text-extra-bold">

                                                            #{x?.price}
                                                        </h4>
                                                    </div>
                                                </div>
                                            })
                                        }
                                        <div className="w-90 auto flex column gap-1">
                                            <span className="fs-20 block text-extra-bold">Total: <span>#103330</span>

                                            </span>

                                            <button className="fs-16 btn text-bold text-white">Go to Cart</button>

                                        </div>
                                    </div>

                            }
                        </div>
                    </div>
                    {
                        userInfo ? <div className="flex item-center profile_wrapper relative gap-1">
                            <div className="profile_avatar flex item-center justify-center fs-16 text-extra-bold text-white">E</div>
                             <div className="profile_dropdown absolute">
                           
                        </div>

                        </div> : <div className="flex item-center gap-1">
                            <button className="fs-14 btn text-bold text-white">Login</button>
                            <button className="fs-14 btn btn-1 text-bold text-white">Sign up</button>
                        </div>
                    }
                  
                </div>
            </div>
        </HeaderStyles>
    )
}


export const HeaderStyles = styled.div`
    padding:2rem 0;
    width:100%;
    background:#fff;
    box-shadow:0 2px 4px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.08);
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
         /* opacity:0;
            transform:scale(0.8);
            transition:all .3s;
            visibility:hidden; */
        box-shadow:0 2px 4px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.08);
        z-index:220;
        background:#fff;
        padding:1rem 0;
        top:200%;
        right:40%;
        .profile_card{
            padding:1.7rem 1.5rem;
            border-bottom:1px solid rgba(0,0,0,.1);
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



export default Header