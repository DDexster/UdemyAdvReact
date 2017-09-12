import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/reducer_comments';
import { SAVE_COMMENT } from "../../src/actions/types";

describe("Comment Reducers", () => {
    it('Handles unknown action types', () => {
        expect(commentReducer(undefined, {})).to.eql([]);
    });

    it("SAVE_COMMENT", () => {
        const action = { type: SAVE_COMMENT, payload: "new comment" };
        expect(commentReducer([], action)).to.eql([ action.payload ]);
    })
});