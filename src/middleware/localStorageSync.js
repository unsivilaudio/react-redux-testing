import * as ActionTypes from '../actions/types';

export default store => next => action => {
    if (action.type === ActionTypes.SET_COMMENTS) {
        localStorage.setItem('comments', JSON.stringify(action.payload));
    }
    if (action.type === ActionTypes.FETCH_COMMENTS) {
        const comments = JSON.parse(localStorage.getItem('comments'));
        if (!action.payload && comments.length > 0) {
            action.payload = comments;
            store.dispatch({
                type: ActionTypes.SET_COMMENTS,
            });
        }
    }
    next(action);
};
