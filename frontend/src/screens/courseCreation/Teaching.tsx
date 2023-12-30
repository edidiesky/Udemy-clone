import React, {useState} from 'react'
const TeachingExperience = () => {
    const experienceDataList = [
        {
            id:1,
            text:"In Person formally"
        },
        {
            id: 2,
            text: "In Person, Professionally"
        },
        {
            id:3,
            text:"Online"
        },
        {
            id: 4,
            text: "Other"
        }
    ]
    return (
        <div style={{minHeight:"100vh"}} className="w-100">
            <div className="w-90 auto py-4 flex column gap-4">
                <div className="flex column gap-2">
                    <h2 className="fs-45 text-dark">
                        Share your knowledge
                    </h2>
                    <span className="fs-16 w-50 text-light text-grey">Udemy courses are video-based experiences that give students the chance to learn actionable skills. Whether you have experience teaching, or it’s your first time, we’ll help you package your knowledge into an online course that improves student lives.</span>
                </div>
                {/* options */}

                <div style={{ gridGap: "6rem" }} className="w-85 grid grid-2 item-center grid-gap-4">
                    <div className="flex column gap-2">
                        <h4 className="fs-20 text-bold">What kind of teaching have you done before?</h4>
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
                    <img src="https://s.udemycdn.com/instructor/onboarding/share.jpg" alt="experience" style={{width:"330px"}} />
                </div>
            </div>
        </div>
    )
}



export default TeachingExperience