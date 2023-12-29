import React, {useState} from 'react'
const VideoExperience = () => {
    const experienceDataList = [
        {
            id:1,
            text:"I am a beginner"
        },
        {
            id: 2,
            text: "I have some knowledge"
        },
        {
            id:3,
            text:"I am experienced"
        },
        {
            id: 4,
            text: "I have videos to upload"
        }
    ]
    return (
        <div style={{minHeight:"100vh"}} className="w-100">
            <div className="w-90 auto py-4 flex column gap-4">
                <div className="flex column gap-2">
                    <h2 className="fs-45 text-dark">
                        Create a course
                    </h2>
                    <span className="fs-16 w-50 text-light text-grey">
                        Over the years we’ve helped thousands of instructors learn how to record at home. No matter your experience level, you can become a video pro too. We’ll equip you with the latest resources, tips, and support to help you succeed.
                    </span>
                </div>
                {/* options */}

                <div className="w-85 grid grid-2 item-center gap-4">
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
                    <img src="https://s.udemycdn.com/instructor/onboarding/create.jpg" alt="experience" style={{width:"330px"}} />
                </div>
            </div>
        </div>
    )
}



export default VideoExperience