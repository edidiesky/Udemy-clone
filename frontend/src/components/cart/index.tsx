import React from 'react';
import styled from 'styled-components';

import { Table } from '../common/styles';
import { courses } from "../../data/courses";
import TableCard from '../common/TableCard';

const Cart: React.FC = () => {
  return (
    <CartContainerStyles>
      <div className="w-90 cart_container auto flex column gap-8 py-4">
        <h1 className="text-extra-bold">
          Shopping Cart
        </h1>
        {/* cart */}
        <div className="cart_wrapper w-100 py-4">
          <div className="flex column">
            <div className="cart_wrapper_top fs-16 text-extra-bold text-grey">4 Courses in Cart</div>
            {
              courses.length !== 0 ? <div className="cart_none w-100">
                <div className="w-100 flex item-center column gap-2 justify-center">
                  <img src="https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2.jpg" alt="" style={{ width: '250px' }} />
                  <div className="flex column item-center gap-1">
                    <h4 className="fs-16 text-bold text-blue">Your cart is empty. Keep shopping to find a course!</h4>
                    <div className="btn btn-2 fs-16 text-bold">Keep Shopping</div>
                  </div>
                </div>
              </div> :
                <Table>
                  <div className="TableContainer">
                    <table className="tableWrapper">

                      <tbody>
                        {courses?.map((x?: any, index?: any) => {
                          return <TableCard x={x} key={x?._id} />;
                        })}
                      </tbody>
                    </table>
                  </div>
                </Table>
            }

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

        {/* wishlist */}
        <div className=" w-100 py-4">
          <div className="flex column">
            <div className="cart_wrapper_top fs-16 text-extra-bold text-grey">Recently wishlisted</div>
            <Table>
              <div className="TableContainer">
                <table className="tableWrapper">

                  <tbody>
                    {courses?.slice(0,2)?.map((x?: any, index?: any) => {
                      return <TableCard x={x} key={x?._id} />;
                    })}
                  </tbody>
                </table>
              </div>
            </Table>

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
  .cart_wrapper_top{
    padding-bottom: 1rem;
    border-bottom:1px solid rgba(0,0,0,.1);
  }
.cart_container{
  padding:4rem;
   @media (max-width:780px) {
  padding:4rem 2rem;

  }
}
.cart_none{
   padding:4rem 1rem;
   border:1px solid rgba(0,0,0,.1);
   margin-top:1rem;
}
.cart_wrapper{
  display:grid;
  grid-template-columns:1fr 26%;
  grid-gap:4rem;
  @media (max-width:880px) {
    
  grid-template-columns:1fr;

  }

}
.btn{
  background:#8710D8;
  padding:1.7rem 2rem;
  z-index:20;
}

  `

export default Cart