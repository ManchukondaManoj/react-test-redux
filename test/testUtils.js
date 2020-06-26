import { ShallowWrapper } from "enzyme";
import { createStore } from "redux";
import checkPropTypes from "check-prop-types";

import rootReducer from "../src/reducers";


/**
 * Create a testing store with imported reducers, middlewares, and initial state.
 * globals:rootReducer
 * @param {object} initalState - initial state for store
 * @function storeFactory
 * @returns {Store} - Redux store
 */
export const storeFactory = (initalState = {}) => {
    return createStore(rootReducer, initalState);
}

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme Shallow Wrapper
 * @param {String} val - Value of data-test attribute to search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}


export const checkProps = (component, incomingProps) => {
    const propError = checkPropTypes(component.propTypes,
        incomingProps,
        'prop',
        component.name
    )
    expect(propError).toBeUndefined();
}