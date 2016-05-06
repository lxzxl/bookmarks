/**
 * Created by steven on 5/6/16.
 */

export const toggleEditPanel = makeAction('TOGGLE_EDIT_PANEL');

function makeAction(type) {
  return ({dispatch}, ...args) => dispatch(type, ...args)
}
