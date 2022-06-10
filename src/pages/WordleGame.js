import useAsync from '../hooks/useAsync';
import Wordle from '../components/Wordle';

const WordleGame = () => {
  const [state] = useAsync(() => getData());
  const { data: solution } = state;
  console.log(solution);
  const getData = async () => {
    const res = await fetch(`http://localhost:3002/solutions`);
    return res.json();
  };

  return (
    <>
      <Wordle />
    </>
  );
};

export default WordleGame;
