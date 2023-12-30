import React, {useState} from 'react'
import styled from 'styled-components'
const CourseCreationStep2 = () => {
    return (
        <CourseCreationStep1Styles style={{minHeight:"100vh"}} className="w-100">
            <div className="w-90 auto py-4 flex column gap-4">
                <div className="flex column gap-2">
                    <h2 className="fs-45 w-100 text-center text-dark">
                        How about a working title?
                    </h2>
                    <span className="fs-16 text-center w-100 w-50 text-light text-grey">
                        It's ok if you can't think of a good title now. You can change it later.
                    </span>
                </div>
                {/* options */}
                <div className="form_wrapper auto flex item-center justify-center">
                    <input type="text" placeholder='e.g. Learn PhotoShop CS6 form Scratch' className="input w-100" />
                </div>
            </div>
        </CourseCreationStep1Styles>
    )
}

const CourseCreationStep1Styles = styled.div`
  .form_wrapper {
    width:500px;
    @media (max-width:680px) {
        width:90%;
    }
  }
`

export default CourseCreationStep2