import React, {useState} from 'react'
const Audience = () => {
    const experienceDataList = [
        {
            id:1,
            text:"Not at the moment"
        },
        {
            id: 2,
            text: "I have a small following"
        },
        {
            id:3,
            text:"I have a sizeable following"
        },
    ]
    return (
        <div style={{minHeight:"100vh"}} className="w-100">
            <div className="w-90 auto py-4 flex column gap-4">
                <div className="flex column gap-2">
                    <h2 className="fs-45 text-dark">
                        Expand your reach
                    </h2>
                    <span className="fs-16 w-50 text-light text-grey">
                        Once you publish your course, you can grow your student audience and make an impact with the support of Udemy's marketplace promotions and also through your own marketing efforts. Together, we’ll help the right students discover your course.
                    </span>
                </div>
                {/* options */}
                <div style={{gridGap:"6rem"}} className="w-85 grid grid-2 item-center grid-gap-4">
                    <div className="flex column gap-2">
                        <h4 className="fs-20 text-bold">Do you have an audience to share your course with?</h4>
                        <div className="flex column gap-1">
                            {
                                experienceDataList?.map((x?:any, index?:any)=> {
                                return <div style={{
                                    border:"1px solid rgba(0,0,0,1)",
                                    padding:"1.4rem 3rem"
                                }} key={x?.id} className="w-100 flex fs-16 text-extra-bold text-dark item-center gap-2">{x.text}</div>
                                })
                            }
                        </div>
                    </div>
                    <img src="https://s.udemycdn.com/instructor/onboarding/expand.jpg" alt="experience" style={{width:"330px"}} />
                </div>
            </div>
        </div>
    )
}



export default Audience