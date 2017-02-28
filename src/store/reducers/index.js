import { combineReducers } from 'redux';
import todoInputReducer from './todoInputReducer';
import lastIdReducer from './lastIdReducer';
import filterReducer from './filterReducer';
import todosReducer from './todosReducer';

export default combineReducers({
  todoInput: todoInputReducer,
  lastId: lastIdReducer,
  filter: filterReducer,
  todos: todosReducer,
});
