import { combineReducers } from 'redux';
import comments from './commentReducer';
import authenticated from './authReducer';

const rootReducer = combineReducers({
    comments,
    authenticated,
});

export default rootReducer;
