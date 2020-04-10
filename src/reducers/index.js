import { combineReducers } from 'redux';
import countries from './countries';
//import filter from './filter';

const rootReducer = combineReducers({
  countries,
  //filter,
});

export default rootReducer;