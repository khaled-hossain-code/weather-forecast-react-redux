import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  weather: weatherReducer
});

export default rootReducer;
