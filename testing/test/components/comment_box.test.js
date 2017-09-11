import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('Comment Box', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(CommentBox);
    });

    describe('General structure', () => {
        it('Has a text area', () => {
            expect(component.find('textarea')).to.exist;
        });

        it('Has a button', () => {
            expect(component.find('button')).to.exist;
        });

        it("Has class of a comment-box", () => {
            expect(component).to.have.class('comment-box');
        });
    });

    describe("Entering text", () => {
        beforeEach(() => {
            component.find('textarea').simulate('change', 'new comment')
        });

        it('Shows text that is entered', () => {
            expect(component.find('textarea')).to.have.value('new comment');
        });

        it('Clears input, when submitted', () => {
            component.find('form').simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        })
    });

});
