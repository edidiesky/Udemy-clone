import { Testimonystyles } from "./styles/testimony"
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
    }, {
        quote: "I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
        name: "Will A",
        link: "Ultimate AWA Certified Cloud Practicioner "
    },

]

const Testimony = () => {
    return (
        <Testimonystyles className="w-100">
            <div className="w-100 background">
                <div className="w-90  testimony_wrapper auto flex column gap-2">
                    <h3 className="fs-24 text-extra-bold">How learners like you are achieving their goals</h3>
                    <div className="w-100 flex item-start gap-2">
                        {
                            TestimonyData.map((x?: any, key?:any) => {
                                return <div key={key} className="testimony_card w-100 flex column gap-1">
                                    <div className="w-100">
                                        <img style={{width:"2.5rem"}} src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt="" />
                                    </div>
                                    <h4 style={{lineHeight:"22px"}} className="fs-16 text-light text-grey">{x.quote}</h4>
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