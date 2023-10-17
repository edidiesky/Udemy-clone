import { CoursesSelectionStyles } from "./styles/courseselection"

const CoursesSelection = () => {
    return (
        <CoursesSelectionStyles className="w-100">
            <div className="w-90 auto flex column gap-2">
                {/* top */}
                <div className="w-100 auto flex column gap-2">
                    <h2>
                        A broad selection of courses

                    </h2>
                    <span className="block fs-18 text-grey text-light">
                        Choose from over 210,000 online video courses with new additions published every month
                    </span>

                </div>
                <div className="w-100 flex column">
                    {/* tab selection */}
                    <div className="w-100"></div>
                    <div className="course_wrapper flex column gap-1">
                        <div className="w-100 flex column gap-1">
                            <h3 className="fs-24 text-extra-bold">Expand your career opportunities with Python
                                <span style={{ maxWidth: "60%", paddingTop: "1.6rem" }} className="fs-18 block text-grey text-light">JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage. With JavaScript online classes, you can learn to build</span>
                            </h3>
                            <div className="w-100">
                                <button className="btn btn-1 fs-14 text-bold">Explore Javascript</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CoursesSelectionStyles>
    )
}

export default CoursesSelection