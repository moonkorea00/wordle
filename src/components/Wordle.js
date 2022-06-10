import styled from 'styled-components';

const Wordle = solution => {
  return (
    <Wrapper>
      <div>word</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
`;
export default Wordle;
