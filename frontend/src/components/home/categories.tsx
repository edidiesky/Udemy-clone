import styled from "styled-components";
import { CategoriesStyles } from "./styles/categories";
import { category } from "../../data/category";
import Image from "../common/Image";
import { Link } from "react-router-dom";


const Categories = () => {
    return (
        <CategoriesStyles>
            <div className="w-90 auto flex column gap-3">
                <h3 className="fs-24 text-extra-bold">Top categories</h3>
                {/* <h3>Top categories</h3> */}
                <div className="w-100 auto category_wrapper">
                    {
                        category.map((x?: any, index?: any) => {
                            return <Link to={`/courses/${x.title}`} className="w-100 category_card flex column">
                                <div className="category_card_image w-100">
                                    <Image
                                    width={'100%'}

                                    src={x?.image}
                                    />
                                </div>
                                <h4 className="fs-16 text-dark text-bold">{x.title}</h4>
                            </Link>
                        })
                    }
                </div>
            </div>
        </CategoriesStyles>
    )
}

export default Categories