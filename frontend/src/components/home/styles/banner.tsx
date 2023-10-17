import styled from "styled-components";

export const BannerStyles = styled.div`
  width: 100%;
  margin: 5rem 0;
  .banner_wrapper{
    padding: 6rem 0;
  }
  .support {
    display: grid;
    grid-gap: 5rem;
    grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
  }
`;
