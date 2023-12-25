import React from 'react';
import styled from 'styled-components';

import { Table } from '../common/styles';
import { courses } from "../../data/courses";
import TableCard from '../common/TableCard';

const Cart: React.FC = () => {
  return (
    <CartContainerStyles>
      <div className="w-90 auto flex column gap-8 py-4">
        <h1 className="text-extra-bold">
          Shopping Cart

        </h1>

        <div className="cart_wrapper w-100 py-4">
          <div className="flex column">
            <div className="cart_wrapper_top fs-16 text-extra-bold text-grey">4 Courses in Cart</div>
            <Table>
              <div className="TableContainer">
                <table className="tableWrapper">
                 
                  <tbody>
                    {courses?.map((x?:any, index?:any) => {
                      return <TableCard x={x} key={x?._id} />;
                    })}
                  </tbody>
                </table>
              </div>
            </Table>
          </div>
          {/* right checkout */}
          <div className="flex w-100 column gap-2">
            <div className="flex column gap-2">
              <h5 className="fs-16 text-extra-bold text-grey">Total:</h5>
              <h3 className="fs-35 text-extra-bold">₦139,600</h3>
            </div>
            <button className="fs-16 btn text-bold text-white">Checkout</button>
          </div>
        </div>
      </div>
    </CartContainerStyles>
  )
}

const CartContainerStyles = styled.div`
min-height:100vh;
width:100%;
z-index:100;
h1 {
  font-size:45px;
}
.cart_wrapper{
  display:grid;
  grid-template-columns:1fr 26%;
  grid-gap:4rem;
  @media (max-width:880px) {
    
  grid-template-columns:1fr;

  }
  .cart_wrapper_top{
    padding-bottom: 1rem;
    border-bottom:1px solid rgba(0,0,0,.1);
  }
}
.btn{
  background:#8710D8;
  padding:1.7rem 2rem;
  z-index:20;
}

  `

export default Cart