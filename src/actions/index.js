import * as ActionTypes from './types';

function syncStorage(comments) {
    localStorage.setItem('comments', JSON.stringify(comments));
}

function getStorage() {
    return JSON.parse(localStorage.getItem('comments')) || [];
}

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
    syncStorage(comments);
    return {
        type: ActionTypes.SET_COMMENTS,
    };
};

const fetchComments = () => {
    const payload = getStorage();
    return {
        type: ActionTypes.FETCH_COMMENTS,
        payload,
    };
};

export { createComment, fetchComments, setComments, deleteComment };
