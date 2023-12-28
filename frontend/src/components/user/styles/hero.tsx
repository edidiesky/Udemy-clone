import styled from "styled-components";

export const HeroStyles = styled.div`
padding:6rem 0;
.user_profile_wrapper {
  max-width:81rem;
  display:grid;
  grid-gap: 6rem;
  grid-template-columns:1fr 20%;
  @media (max-width:880px) {
  display:flex;
  flex-direction:column-reverse;
  gap:6rem;

  }
}
`;
