import React from 'react';
import { Card, Icon } from 'antd';

const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
  padding: '16px'
};

interface Props {
  group: GroupDoc;
  onRemove: (id?: string) => Promise<void>;
}

const Group: React.FC<Props> = ({ group, onRemove }) => {
  const { id, name, bookmarks } = group;

  const addBookmark = () => {
    console.log('removeBookmark', group.docRef);
  };
  const removeBookmark = () => {
    console.log('removeBookmark', group.docRef);
  };

  return (
    <Card
      title={name}
      extra={<Icon type="delete" onClick={e => onRemove(id)} />}
    >
      {bookmarks &&
        bookmarks.map(bookmark => (
          <Card.Grid key={bookmark.name} style={gridStyle}>
            {bookmark.name}
          </Card.Grid>
        ))}
      <Card.Grid style={gridStyle}>
        <Icon type="plus" onClick={e => addBookmark()} />
      </Card.Grid>
    </Card>
  );
};

export default Group;
