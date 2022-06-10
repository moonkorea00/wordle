import styled from 'styled-components';

const Nav = () => {
  return (
    <NavWrapper>
      <Title>Wordle</Title>
    </NavWrapper>
  );
};

const NavWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2vh 0;
  border-bottom: 1px solid lightgrey;
`;
const Title = styled.h1``;
export default Nav;
