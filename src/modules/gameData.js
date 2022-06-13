// state
const createGuessArr = () => {
  return [...Array(6)].map(() => {
    return [...Array(5)].map(() => {
      return { ...Object(5) };
    });
  });
};
const initialState = {
  turn: 0,
  currentGuess: '',
  // guesses: [...Array(6)],
  guesses: createGuessArr(),
  submittedGuess: [],
  alertType: '',
};

// action
const ON_CHANGE_CURRENT_GUESS = 'ON_CHANGE_CURRENT_GUESS';
const DELETE_CURRENT_GUESS = 'DELETE_CURRENT_GUESS';
const SUBMIT_CURRENT_GUESS = 'SUBMIT_CURRENT_GUESS';

const ALERT_SAME_GUESS = 'ALERT_SAME_GUESS';
const ALERT_CHECK_GUESS = 'ALERT_CHECK_GUESS';
const ALERT_GAME_OVER = 'ALERT_GAME_OVER';

const GUESS_CORRECT = 'GUESS_CORRECT';
const RESET_GAME = 'RESET_GAME';
// action 생성 함수
export const resetGame = dispatch => () => {
  {
    console.log('reset');
    return dispatch({ type: RESET_GAME });
  }
};

export const handleKeyup =
  (dispatch, getState) =>
  ({ key }) => {
    const {
      gameData,
      solutions: { solution },
    } = getState();
    const { turn, currentGuess, submittedGuess } = gameData;
    if (key === 'Enter') {
      if (currentGuess === solution) {
        console.log('good job');
        dispatch({ type: GUESS_CORRECT, alert: 'guessCorrect' });
        return;
      }
      if (turn > 5) {
        // game over, play again, solution 모달 출력
        console.log('GAME OVER');
        dispatch({ type: ALERT_GAME_OVER, alert: 'gameOver' });
        // dispatch reset action
        return;
      }
      if (submittedGuess.includes(currentGuess)) {
        // 같은 단어 제출 금지 모달 출력
        console.log('CANT SUBMIT SAME WORD');
        dispatch({ type: ALERT_SAME_GUESS, alert: 'sameGuess' });
        return;
      }
      if (currentGuess.length !== 5) {
        // 글자 수 조건 미달 모달 출력
        console.log('PLEASE ENTER 5 LETTERS');
        dispatch({ type: ALERT_CHECK_GUESS, alert: 'checkGuess' });
        return;
      } else {
        console.log('submitted');
        // submit guess
        dispatch({ type: SUBMIT_CURRENT_GUESS, solution });
      }
    }
    if (key === 'Backspace') {
      // 한 글자 삭제
      dispatch({ type: DELETE_CURRENT_GUESS });
    }
    if (/^[A-Za-z]$/.test(key)) {
      // 영문자 정규표현식 조건
      if (currentGuess.length < 5) {
        // currentGuess가 5글자일때 까지만 action dispatch
        dispatch({ type: ON_CHANGE_CURRENT_GUESS, key });
      }
    }
  };

// reducer
export const gameData = (state = initialState, action) => {
  const formatGuess = () => {
    const formattedGuess = [state.currentGuess]
      .join()
      .split('')
      .map((el, idx) => {
        const guessArr = [state.currentGuess].join().split('');
        const solutionArr = action.solution.split('');

        if (guessArr[idx] === solutionArr[idx]) {
          return { key: `${guessArr[idx]}`, color: 'green' };
        }
        if (!solutionArr.includes(guessArr[idx])) {
          return { key: guessArr[idx], color: 'grey' };
        }
        for (let i = 0; i < guessArr.length; i++) {
          if (
            solutionArr.includes(guessArr[i]) &&
            guessArr[idx] !== solutionArr[idx]
          ) {
            return { key: guessArr[idx], color: 'yellow' };
          }
        }
        return el;
      });
    let newGuessArr = [...state.guesses];
    newGuessArr[state.turn] = formattedGuess;
    return newGuessArr;
  };

  switch (action.type) {
    case ON_CHANGE_CURRENT_GUESS:
      return {
        ...state,
        currentGuess: [...state.currentGuess, action.key]
          .join('')
          .toLowerCase(),
      };
    case DELETE_CURRENT_GUESS:
      return {
        ...state,
        currentGuess: [...state.currentGuess].slice(0, -1),
      };
    case SUBMIT_CURRENT_GUESS:
      return {
        ...state,
        turn: state.turn + 1,
        currentGuess: '',
        guesses: formatGuess(),
        submittedGuess: [...state.submittedGuess, state.currentGuess],
      };
    case ALERT_SAME_GUESS:
      return {
        ...state,
        alertType: action.alert,
      };
    case ALERT_CHECK_GUESS:
      return {
        ...state,
        alertType: action.alert,
      };
    case ALERT_GAME_OVER:
      return {
        ...state,
        alertType: action.alert,
      };
    case GUESS_CORRECT:
      return {
        ...state,
        alertType: action.alert,
      };
    case RESET_GAME: {
      return initialState;
    }
    default:
      return state;
  }
};
