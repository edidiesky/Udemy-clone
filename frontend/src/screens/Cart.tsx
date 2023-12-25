

import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import Cart from '../components/cart';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
const CrtIndex: React.FC = () => {
  return (
    <HomeStyles>
      <Header/>
      <Cart />
      <Footer />
    </HomeStyles>
  )
}


const HomeStyles = styled.div`
  width: 100%;
  position: relative;
`

export default CrtIndex