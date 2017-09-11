import { expect } from '../test_helper';
import { SAVE_COMMENT } from "../../src/actions/types";
import { saveComment } from "../../src/actions/index";

describe("Actions:", () => {
    describe("Save comment", () => {
        it('Has the correct type', () => {
            const action = saveComment();
            expect(action.type).to.equal(SAVE_COMMENT);
        });

        it('Has the correct payload', () => {
            const action = saveComment("new comment");
            expect(action.payload).to.equal('new comment')
        })
    })
});