/**
 * Created by steven on 5/6/16.
 */
'use strict';
import api from "../api";

export const checkAuth = ({dispatch}) => {
  api.auth.checkAuth().then(
    () => {
      dispatch('AUTH_SIGN_IN_OK');
      dispatch('MODAL_CLOSE', 'LOGIN');
    },
    () => {
      dispatch('AUTH_REQUIRED');
      dispatch('MODAL_OPEN', 'LOGIN', {errorMsg: 'Please sign in ...'});
    }
  )
};

export const singIn = ({dispatch}, email, password) => {
  return api.auth.signIn(email, password).then(
    () => {
      dispatch('AUTH_SIGN_IN_OK');
      dispatch('MODAL_CLOSE', 'LOGIN');
    },
    () => {
      dispatch('AUTH_SIGN_IN_FAILED');
      dispatch('MODAL_OPEN', 'LOGIN', {errorMsg: 'Invalid email or password'});
    }
  );
};

export const signOut = ({dispatch}) => {
  return api.auth.signOut().then(
    () => {
      dispatch('AUTH_REQUIRED');
      dispatch('MODAL_OPEN', 'LOGIN', {errorMsg: 'Please sign in ...'});
    }
  )
};

export const initPanels = ({dispatch}) => {
  api.panels.init(dispatch);
};

export const addPanel = ({dispatch}, name) => {
  api.panels.addPanel(dispatch, name);
};

export const updatePanel = ({dispatch}, key, panel) => {
  api.panels.updatePanel(dispatch, key, panel);
};

export const removePanel = ({dispatch}, key) => {
  api.panels.removePanel(dispatch, key);
};

export const toggleEditPanel = makeSimpleAction('PANELS_TOGGLE_EDIT');

export const addFavLink = ({dispatch}, link) => {
  api.link.addLink(dispatch, link);
};

function makeSimpleAction(type) {
  return ({dispatch}, ...args) => dispatch(type, ...args)
}
