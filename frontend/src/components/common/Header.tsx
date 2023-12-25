

import styled from "styled-components";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
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
                    <div className="cart_wrapper flex item--center justify-center">
                        <BsCart3 fontSize={'24px'} color={'var(--dark-1)'} />
                    </div>
                    <div className="flex item-center gap-1">
                        <button className="fs-14 btn text-bold text-white">Login</button>
                        <button className="fs-14 btn btn-1 text-bold text-white">Sign up</button>
                    </div>
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
    .Header_wrapper{
        gap:2rem;
    }
    .form_input {
        border:1px solid rgba(0,0,0,.5);
        padding:1.5rem 3rem;
        background-color: var(--grey-3);
        border-radius:40px;
    }
`;



export default Header