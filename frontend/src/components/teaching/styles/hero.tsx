import styled from "styled-components";

export const HeroStyles = styled.div`
  min-height: 60rem;
  width: 100%;
  position: relative;
    z-index:100;
    /* padding:20rem 0; */

  .hero_Wrapper{
    position: absolute;
    transition: all 1s;
  }
  .image_wrapper {
    height: 100%;
    img {
      object-fit:cover;
      width:100%;
      height:100%;
    }
  }
  .header_wrapper{
    padding-top: 5rem;
  }
  .header {
    z-index: 35;
    padding: 2rem 3rem;
    h2 {
      font-size:50px;
      line-height:1.2;
    }

    span {
      line-height:1.2;
    }
    .btn {
      padding:2rem 0;
    }
    .btn, h2, span {
      width:32rem;
      @media (max-width:780px) {
        width:70%;
      }

      @media (max-width:580px) {
        width:90%;
      }
    }
  }
   .btnArrow {
    position: absolute;
    width: 4rem;
    height: 4rem;
    top: 50%;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: all 0.4s;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: var(--shadow);
    z-index: 30;
    background-color: #333;
    font-size: 30px;
    transform: translateY(-50%);
    &.left {
      left: 2%;
    }
    &.right {
      right: 4%;
    }

    svg {
      color: #fff;
    }
  }
`;
