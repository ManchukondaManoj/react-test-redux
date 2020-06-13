import { ShallowWrapper } from "enzyme"

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme Shallow Wrapper
 * @param {String} val - Value of data-test attribute to search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}