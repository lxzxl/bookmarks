import React, { useState } from 'react';
import { Button, Card, Icon } from 'antd';
import { firestore } from 'firebase';
import './App.css';
import { DB } from 'api';

interface BookmarkGroup {
  docRef?: firestore.DocumentReference;
  id?: string;
  name: string;
  bookmarks?: Bookmark[];
}

interface Bookmark {
  docRef?: firestore.DocumentReference;
  id?: string;
  name: string;
  url: string;
}

const Bookmark: React.FC<Bookmark> = ({ name, url }) => {
  return (
    <a key={url} href={url}>
      {name}
    </a>
  );
};

const App: React.FC = () => {
  const [groups, setGroups] = useState<BookmarkGroup[]>([]);
  const Groups = DB.collection('groups');
  const loadData = async () => {
    const groupsSnapshot = await Groups.get();
    const groups = await Promise.all(
      groupsSnapshot.docs.map(async doc => {
        const group = doc.data() as BookmarkGroup;
        const { docs } = await doc.ref.collection('bookmarks').get();
        return {
          docRef: doc.ref,
          id: doc.id,
          ...group,
          bookmarks: docs.map(doc => ({
            docRef: doc.ref,
            id: doc.id,
            ...doc.data()
          })) as Bookmark[]
        };
      })
    );
    console.log(groups);
    setGroups(groups);
  };

  const addGroup = async () => {
    const newGroup: BookmarkGroup = {
      name: `group ${groups.length + 1}`,
      bookmarks: [{ name: 'Baidu', url: 'https://baidu.com' }]
    };
    const docRef = await Groups.add(newGroup);
    const doc = await docRef.get();
    const group = doc.data() as BookmarkGroup;
    const { docs } = await doc.ref.collection('bookmarks').get();
    const newDoc = {
      id: doc.id,
      ...group,
      bookmarks: docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Bookmark[]
    };
    console.log(newDoc);
    setGroups([...groups, newDoc]);
  };

  const removeGroup = async ({ id, docRef }: BookmarkGroup) => {
    if (docRef) {
      console.log(docRef);
      await docRef.delete();
      setGroups(groups.filter(item => item.id !== id));
    }
  };

  return (
    <div className="App">
      <Button type="primary" onClick={loadData}>
        Load
      </Button>
      <Button type="default" onClick={addGroup}>
        Add
      </Button>
      {groups.map(group => (
        <Card
          key={group.id}
          title={group.name}
          extra={
            <Icon type="close-circle" onClick={() => removeGroup(group)} />
          }
        >
          {group.bookmarks &&
            group.bookmarks.map(bookmark => (
              <Bookmark key={bookmark.id} {...bookmark} />
            ))}
        </Card>
      ))}
    </div>
  );
};

export default App;
