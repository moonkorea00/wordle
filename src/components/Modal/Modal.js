import styled from 'styled-components';
import CloseButton from '../buttons/CloseButton';
export const Modal = () => {};
export const Overlay = styled.main`
  position: fixed;
  ${({ theme }) => theme.common.flexCenter};
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const ModalWrapper = styled.div`
  width: 35vw;
  height: 35vh;
  padding: 0 10px 10px 10px;
  background-color: white;
  border-radius: 3%;
  /* border: 1px solid black; */
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;

export const modal = {
  sameGuess: <ModalWrapper>이미 제출한 단어입니다</ModalWrapper>,
  checkGuess: <ModalWrapper>5글자인 단어만 가능합니다</ModalWrapper>,
  guessCorrect: (
    <ModalWrapper>
      <CloseButton />
      축하드립니다!
    </ModalWrapper>
  ),
  gameOver: <ModalWrapper>gameover!</ModalWrapper>,
};
