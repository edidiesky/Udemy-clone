import React from "react"
import Image from "../common/Image"
import { HeroStyles } from "./styles/hero"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"

const data = {
    height: "100%",
    width: '100%',
    src: "./images/hero-2.jpg"
}
const HeroData = [
    {
        head: {
            text: "Learning that gets you",
            subText: "Skills for your present (and your future). Get started with us.",
            btnText: ""
        },
        background: {
            height: "100%",
            width: '100%',
            src: "./images/hero-1.jpg"
        }
    },
    {
        head: {
            text: "Build ready-for-anything teams",
            subText: "See why leading organizations choose to learn with Udemy Business.",
            btnText: "Request a demo"
        },
        background: {
            height: "100%",

            width: '100%',
            src: "./images/hero-2.jpg"
        }
    }
]

const Hero = () => {
    const [tabindex, setTabIndex] = React.useState(0);
    // React.useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTabIndex(tabindex === HeroData?.length -1  ? 0 : tabindex + 1);
    //     }, 6000);
    //     return () => clearInterval(interval);
    // }, [setTabIndex, tabindex]);
    const handleImagePosition = (position?: string) => {
        if (position === "left") {
            setTabIndex(tabindex < 0 ? HeroData?.length - 1 : tabindex + 1);
        }
        if (position === "right") {
            setTabIndex(tabindex >= HeroData?.length - 1 ? 0 : tabindex - 1);
        }
    };
    // console.log(tabindex)
    return (
        <HeroStyles>
            <div className="w-100 h-100">
                {
                    HeroData.map((x?: any, index?: any) => {
                        return <div key={index} className="w-100 h-100 absolute">
                            <div
                                style={{ transform: `translateX(-${tabindex * 100}%)` }}
                                className="w-100 h-100 hero_Wrapper absolute">
                                <div
                                    className="btnArrow shadow right"
                                    onClick={() => handleImagePosition("right")}
                                >
                                    <BiChevronRight />
                                </div>
                                <div
                                    className="btnArrow shadow left"
                                    onClick={() => handleImagePosition("left")}
                                >
                                    <BiChevronLeft />
                                </div>
                                <div style={{ zIndex: "35" }} className="absolute w-100 h-100">
                                    <div className="w-85 h-100 auto header_wrapper flex item-start justify-start">
                                        <div className="header items-start flex column gap-1">
                                            <h2 className="text-bold">
                                                {x.head.text}

                                            </h2>
                                            <span className="block text-light family1 fs-18 text-grey">{x.head.subText}</span>
                                            <div className="w-100">
                                                {
                                                    x.head.btnText && <button className="fs-16 btn text-bold text-white">{x.head.btnText}</button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="image_wrapper h-100 w-100">
                                    <Image

                                        {...data}
                                    />
                                </div>

                            </div>
                        </div>
                    })
                }
                {/* <div className="image_wrapper h-100 w-100">
                    <Image

                        {...data}
                    />
                </div> */}

            </div>
        </HeroStyles>
    )
}

export default Hero