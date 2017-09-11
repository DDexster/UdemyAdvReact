import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe("Comment list", () => {
    let component;
    const props = { comments: [ 'New Comment', "Another comment" ] };

    beforeEach(() => {
        component = renderComponent(CommentList, null, props);
    });

    describe("Content test", () => {
        it("Shows an LI for each comment", () => {
            expect(component.find('li').length).to.equal(2);
        });

        it('Shows each comment, witch is provided', () => {
            expect(component).to.contain('New Comment');
            expect(component).to.contain('Another comment');
        })
    })
});
