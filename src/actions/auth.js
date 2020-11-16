import * as ActionTypes from './types';

const authenticate = isLoggedIn => {
    return {
        type: ActionTypes.CHANGE_AUTH,
        payload: isLoggedIn,
    };
};

export { authenticate };
