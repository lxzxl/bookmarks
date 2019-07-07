import { firestore } from 'firebase';

export default class {
  private _db: firestore.Firestore;
  private _groups: firestore.CollectionReference;

  constructor(db: firestore.Firestore) {
    this._db = db;
    this._groups = db.collection('groups');
  }
  doc() {
    return this._groups.doc();
  }
  async list() {
    const groupsSnapshot = await this._groups.get();
    const groups = await Promise.all(
      groupsSnapshot.docs.map(async doc => {
        const group = doc.data() as GroupDoc;
        const { docs } = await doc.ref.collection('bookmarks').get();
        return {
          docRef: doc.ref,
          id: doc.id,
          ...group,
          bookmarks: docs.map(doc => ({
            docRef: doc.ref,
            id: doc.id,
            ...doc.data()
          })) as BookmarkDoc[]
        };
      })
    );
    console.log(groups);
    return groups;
  }
  async add() {
    const batch = this._db.batch();
    const groupRef = this.doc();
    batch.set(groupRef, { name: `new group` });
    const bookmarksRef = groupRef.collection('bookmarks');
    const bookmarks = [{ name: 'Baidu', url: 'https://baidu.com' }];
    bookmarks.forEach(item => {
      batch.set(bookmarksRef.doc(), item);
    });
    await batch.commit();
    const group = await groupRef.get();
    const { docs: bookmarkDocs } = await bookmarksRef.get();
    const newGroup = {
      id: groupRef.id,
      ...(group.data() as GroupDoc),
      bookmarks: bookmarkDocs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BookmarkDoc[]
    };
    return newGroup;
  }
  async update(documentPath: string) {
    // const docRef = this._groups.doc(documentPath);
  }
  async remove(documentPath: string) {
    if (!documentPath) {
      return;
    }
    console.log(documentPath);
    await this._groups.doc(documentPath).delete();
  }
}
