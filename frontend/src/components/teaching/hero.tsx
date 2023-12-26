import React from "react"
import Image from "../common/Image"
import { HeroStyles } from "./styles/hero"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import Header from "../common/Header"

const data = {
    height: "100%",
    width: '100%',
    src: "./images/hero-2.jpg"
}
const HeroData = [
    {
        head: {
            text: "Come teach with us",
            subText: "Become an instructor and change lives — including your own",
            btnText: "Get Started"
        },
        background: {
            height: "100%",
            width: '100%',
            src: "https://s.udemycdn.com/teaching/billboard-desktop-v4.jpg"
        }
    },
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
        <>
            <Header />
            <HeroStyles>
                <div className="w-100 h-100">
                    {
                        HeroData.map((x?: any, index?: any) => {
                            return <div key={index} className="w-100 h-100 absolute">
                                <div
                                    className="w-100 h-100 hero_Wrapper absolute">
                                  
                                    <div style={{ zIndex: "35" }} className="absolute w-100 h-100">
                                        <div className="w-90 h-100 auto header_wrapper flex item-start justify-start">
                                            <div className="header h-100 justify-center items-start flex column gap-2">
                                                <h2 className="text-bold fs-50">
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
                                       <img
                                            src={x?.background?.src}
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
        </>
    )
}

export default Hero