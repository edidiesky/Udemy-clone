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
        <div className="w-100">
            <div className="w-90 auto py-4 flex column gap-4">
                <div className="flex column gap-2">
                    <h2 className="fs-45 text-dark">
                        Share your knowledge
                    </h2>
                    <span className="fs-16 w-50 text-light text-grey">Udemy courses are video-based experiences that give students the chance to learn actionable skills. Whether you have experience teaching, or it’s your first time, we’ll help you package your knowledge into an online course that improves student lives.</span>
                </div>
                {/* options */}

                <h4 className="fs-20 text-bold">What kind of teaching have you done before?</h4>
            </div>
        </div>
    )
}



export default TeachingExperience