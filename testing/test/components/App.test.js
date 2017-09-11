import { renderComponent, expect } from '../test_helper';
import App from '../../src/App';

//Use it to group similar test
describe('App', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(App);
    });
    // Use 'it' to test a single attribute of a target
    // it('Shows the correct text', () => {
    //     //Use 'expect' to make assertion about a target
    //     expect(component).to.contain('Hi there!');
    // });
    it('Has container class', () => {
        expect(component).to.have.class('container');
    });

    it('Shows a comment box', () => {
        expect(component.find('.comment-box')).to.exist;
    });

    it('Shows a comment list', () => {
        expect(component.find('.comment-list')).to.exist;
    })
});

