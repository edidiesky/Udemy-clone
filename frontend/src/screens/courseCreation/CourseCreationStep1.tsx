import React, {useState} from 'react'
const CourseCreationStep1 = () => {
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
                    <h2 className="fs-45 w-100 text-center text-dark">
                        First, let's find out what type of course you're making.
                    </h2>
                </div>
                {/* options */}
                <div style={{gridGap:"6rem"}} className="w-85 grid grid-2 item-center justify-center grid-gap-4">
                    
                </div>
            </div>
        </div>
    )
}



export default CourseCreationStep1