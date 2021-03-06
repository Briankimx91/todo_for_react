import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todosReducer from './todo_reducer'; //todoReducer is the whole function from todo_reducer


export default combineReducers(
    {
        todos: todosReducer,
        form: formReducer
    }
);
