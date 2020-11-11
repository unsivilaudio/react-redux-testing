import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/CommentList';

describe('My CommentList Component', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(CommentList, null, {
            comments: ['New Comment', 'Other New Comment'],
        });
    });

    it('shows an LI for each comment', () => {
        expect(component.find('li').length).to.equal(2);
    });

    it('shows each comment that is provided', () => {});
});
