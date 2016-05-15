/**
 * Created by steven on 16/5/11.
 */
'use strict';

import {Panel} from './schema';

export default function (ref) {
  const panelsRef = ref.child('panels');
  let inited = false;

  const init = (dispatch) => {
    if (inited) return false;
    inited = true;
    if (!ref.getAuth()) {
      dispatch('AUTH_REQUIRED');
    }
    let panelsRefQuery = panelsRef.orderByChild('name');
    panelsRefQuery.once('value', datasnapshot => {
      dispatch('PANELS_INIT', datasnapshot);
    });
    // listen on value change.
    panelsRefQuery.on('child_added', datasnapshot => {
      dispatch('PANELS_ADD', datasnapshot);
    });
    panelsRefQuery.on('child_changed', datasnapshot => {
      dispatch('PANELS_UPDATE', datasnapshot);
    });
    panelsRefQuery.on('child_removed', datasnapshot => {
      dispatch('PANELS_REMOVE', datasnapshot);
    });
    // listen on order change.
    // panelsRefQuery.on('child_moved', datasnapshot => {
    //   debugger;
    // });
  };

  const addPanel = (dispatch, name) => {
    let p = new Panel(name);
    panelsRef.push(p, err => err && dispatch('PANELS_ERROR', err))
  };

  const updatePanel = (dispatch, key, panel) => {
    panelsRef.child(key).update({
      name: 'edit 2'
    }, err => err ? dispatch('PANELS_ERROR', err, key) : dispatch('PANELS_CLOSE_EDIT', key))
  };

  const removePanel = (dispatch, key) => {
    panelsRef.child(key).remove(err => err && dispatch('PANELS_ERROR', err))
  };

  const addLink = (dispatch, panelKey, link) => {
    panelsRef.child(panelKey).child('links').push(link, err => err ? dispatch('PANELS_ERROR', err) : dispatch('MODAL_CLOSE', 'FAVLINK'));
  };

  return {
    init,
    addPanel,
    updatePanel,
    removePanel,
    addLink
  }
}
