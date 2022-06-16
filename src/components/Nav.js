import styled from 'styled-components';
import logo from '.././logo.svg';

const Nav = () => {
  return (
    <NavWrapper>
      <Title> 단어 맞춰보아</Title>
      <ReactLogo src={logo} alt="" />
    </NavWrapper>
  );
};

export const NavWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2vh 0;
  border-bottom: 1px solid lightgrey;
  background-color: #24292e;
`;
const Title = styled.h1`
  color: white;
`;

const ReactLogo = styled.img`
  height: 6vh;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 8s linear;
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
export default Nav;
