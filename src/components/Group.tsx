import React from 'react';
import { Card } from 'antd';

const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
  padding: '16px'
};

const Group: React.FC<GroupDoc> = ({ name, bookmarks }) => {
  return (
    <Card title={name}>
      {bookmarks &&
        bookmarks.map(bookmark => (
          <Card.Grid key={bookmark.name} style={gridStyle}>
            {bookmark.name}
          </Card.Grid>
        ))}
    </Card>
  );
};

export default Group;
