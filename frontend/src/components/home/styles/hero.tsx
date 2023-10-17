import styled from "styled-components";

export const HeroStyles = styled.div`
  min-height: 40rem;
  width: 100%;
  position: relative;
  .hero_Wrapper{
    position: absolute;
    transition: all 1s;
  }
  .image_wrapper {
    height: 100%;
    position: absolute;
  }
  .header_wrapper{
    padding-top: 5rem;
  }
  .header {
    box-shadow: var(--shadow);
    background-color: #fff;
    z-index: 35;
    padding: 2rem 3rem;
    max-width: 500px;
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
