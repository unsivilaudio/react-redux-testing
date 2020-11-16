import * as ActionTypes from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case ActionTypes.CREATE_COMMENT:
            return state.concat(action.payload);
        case ActionTypes.DELETE_COMMENT:
            return state.filter(el => el.id !== action.payload);
        case ActionTypes.FETCH_COMMENTS:
            return action.payload || state;
        default:
            return state;
    }
}
