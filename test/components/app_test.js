import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('My App Component', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(App);
    });

    it('shows a <NavBar/>', () => {
        expect(component).to.have.class('NavBar');
    });

    it('shows a <CommentBox />', () => {
        // console.log(component);
        expect(component).to.exist;
    });
});
