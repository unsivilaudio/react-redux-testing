import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    comments: (
        state = [
            'This is a great place',
            "I can't believe I have not been here before",
        ]
    ) => state,
});

export default rootReducer;
