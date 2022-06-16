import styled from 'styled-components';
import CloseButton from '../buttons/CloseButton';
import { useDispatch } from 'react-redux';
import { resetGame } from '../../modules/gameData';
import { getNewSolution } from '../../modules/solutions';

const Modal = ({ alertType, turn }) => {
  const dispatch = useDispatch();
  console.log(``);
  console.log(alertType === ('guessCorrect' || 'gameOver'));
  return (
    <>
      <Overlay>
        <ModalWrapper>
          <CloseButton />
          <AlertTextWrapper>
            <AlertText alertType={alertType}>{MODAL_TYPE[alertType]}</AlertText>
            {alertType === 'guessCorrect' && (
              <AlertText>
                {TO_KOREAN[turn] === '1'
                  ? '한 번에 맞추셨네요!'
                  : `${TO_KOREAN[turn]} 번 만에 맞추셨네요!`}
              </AlertText>
            )}
          </AlertTextWrapper>
          {alertType === ('guessCorrect' || 'gameOver') && (
            <ButtonWrapper>
              <PlayAgainButton
                onClick={() => {
                  dispatch(getNewSolution());
                  dispatch(resetGame());
                }}
              >
                다시 하기
              </PlayAgainButton>
            </ButtonWrapper>
          )}
        </ModalWrapper>
      </Overlay>
    </>
  );
};

const MODAL_TYPE = {
  sameGuess: '이미 제출한 단어입니다',
  checkGuess: '5글자인 단어만 가능합니다',
  guessCorrect: '정답!',
  gameOver: 'GAME OVER',
};

const TO_KOREAN = {
  1: '한',
  2: '두',
  3: '세',
  4: '네',
  5: '다섯',
  6: '여섯',
};

const Overlay = styled.main`
  position: fixed;
  ${({ theme }) => theme.common.flexCenter};
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.7);
`;

const ModalWrapper = styled.div`
  width: 35vw;
  height: 35vh;
  padding: 0 10px 10px 10px;
  background-color: white;
  border-radius: 3%;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;

const AlertTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  height: 100px;
  border: 1px solid green;
`;

const AlertText = styled.span`
  font-weight: bold;
  color: ${({ alertType }) => alertType === 'gameOver' && 'red'};
`;

const ButtonWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  border: 1px solid red;
`;

const PlayAgainButton = styled.div`
  width: 100%100vh;
  height: 100%100vh;
  padding: 5px;
  font-size: 14px;
  border: 1px solid black;
  border-radius: 10px;

  &:hover {
    background-color: #efefef;
    cursor: pointer;
  }
`;
export default Modal;
