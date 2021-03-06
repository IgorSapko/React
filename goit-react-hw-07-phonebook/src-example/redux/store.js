import { createStore, combineReducers } from 'redux';

// import { composeWithDevTools } from 'redux-devtools-extension';
import postReducer from './posts/postReducer';
import usersReducer from './users/usersReducer';
import todoReducer from './todo/todoReducer';

const rootReducer = combineReducers({
    posts: postReducer,
    users: usersReducer,
    todo: todoReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;