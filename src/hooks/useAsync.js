import { useEffect, useReducer } from 'react';

const ACTION = {
  SUCCESS: 'success',
  LOADING: 'loading',
  ERROR: 'error',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: false,
      };
    case ACTION.LOADING:
      return {
        loading: true,
        data: null,
        error: false,
      };
    case ACTION.ERROR:
      return {
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
const useAsync = (callback, deps = [], skip = false) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: false,
  });

  const fetchData = async () => {
    dispatch({ type: ACTION.LOADING });
    try {
      const res = await callback();
      dispatch({ type: ACTION.SUCCESS, payload: res });
    } catch (e) {
      dispatch({ type: ACTION.ERROR, payload: e });
    }
  };

  useEffect(() => {
    if (skip) return;
    fetchData();
  }, deps);

  return [state, fetchData];
};

export default useAsync;
