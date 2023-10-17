// import Carousel from "../common/Carousel";
import { Testimonystyles } from "./styles/testimony"
import { BsFillPlayCircleFill } from 'react-icons/bs'
const TestimonyData = [
    {
        quote: "I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
        name: "Will A",
        link: "Ultimate AWA Certified Cloud Practicioner "
    },
    {
        quote: "I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
        name: "Will A",
        link: "Ultimate AWA Certified Cloud Practicioner "
    }, {
        quote: "I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
        name: "Will A",
        link: "Ultimate AWA Certified Cloud Practicioner "
    },

]

const options2 = {
    items: 3,
    stagePadding: 10,
    nav: true,
    dots: false,
    margin: 30,
    navText: ["<", ">"],
    width: "100%",
    slideBy: 5,
    responsive: {
        0: {
            items: 2,
        },
        460: {
            items: 2,
        },
        760: {
            items: 2,
        },
        1024: {
            items: 3,
        },
    },
};


const Testimony = () => {
    return (
        <Testimonystyles className="w-100">
            <div className="w-100 background">
                <div className="w-90  testimony_wrapper auto flex column gap-2">
                    <h3 className="fs-24 text-extra-bold">How learners like you are achieving their goals</h3>
                    <div className="w-100 flex item-start gap-2">
                        {/* <Carousel className="owl-theme" options={options2}>
                            {
                                TestimonyData.map((x?: any, key?: any) => {
                                    return <div key={key} className="testimony_card w-100 flex column gap-1">
                                        <div className="w-100">
                                            <img style={{ width: "2.5rem" }} src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt="" />
                                        </div>
                                        <h4 style={{ lineHeight: "22px" }} className="fs-16 text-light text-grey">{x.quote}</h4>
                                    </div>
                                })
                            }
                        </Carousel> */}
                        {
                            TestimonyData.map((x?: any, key?: any) => {
                                return <div key={key} className="testimony_card w-100 flex column gap-1">
                                    <div className="card_top_wrapper flex column gap-2">
                                        <div className="card_top flex column gap-1">
                                            <div className="w-100">
                                                <img style={{ width: "2.5rem" }} src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt="" />
                                            </div>
                                            <h4 style={{ lineHeight: "22px" }} className="fs-16 w-85 text-light text-grey">{x.quote}</h4>

                                        </div>

                                    </div>
                                    <div style={{ lineHeight: "1.2" }} className="w-100 play flex fs-16 text-extra-bold item-center gap-1">
                                        <BsFillPlayCircleFill fontSize={'30px'} />
                                        [New] Ultimate AWS Certified Cloud Practioner - 2023
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </Testimonystyles>
    )
}

export default Testimony