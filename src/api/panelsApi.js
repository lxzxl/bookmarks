/**
 * Created by steven on 16/5/11.
 */
'use strict';

class Panel extends Object {
  constructor() {
    super({
      name: null,
      links: [],
      flags: {
        isEditing: false
      }
    });
    this.name = arguments[0];
  }
}

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
    // listen on value change.
    panelsRefQuery.on('child_added', datasnapshot => {
      dispatch('PANELS_ADD', datasnapshot);
    });
    panelsRefQuery.on('child_changed', datasnapshot => {
      debugger;
    });
    panelsRefQuery.on('child_removed', datasnapshot => {
      debugger;
    });
    panelsRefQuery.on('child_moved', datasnapshot => {
      debugger;
    });
  };

  const addPanel = (dispatch, name) => {
    let p = new Panel(name || 'New Panel');
    debugger;
    panelsRef.push(p, err => err && dispatch('ERROR_ALERT'))
  };

  return {
    init,
    addPanel
  }
}
