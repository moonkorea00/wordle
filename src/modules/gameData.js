// state
const initialState = {
  turn: 0,
  currentGuess: '',
  guesses: [],
  history: [],
  isCorrect: false,
};

// action
const ON_CHANGE_CURRENT_GUESS = 'ON_CHANGE_CURRENT_GUESS';

// action 생성 함수
export const handleKeyup =
  (dispatch, getState) =>
  ({ key }) => {
    if (/^[A-Za-z]$/.test(key)) {
      if (getState().gameData.currentGuess.length < 5) {
        dispatch({ type: ON_CHANGE_CURRENT_GUESS, key });
      }
    }
  };

// reducer
export const gameData = (state = initialState, action) => {
  switch (action.type) {
    case ON_CHANGE_CURRENT_GUESS:
      return {
        ...state,
        currentGuess: [...state.currentGuess, action.key],
      };
    default:
      return state;
  }
};
