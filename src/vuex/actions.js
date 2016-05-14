/**
 * Created by steven on 5/6/16.
 */
'use strict';
import api from "../api";

export const checkAuth = ({dispatch}) => {
  return api.auth.checkAuth().then(
    () => (dispatch('AUTH_SIGN_IN_OK'), true),
    () => (dispatch('AUTH_REQUIRED'), false)
  )
};

export const singIn = ({dispatch}, email, password) => {
  return api.auth.signIn(email, password).then(
    () =>(dispatch('AUTH_SIGN_IN_OK'), true),
    () => (dispatch('AUTH_SIGN_IN_FAILED'), false)
  );
};

export const signOut = ({dispatch}) => {
  return api.auth.signOut().then(
    () => dispatch('AUTH_REQUIRED')
  )
};

export const initPanels = ({dispatch}) => {
  api.panels.init(dispatch);
};

export const addPanel = ({dispatch}, name) => {
  debugger;
  api.panels.addPanel(dispatch, name);
};

export const toggleEditPanel = makeSimpleAction('PANELS_TOGGLE_EDIT');

function makeSimpleAction(type) {
  return ({dispatch}, ...args) => dispatch(type, ...args)
}
