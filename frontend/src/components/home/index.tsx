import React from 'react';
import styled from 'styled-components';
import Hero from './hero';
import Banner from './banner';
import CoursesSelection from './courseselection';
import Testimony from './testimony';
import Categories from './categories';
import Bussiness from './business';
import Owner from './owner';

const Home: React.FC = () => {
    return (
        <HomeStyles>
          <Hero/>
          <Banner/>
          <CoursesSelection/>
          <Testimony/>
          <Categories/>
          <Bussiness/>
          <Owner/>
        </HomeStyles>
    )
}

const HomeStyles = styled.div`
  `

export default Home