// 상태
const initialState = {
  // turn: 0,
  // currentGuess: '',
  // guesses: [],
  // history: [],
  // isCorrect: false,
  loading: false,
  data: null,
  error: null,
};

// action
const GET_SOLUTIONS_SUCCESS = 'GET_SOLUTIONS_SUCCESS';
const GET_SOLUTIONS_LOADING = 'GET_SOLUTIONS_LOADING';
const GET_SOLUTIONS_ERROR = 'GET_SOLUTIONS_ERROR';

// action 생성함수
export const fetchSolutions = (url, callback) => async dispatch => {
  dispatch({ type: GET_SOLUTIONS_LOADING });
  try {
    const res = await fetch(url);
    const data = await res.json();
    dispatch({ type: GET_SOLUTIONS_SUCCESS, data });
    callback && callback();
  } catch (e) {
    dispatch({ type: GET_SOLUTIONS_ERROR, e });
  }
};

// reducer
export const solutions = (state = initialState, action) => {
  switch (action.type) {
    case GET_SOLUTIONS_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    case GET_SOLUTIONS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_SOLUTIONS_ERROR:
      return {
        ...state,
        error: action.e,
      };
    default:
      return state;
  }
};
