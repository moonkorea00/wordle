import styled from 'styled-components';

const Word = ({ guesses }) => {
  console.log(guesses);
  return (
    <Wrapper>
      {guesses?.map(el => {
        return el.map((li, idx) => {
          return (
            <SingleWord key={idx} bg={li.color}>
              {li.key}
            </SingleWord>
          );
        });
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  ${({ theme }) => theme.common.flexCenter}
  width: 45vw;
  flex-wrap: wrap;
  gap: 4vh 2vw;
`;

const SingleWord = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  width: 6vw;
  height: 9vh;
  font-weight: bold;
  font-size: 30px;
  background-color: ${({ bg }) => bg};
  border: 1px solid black;
  text-transform: uppercase;
`;
export default Word;
