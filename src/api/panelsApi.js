/**
 * Created by steven on 16/5/11.
 */
'use strict';

export default function (ref) {
  const panelsRef = ref.child('panels');
  const getAllPanels = () => {
    return new Promise(function (resolve, reject) {
      if (!panelsRef.getAuth()) {
        reject('Login Required!');
      }
      panelsRef.on('value', function (datasnapshot) {
        resolve(datasnapshot.val());
      })
    })
  };

  return {
    getAllPanels
  }
}
