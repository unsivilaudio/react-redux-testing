import { expect } from '../test_helper';
import commentsReducer from '../../src/reducers/commentReducer';
import { CREATE_COMMENT, FETCH_COMMENTS } from '../../src/actions/types';

describe('Comments Reducer', () => {
    it('handles action with unknown type', () => {
        expect(commentsReducer(undefined, {})).to.be.eql([]);
    });

    it('handles action of the type CREATE_COMMENT', () => {
        const action = { type: CREATE_COMMENT, payload: 'new comment' };
        expect(commentsReducer([], action)).to.eql(['new comment']);
    });
});
