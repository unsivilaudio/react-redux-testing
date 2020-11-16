import { renderComponent, expect } from '../test_helper';
import { CommentList } from '../../src/components/CommentList';
import { deleteComment, fetchComments, setComments } from '../../src/actions';

describe('My CommentList Component', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(CommentList, {
            comments: [
                { id: 123, message: 'New Comment' },
                { id: 345, message: 'Other New Comment' },
            ],
            fetchComments,
            deleteComment,
            setComments,
        });
    });

    it('shows an LI for each comment', () => {
        expect(component.find('li').length).to.equal(2);
    });

    it('shows each comment that is provided', () => {});
});
