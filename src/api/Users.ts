import { firestore } from 'firebase';
export default class {
  private _ref: firestore.CollectionReference;

  constructor(ref: firestore.CollectionReference) {
    this._ref = ref;
  }

  add() {
    this._ref.doc();
  }
  update() {}
  remove() {}
}
