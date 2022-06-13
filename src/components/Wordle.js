import styled from 'styled-components';

const Wordle = ({currentGuess}) => {
  console.log(currentGuess)
  return (
    <Wrapper>
      <div>current guess: {currentGuess}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.common.flexColumn}
`;
export default Wordle;
