/**
 * Created by steven on 5/6/16.
 */

import api from '../api';

export const getAllPanels = ({dispatch}) => {
  api.panels.getAllPanels().then(panels => dispatch('RECEIVE_PANELS', panels))
};

export const toggleEditPanel = makeAction('TOGGLE_EDIT_PANEL');

function makeAction(type) {
  return ({dispatch}, ...args) => dispatch(type, ...args)
}
