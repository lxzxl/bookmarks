import { firestore } from 'firebase';
export default class {
  private _ref: firestore.DocumentReference;

  constructor(ref: firestore.DocumentReference) {
    this._ref = ref;
  }

  add() {}
  update() {}
  remove() {}
}
