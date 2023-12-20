// import Carousel from "../common/Carousel";
import { courses } from "../../data/courses";
import Image from "../common/Image";
import Rating from "../common/Rating";
import { Testimonystyles } from "./styles/testimony"
import { BsFillPlayCircleFill } from 'react-icons/bs'


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


const Learners = () => {
    return (
        <Testimonystyles className="w-100">
            <div className="w-100 ">
                <div className="w-90  testimony_wrapper auto flex column gap-2">
                    <h3 className="fs-24 text-extra-bold">Learners are viewing</h3>
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
                            courses.map((x?: any, key?: any) => {
                                return <div key={key} className="w-100 flex column">
                                    <div className="w-100">
                                        <Image
                                            width={"100%"}
                                            height={'100%'}
                                            src={x?.image}
                                            placeholderSrc={x?.image}
                                        />
                                    </div>
                                    <h4 style={{lineHeight:"21px"}} className="fs-16 text-extra-bold">{x?.title}
                                    <span className="fs-13 text-light block text-grey2">{x?.tutor}</span>
                                    </h4>
                                    <h5 style={{ lineHeight: "21px", margin: "4px 0" }} className="fs-14 gap-1 flex item-center text-extra-bold">{x?.rating}
                                        <Rating value={x?.rating}/>
                                        <span className="fs-13 text-light block text-grey2">({x?.student})</span>
                                    </h5>
                                    <h4 style={{ lineHeight: "20px",fontSize:"16.5px" }} className="fs-16 flex item-center gap-1 text-extra-bold">
                                        
                                        #{x?.price}
                                        <span style={{textDecoration:"line-through"}} className="text-light fs-14 text-grey2">#{x?.discount_price}</span>
                                    </h4>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </Testimonystyles>
    )
}

export default Learners