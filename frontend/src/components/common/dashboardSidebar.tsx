

import styled from "styled-components";
import { BsCart3 } from "react-icons/bs";

const DashboardSidebar = () => {
    return (

        <HeaderStyles className="w-100 flex column gap-2">
            <div className="w-90 auto Header_wrapper flex item-center justify-space">

                <div className="flex item-center gap-2">
                    <button className="fs-16 btn text-bold text-white">Continue</button>
                </div>
            </div>
        </HeaderStyles>
    )
}


export const HeaderStyles = styled.div`
    padding:1.9rem 0;
    width:6rem;
    background:#2D2F31;
    position:absolute;
    top:0;
    left:0;
`;



export default DashboardSidebar