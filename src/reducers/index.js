import { combineReducers } from 'redux';
import { usersReducer, userReducer } from './userReducers';


export default combineReducers({
  users: usersReducer,
  user: userReducer,

  
});
