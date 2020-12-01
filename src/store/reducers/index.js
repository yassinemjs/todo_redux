import { combineReducers } from 'redux';

import todoReducer from './todoReducer';
import filterTodoReducer from './filterTodoReducer';

const rootReducer = combineReducers({
 todoReducer,
 filterTodoReducer
});

export default rootReducer;
