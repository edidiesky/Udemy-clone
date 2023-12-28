

import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import User from '../components/user';
import Footer from '../components/common/Footer';
const UserIndex: React.FC = () => {
  return (
    <HomeStyles>
      <User />
      <Footer />
    </HomeStyles>
  )
}


const HomeStyles = styled.div`
  width: 100%;
  position: relative;
`

export default UserIndex