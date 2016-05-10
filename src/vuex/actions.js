/**
 * Created by steven on 5/6/16.
 */

import * as api from '../api';

export const getAllPanels = ({dispatch}) => {
  api.getAllPanels(panels => {
    dispatch('RECEIVE_PANELS', panels);
  })
};

export const toggleEditPanel = makeAction('TOGGLE_EDIT_PANEL');

function makeAction(type) {
  return ({dispatch}, ...args) => dispatch(type, ...args)
}
