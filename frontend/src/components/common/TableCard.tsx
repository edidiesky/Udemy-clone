import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import moment from "moment";
import { MdEdit } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import Rating from "./Rating";
type TableCardProps = {
    x?: any;
    type?: any;
}
const TableCard: React.FC<TableCardProps> = ({ x, type }) => {
    let createddate = moment(x?.createdAt);
    createddate = createddate.format("MMMM Do YYYY");
    const navigate = useNavigate();

    // // delete product function
    // const handleDeleteProduct = () => {
    //     dispatch(getProduct(x));
    // };

    // // Handling Order Navigation
    // const handleOrderNav = () => {
    //     navigate(`/car-dealership/${x?._id}/order`)
    // };

    // // edit product function
    // const handleEditProduct = () => {
    //     navigate(`/car-dealership/dashboard/product/${x?._id}`);
    // };

    // // delete user function
    // const handleDeleteUser = () => {
    //     dispatch(getUser(x));
    // };

    // // edit user function
    // const handleEditUser = () => {
    //     navigate(`/car-dealership/dashboard/customer/${x?._id}`);
    // };

    // if (type === "users") {
    //     return (
    //         <>
    //             <Delete type="users" />
    //             <tr key={x?._id}>
    //                 <td>{x?._id}</td>
    //                 <td>{x?.firstname}</td>
    //                 <td>{x?.lastname}</td>
    //                 <td>{x?.email}</td>
    //                 <td>{x?.country}</td>
    //                 <td>
    //                     {x?.isAdmin ? (
    //                         <AiOutlineCheck className="true" />
    //                     ) : (
    //                         <FaTimes className="false" />
    //                     )}
    //                 </td>
    //                 <td>
    //                     <div className="action">
    //                         <div className="icons" onClick={handleDeleteUser}>
    //                             <BsTrash />
    //                         </div>
    //                         <div className="icons" onClick={handleEditUser}>
    //                             <MdEdit />
    //                         </div>
    //                     </div>
    //                 </td>
    //             </tr>
    //         </>
    //     );
    // }
    // if (type === "orders") {
    //     return (
    //         <tr key={x?._id}>
    //             <td>{x?._id}</td>
    //             <td>{createddate}</td>
    //             <td>
    //                 {x?.createdBy?.firstname} {x?.createdBy?.lastname}
    //             </td>

    //             <td>${x?.TotalShoppingPrice}</td>
    //             <td>
    //                 {x?.isPaid ? (
    //                     <span className="tablespan true">Paid</span>
    //                 ) : (
    //                     <span className="tablespan false">Not Paid</span>
    //                 )}
    //             </td>
    //             <td>
    //                 {x?.isDelivered ? (
    //                     <span className="tablespan true">Delivered</span>
    //                 ) : (
    //                     <span className="tablespan false">Not Delivered</span>
    //                 )}
    //             </td>
    //             <td>
    //                 <div className="action">
    //                     <Link
    //                         className="details"
    //                         to={`/car-dealership/${x?._id}/order`}
    //                     >
    //                         See Details
    //                     </Link>
    //                 </div>
    //             </td>
    //         </tr>
    //     );
    // }

    // if (type === "orders1") {
    //     return (
    //         <tr key={x?._id}>
    //             <td>{x?._id}</td>
    //             <td>{createddate}</td>
    //             <td>
    //                 {x?.createdBy?.firstname} {x?.createdBy?.lastname}
    //             </td>
    //             <td>{x?.createdBy?.email}</td>
    //             <td>${x?.TotalShoppingPrice}</td>
    //             <td>
    //                 <div className="action">
    //                     <h4 className="details" onClick={handleOrderNav}>
    //                         See Details
    //                     </h4>
    //                 </div>
    //             </td>
    //         </tr>
    //     );
    // }
    return (
        <>
            {/* <Delete /> */}
            <tr key={x?._id}>
                <td>{x?._id}</td>
                <td>
                    <div className="flex item-center gap-1">
                        {x?.image && <img style={{ width: "120px" }} src={x?.image} alt="images" />}
                        <span className="fs-16 text-extra-bold text-dark">
                            {x?.title}
                            <span className="block text-light fs-12">{x?.tutor}</span>
                            <span style={{ lineHeight: "21px", margin: "4px 0" }} className="fs-14 gap-1 flex item-center text-extra-bold">{x?.rating}
                                <Rating value={x?.rating} />
                                <span className="fs-13 text-light block text-grey2">({x?.student} ratings)</span>
                                <span className="fs-13 text-light block text-grey2">22 Hours</span>
                            </span>
                        </span>
                    </div>
                </td>

                <td>
                    <span className="text-blue fs-16 text-bold">Remove</span>
                </td>
                <td>
                    <span className="fs-16 text-extra-bold block text-grey">${x?.price}</span>

                </td>
            </tr>
        </>
    );
}


export default TableCard