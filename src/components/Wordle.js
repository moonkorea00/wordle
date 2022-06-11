import styled from 'styled-components';

const Wordle = ({randomSolution}) => {
  return (
    <Wrapper>
      <div>word: {randomSolution}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
`;
export default Wordle;
