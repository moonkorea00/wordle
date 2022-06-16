// 상태
const initialState = {
  solutions: { loading: false, data: null, error: null },
  solution: null,
  hint: null,
};

// action
const GET_SOLUTIONS_SUCCESS = 'GET_SOLUTIONS_SUCCESS';
const GET_SOLUTIONS_LOADING = 'GET_SOLUTIONS_LOADING';
const GET_SOLUTIONS_ERROR = 'GET_SOLUTIONS_ERROR';
const GET_NEW_SOLUTION = 'GET_NEW_SOLUTION';
const CALC_HINT = 'CALC_HINT';

// action 생성함수
export const fetchSolutions = (url, cb) => async (dispatch, getState) => {
  const {
    solutions: { solution },
  } = getState();
  dispatch({ type: GET_SOLUTIONS_LOADING });
  try {
    const res = await fetch(url);
    const data = await res.json();
    dispatch({ type: GET_SOLUTIONS_SUCCESS, data });
    dispatch({ type: CALC_HINT }, solution);
    (cb && cb()) || console.log(`no cb passed`);
  } catch (e) {
    dispatch({ type: GET_SOLUTIONS_ERROR, e });
  }
};

export const getNewSolution = () => (dispatch, getState) => {
  const {
    solutions: {
      solutions: { data },
    },
  } = getState();
  dispatch({ type: GET_NEW_SOLUTION, data });
  dispatch({ type: CALC_HINT });
};
// reducer
export const solutions = (state = initialState, action) => {
  switch (action.type) {
    case GET_SOLUTIONS_SUCCESS:
      return {
        ...state,
        solutions: {
          loading: false,
          data: action.data,
          error: null,
        },
        solution:
          action.data[Math.floor(Math.random() * action.data.length)].word,
      };
    case GET_SOLUTIONS_LOADING:
      return {
        ...state,
        solutions: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_SOLUTIONS_ERROR:
      return {
        ...state,
        solutions: {
          loading: false,
          data: null,
          error: action.e,
        },
      };
    case CALC_HINT:
      return {
        ...state,
        hint: state.solution[Math.floor(Math.random() * 5)],
      };
    case GET_NEW_SOLUTION:
      return {
        ...state,
        solution:
          action.data[Math.floor(Math.random() * action.data.length)].word,
      };

    default:
      return state;
  }
};
