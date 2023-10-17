import styled from "styled-components";
import { BannerStyles } from "./styles/banner";
import Image from "../common/Image";

const BannerData = [
    {
        height: "100%",
        width: '100%',
        src: "https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg"
    },
    {
        height: "100%",
        width: '100%',
        src: "https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg"
    },
    {
        height: "100%",
        width: '100%',
        src: "https://s.udemycdn.com/partner-logos/ou-v1/att.svg"
    },
    {
        height: "100%",
        width: '100%',
        src: "https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg"
    },
    {
        height: "100%",
        width: '100%',
        src: "https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg"
    },
    {
        height: "100%",
        width: '100%',
        src: "https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg"
    },
    {
        height: "100%",
        width: '100%',
        src: "https://s.udemycdn.com/partner-logos/ou-v1/citi.svg"
    },
    {
        height: "100%",
        width: '100%',
        src: 'https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg'
    }
]
const Banner = () => {
    return (
        <BannerStyles>
            <div className="banner_wrapper background w-100">
                <div className="w-85 auto flex column gap-3">
                    <h4 className="fs-24 text-grey2 text-light text-center">
                        Trusted by over 14,400 companies and millions of learners around the world
                    </h4>
                    <div className="w-100 support grid gap-2">
                        {
                            BannerData.map((data?: any, index?: any) => {
                                return <div style={{height:"5rem",width:"100%"}} className="w-100">
                                    <Image

                                        {...data}
                                    />
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </BannerStyles>
    )
}

export default Banner