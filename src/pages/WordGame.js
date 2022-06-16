import styled from 'styled-components';
import { fetchSolutions, showHint } from '../modules/solutions';
import { handleKeyup } from '../modules/gameData';
import { resetGame } from '../modules/gameData';
import Wordle from '../components/Word';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useEffect } from 'react';
import { API } from '../config';
import { modal, Overlay } from '../components/Modal/Modal';

const WordleGame = () => {
  const { loading, error, alertType, hint,randomSolution } = useSelector(
    state => ({
      loading: state.solutions.solutions.loading,
      error: state.solutions.solutions.error,
      randomSolution: state.solutions.solution,
      alertType: state.gameData.alertType,
      hint: state.solutions.hint,
    }),
    shallowEqual
  );
  const { turn, currentGuess, guesses } = useSelector(state => ({
    turn: state.gameData.turn,
    currentGuess: state.gameData.currentGuess,
    guesses: state.gameData.guesses,
  }));

  // 리덕스에서 상태의 변화가 서로에게 미치는 영향...
  // 분리해서 추출해야되나?

  const dispatch = useDispatch();
  console.log(`1`);
  useEffect(() => {
    dispatch(fetchSolutions(`${API.solutions}`));
  }, [dispatch]);
  console.log(`2`);
  useEffect(() => {
    window.addEventListener('keyup', dispatch(handleKeyup));
    return () => window.removeEventListener('keyup', dispatch(handleKeyup));
  }, [dispatch]);

  // const randomSolution = useMemo(() => {
  //   return (
  //     solution && solution[Math.floor(Math.random() * solution?.length)].word
  //   );
  // }, [solution]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <Hint onClick={() => alert(`단어 하나 드리겠습니다...${hint}`)}>
        Hint
      </Hint>
      <WordleGameWrapper>
        <div>solution: {randomSolution}</div>

        <Wordle guesses={guesses} currentGuess={currentGuess} turn={turn} />
        {alertType && (
          <Overlay>{modal[alertType]}</Overlay>
          // <div onClick={dispatch(resetGame)}>{modal[alertType]}</div>
        )}
      </WordleGameWrapper>
    </>
  );
};

const Hint = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  /* margin: 20px 0 0 */
width: 40px;
  height: 40px;
  border: 1px solid black;
  cursor: pointer;
`;

const WordleGameWrapper = styled.main`
  ${({ theme }) => theme.common.flexCenter}/* margin-top: 6.5vh; */
`;
export default WordleGame;
