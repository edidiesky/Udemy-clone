import styled from "styled-components";
import { BannerStyles } from "./styles/banner";
import { BusinessStyles } from "./styles/business";


const Bussiness = () => {
    return (
        <BusinessStyles>
            <div className="w-90 business_wrapper auto">
                <div className="w-100 flex column item-start gap-2">
                    <span style={{width:"200px"}}>
                        <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg" alt="" />
                    </span>
                    <h2>
                        Upskill your team with Cdemy Business

                    </h2>
                    <span className="block fs-18 text-grey text-light">
                        Unlimited access to 25,000+ top Udemy courses, anytime, anywhere
                    </span>
                    <div className="w-100 flex item-center gap-2">
                        <button className="fs-16 btn text-bold text-white">Get Cdemy Business</button>
                        <button className="fs-16 btn btn-1 text-bold text-white">Learn More</button>
                    </div>

                </div>
                <div className="w-100">
                    <img src="https://s.udemycdn.com/home/non-student-cta/UB_Promo_800x800.jpg" alt="" className="w-100" />
                </div>
            </div>
        </BusinessStyles>
    )
}

export default Bussiness