// 상태
const initialState = {
  solutions: { loading: false, data: null, error: null },
};

// action
const GET_SOLUTIONS_SUCCESS = 'GET_SOLUTIONS_SUCCESS';
const GET_SOLUTIONS_LOADING = 'GET_SOLUTIONS_LOADING';
const GET_SOLUTIONS_ERROR = 'GET_SOLUTIONS_ERROR';

// action 생성함수
export const fetchSolutions = (url, cb) => async dispatch => {
  dispatch({ type: GET_SOLUTIONS_LOADING });
  try {
    const res = await fetch(url);
    const data = await res.json();
    dispatch({ type: GET_SOLUTIONS_SUCCESS, data });
    (cb && cb()) || console.log(`no cb passed`);
  } catch (e) {
    dispatch({ type: GET_SOLUTIONS_ERROR, e });
  }
};

// reducer
export const solutions = (state = initialState, action) => {
  switch (action.type) {
    case GET_SOLUTIONS_SUCCESS:
      return {
        solutions: {
          loading: false,
          data: action.data,
          error: null,
        },
      };
    case GET_SOLUTIONS_LOADING:
      return {
        solutions: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_SOLUTIONS_ERROR:
      return {
        solutions: {
          loading: false,
          data: null,
          error: action.e,
        },
      };
    default:
      return state;
  }
};
