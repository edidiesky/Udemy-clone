

import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import Home from '../components/teaching/hero';
import Footer from '../components/common/Footer';
const HomeIndex: React.FC = () => {
  return (
    <HomeStyles>
      <Home />
      <Footer />
    </HomeStyles>
  )
}


const HomeStyles = styled.div`
  width: 100%;
  position: relative;
`

export default HomeIndex