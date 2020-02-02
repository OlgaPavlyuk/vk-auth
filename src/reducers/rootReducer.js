import { combineReducers } from 'redux';
import { loginReducer } from './login';
import { searchReducer } from './search';

export const rootReducer = combineReducers({
  login: loginReducer,
  search: searchReducer,
});
