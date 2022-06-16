import styled from 'styled-components';

const Word = ({ guesses, currentGuess, turn }) => {
  

  return (
    <Wrapper>
      {guesses?.map((el, idx) => {
        if (turn === idx) {
          const currentGuessToArr = [...currentGuess];
          return (
            <Wrapper key={idx}>
              {currentGuessToArr?.map((el, idx) => {
                return <SingleWord key={idx}>{el}</SingleWord>;
              })}
              {[...Array(5 - currentGuessToArr.length)].map((el, idx) => {
                return <SingleWord key={idx}></SingleWord>;
              })}
            </Wrapper>
          );
        }
        return el.map((el, idx) => {
          return (
            <SingleWord key={idx} bg={el.color}>
              {el.key}
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
