/**
 * Created by steven on 5/6/16.
 */

export const addLink = makeAction('ADD_LINK');
export const deleteLink = makeAction('DELETE_LINK');
export const editLink = makeAction('EDIT_LINK');

function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}
