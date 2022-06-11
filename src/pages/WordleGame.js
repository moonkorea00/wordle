import styled from 'styled-components';
import { fetchSolutions } from '../modules/solutions';
import { handleKeyup } from '../modules/gameData';
import Wordle from '../components/Wordle';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { API } from '../config';

const WordleGame = () => {
  const {
    loading,
    data: solution,
    error,
  } = useSelector(
    state => ({
      loading: state.solutions.solutions.loading,
      data: state.solutions.solutions.data,
      error: state.solutions.solutions.error,
    }),
    shallowEqual
  );
  const { currentGuess } = useSelector(state => ({
    currentGuess: state.gameData.currentGuess,shallowEqual
  }));
  console.log(currentGuess);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSolutions(`${API.solutions}`));
  }, []);

  useEffect(() => {
    window.addEventListener('keyup', dispatch(handleKeyup));

    return () => window.removeEventListener('keyup', dispatch(handleKeyup));
  }, [handleKeyup]);

  const randomSolution = useMemo(() => {
    return (
      solution && solution[Math.floor(Math.random() * solution?.length)].word
    );
  }, [solution]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <WordleGameWrapper>
        this is current guess: {currentGuess}---
        <Wordle randomSolution={randomSolution} />
      </WordleGameWrapper>
    </>
  );
};

const WordleGameWrapper = styled.main`
  ${({ theme }) => theme.common.flexCenter}
`;
export default WordleGame;
