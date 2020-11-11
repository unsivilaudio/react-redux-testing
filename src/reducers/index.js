import { combineReducers } from 'redux';
import comments from './commentReducer';

const rootReducer = combineReducers({
    comments,
});

export default rootReducer;
