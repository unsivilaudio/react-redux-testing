import * as ActionTypes from './types';

const createComment = comment => {
    return {
        type: ActionTypes.CREATE_COMMENT,
        payload: comment,
    };
};

const deleteComment = id => {
    return {
        type: ActionTypes.DELETE_COMMENT,
        payload: id,
    };
};

const setComments = comments => {
    return {
        type: ActionTypes.SET_COMMENTS,
        payload: comments,
    };
};

const fetchComments = () => {
    return {
        type: ActionTypes.FETCH_COMMENTS,
    };
};

export { createComment, fetchComments, setComments, deleteComment };
