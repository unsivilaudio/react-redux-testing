import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/CommentBox';

describe('My CommentBox Component', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(CommentBox);
    });

    it('has the correct class', () => {
        expect(component).to.have.class('CommentBox');
    });

    it('has a textarea', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });

    describe('entering some text', () => {
        beforeEach(() => {
            component.find('textarea').simulate('change', 'new comment');
        });

        it('shows that text in the textarea', () => {
            expect(component.find('textarea')).to.have.value('new comment');
        });

        it('when submitted, clears the input', () => {
            component.find('form').simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });
    });
});
