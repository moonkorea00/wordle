import styled from 'styled-components';
import { fetchSolutions } from '../modules/solutions';
import { handleKeyup } from '../modules/gameData';
import { resetGame } from '../modules/gameData';
import Wordle from '../components/Word';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useEffect } from 'react';
import { API } from '../config';
import { modal } from '../components/Modal';
const WordleGame = () => {
  const { loading, error, randomSolution, alertType } = useSelector(
    state => ({
      loading: state.solutions.solutions.loading,
      error: state.solutions.solutions.error,
      randomSolution: state.solutions.solution,
      alertType: state.gameData.alertType,
    }),
    shallowEqual
  );
  const { currentGuess, guesses } = useSelector(state => ({
    currentGuess: state.gameData.currentGuess,
    guesses: state.gameData.guesses,
  }));
  // 리덕스에서 상태의 변화가 서로에게 미치는 영향...
  // 분리해서 추출해야되나?

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSolutions(`${API.solutions}`));
  }, [dispatch]);

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
      <span>!!!!!!</span>
      <WordleGameWrapper>
        solution: {randomSolution}
        <Wordle guesses={guesses} />
        {alertType && (
          <div onClick={dispatch(resetGame)}>{modal[alertType]}</div>
        )}
      </WordleGameWrapper>
    </>
  );
};

const WordleGameWrapper = styled.main`
  ${({ theme }) => theme.common.flexColumn}
`;
export default WordleGame;
