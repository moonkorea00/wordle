import { combineReducers } from 'redux';
import { solutions } from './solutions';
import { gameData } from './gameData';

const rootReducer = combineReducers({
  solutions,
  gameData,
});

export default rootReducer;
