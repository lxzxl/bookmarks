import React from 'react';
import { Button } from 'antd';
import './App.css';
import { DB } from 'api';

const App: React.FC = () => {
  const onClick = async () => {
    const groupsSnapshot = await DB.collection('groups').get();
    groupsSnapshot.forEach(
      async (doc: firebase.firestore.QueryDocumentSnapshot) => {
        console.log(doc.data());
        const bookmarksSnapshot = await doc.ref.collection('bookmarks').get();
        bookmarksSnapshot.forEach(
          (doc: firebase.firestore.QueryDocumentSnapshot) => {
            console.log(doc.data());
          }
        );
      }
    );
  };

  return (
    <div className="App">
      <Button type="primary" onClick={onClick}>
        Button
      </Button>
    </div>
  );
};

export default App;
