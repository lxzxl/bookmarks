/**
 * Created by steven on 5/6/16.
 */

import api from "../api";

export const singIn = ({dispatch}, email, password) => {
  return api.auth.signIn(email, password).then(
    () => {
      dispatch('AUTH_SIGN_IN_OK');
      return true;
    },
    () => {
      dispatch('AUTH_SIGN_IN_FAILED');
      return false;
    }
  );
};

export const signOut = ({dispatch}) => {
  return api.auth.signOut().then(
    () => dispatch('AUTH_SIGN_OUT')
  )
};

export const getAllPanels = ({dispatch}) => {
  return api.panels.getAllPanels().then(
    panels => dispatch('RECEIVE_PANELS', panels),
    rejection => console.log(rejection)
  )
};

export const toggleEditPanel = makeSimpleAction('TOGGLE_EDIT_PANEL');

function makeSimpleAction(type) {
  return ({dispatch}, ...args) => dispatch(type, ...args)
}
