import styled from 'styled-components';
import useAsync from '../hooks/useAsync';
import Wordle from '../components/Wordle';
import Loading from '../components/Loading';
import Error from '../components/Error';

const WordleGame = () => {
  const [state] = useAsync(() => getData());
  const { data: solution, loading, error } = state;

  const randomSolution =
    solution && solution[Math.floor(Math.random() * solution?.length)].word;

  const getData = async () => {
    const res = await fetch(`http://localhost:3002/solutions`);
    return res.json();
  };
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
