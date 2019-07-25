import { firestore } from 'firebase';

declare global {
  interface StyledProps {
    className?: string;
  }

  interface UserDoc {
    docRef?: firestore.DocumentReference;
    id?: string;
    name: string;
    bookmarks?: BookmarkDoc[];
  }

  interface GroupDoc {
    docRef?: firestore.DocumentReference;
    id?: string;
    name: string;
    bookmarks?: BookmarkDoc[];
  }

  interface BookmarkDoc {
    docRef?: firestore.DocumentReference;
    id?: string;
    name: string;
    url: string;
  }
}
