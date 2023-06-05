import styled from "styled-components"




export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #233E69;
  position: fixed;
  top: 0;
  left: ${props => (props.open ? "0" : "-100%")};
  width: 65%;
  height: 90vh;
  z-index: 1;
  transition: left 0.3s linear;

  @media only screen and (min-width: 624px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
    background: white;
  }

  a {
    padding: 0.5rem 0.8rem;
    color: #FFFF;
    text-decoration: none;
  }
`;
