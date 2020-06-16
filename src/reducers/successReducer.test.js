import { actionTypes } from "../actions";
import { successReducer } from "./successReducer";

test('returns default initial state of `false` when no action is passed', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
});

test('returns state of true upon receiving action type "CORRECT_GUESS"', () => {
    const action = { type: actionTypes.CORRECT_GUESS };
    const newState = successReducer(undefined, action);
    expect(newState).toBe(true);
})