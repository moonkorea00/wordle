import styled from 'styled-components';

const Word = ({ guesses, currentGuess, turn }) => {
  console.log(currentGuess);
  console.log(turn);

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
          return <SingleWord key={idx} bg={el.color}>{el.key}</SingleWord>;
        });
      })}
      <ModalWrapper>
        <Modal>dd</Modal>
      </ModalWrapper>
    </Wrapper>
  );
};
const ModalWrapper = styled.main`
position: absolute;
width: 100vw;
height: 100vh;
top:0;
left: 0;
background-color: grey;
opacity: 0.2;
`;

const Modal = styled.div`
  position: relative;
  margin: 35vh 35vw;
  width: 30vw;
  height: 30vh;
  background-color: white;
  border: 1px solid black;
  z-index: 10;
`;

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
