/**
 * Created by steven on 16/5/11.
 */
'use strict';
import mockData from './mockData';

export default function (ref) {
  const panelsRef = ref.child('panels');
  const getAllPanels = () => {
    return new Promise(function (resolve, reject) {
      panelsRef.on('value', function (datasnapshot) {
        debugger;
        resolve(datasnapshot.val());
      })
    })
  };

  return {
    getAllPanels
  }
}
