import styled from "styled-components";

export const BusinessStyles = styled.div`
    padding:10rem 0;
width:100%;
   .business_wrapper {
     display: grid;
     width:65%;
    grid-gap: 5rem;
    padding:0 4rem;
    grid-template-columns: 1fr .6fr;
    @media (max-width:780px) {
    grid-template-columns: 1fr;

    }
   }

`;
