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
    if (!panelsRef.getAuth()) {
      dispatch('AUTH_REQUIRED');
    }
    // listen on value change.
    panelsRef.orderByChild('name').on('child_added', datasnapshot => {
      dispatch('PANELS_ADD', datasnapshot.val());
    })
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
