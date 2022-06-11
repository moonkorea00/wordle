import styled from 'styled-components';
import { fetchSolutions } from '../modules/solutions';
import Wordle from '../components/Wordle';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useEffect } from 'react';

const WordleGame = () => {
  const {
    loading,
    data: solution,
    error,
  } = useSelector(
    state => ({
      loading: state.solutions.loading,
      data: state.solutions.data,
      error: state.solutions.error,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  const randomSolution =
    solution && solution[Math.floor(Math.random() * solution?.length)].word;
    
  useEffect(() => {
    dispatch(fetchSolutions(`http://localhost:3002/solutions`));
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <>
      <WordleGameWrapper>
        <Wordle randomSolution={randomSolution} />
      </WordleGameWrapper>
    </>
  );
};

const WordleGameWrapper = styled.main`
  ${({ theme }) => theme.common.flexCenter}
`;
export default WordleGame;
