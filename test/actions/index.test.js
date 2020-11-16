import { expect } from '../test_helper';
import { CREATE_COMMENT } from '../../src/actions/types';
import { createComment } from '../../src/actions';

describe('My Action Creators', () => {
    describe('createComment', () => {
        it('has the correct type', () => {
            const action = createComment();
            expect(action.type).to.equal(CREATE_COMMENT);
        });
        it('has the correct payload', () => {
            const action = createComment('new comment');
            expect(action.payload).to.equal('new comment');
        });
    });
});
