

import styled from "styled-components";

const footer_data_1 = [

    " Udemy Business",
    "Teach on Udemy",
    "Get the app",
    "About us",
    "Contact us",
    "Careers"
]
const Footer = () => {
    return (
        <FooterStyles className="w-100 flex column gap-2">
            <div className="w-90 auto footer_wrapper">
                <div className="footer_left_wrapper w-100">
                    <div className="w-100 flex column gap-1">
                        {
                            footer_data_1.map((x?:any,index?:any)=> {
                                return <div key={index} className="fs-14 text-light text-white">{x}</div>
                            })
                        }
                    </div>
                    <div className="w-100 flex column gap-1">
                        {
                            footer_data_1.map((x?: any, index?: any) => {
                                return <div key={index} className="fs-14 text-light text-white">{x}</div>
                            })
                        }
                    </div><div className="w-100 flex column gap-1">
                        {
                            footer_data_1.map((x?:any,index?:any)=> {
                                return <div key={index} className="fs-14 text-light text-white">{x}</div>
                            })
                        }
                    </div>
                </div>
                <div className="footer_right_wrapper flex justify-end w-100">
                    <span className="btn btn-2 fs-16 text-white text-extra-bold">English</span>
                </div>
            </div>
            <div className="w-90 auto flex item-center justify-space gap-1">
                <img style={{width:"100px"}} src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="" className="" />
                <h5 className="fs-12 text-light text-white">© 2023 Cdemy, Inc</h5>
            </div>
        </FooterStyles>
    )
}


export const FooterStyles = styled.div`
    padding:5rem 0;
    width:100%;
    background:#1C1D1F;
   .footer_wrapper {
    display: grid;
    grid-gap: 5rem;
    grid-template-columns: 1fr .6fr;
    place-items:flex-start;
    @media (max-width:780px) {
    grid-template-columns: 1fr;

    }
    .footer_left_wrapper {
    display: grid;
    grid-gap: 5rem;
    grid-template-columns: repeat(auto-fit,minmax(120px, 1fr));
    @media (max-width:780px) {
    grid-template-columns: 1fr;

    }
    }
   }

`;



export default Footer