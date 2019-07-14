import React, { useState } from 'react';
import { Button, Card, Icon, Popconfirm, Drawer, Input, Row, Col } from 'antd';
import GroupActions from './GroupActions';
import Bookarmk from './Bookmark';

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

  const [editing, setEditing] = useState(false);
  const [visible, setVisible] = useState(false);

  const close = () => {
    setEditing(false);
  };
  const renameGroup = () => {
    console.log('rename', group.docRef);
  };
  const saveBookmark = () => {
    console.log('addBookmark', group.docRef);
  };
  const removeBookmark = () => {
    console.log('removeBookmark', group.docRef);
  };

  return (
    <Card
      title={name}
      extra={
        <GroupActions
          editing={editing}
          onEdit={() => setEditing(true)}
          onClose={() => setEditing(false)}
        />
      }
    >
      {bookmarks &&
        bookmarks.map(bookmark => (
          <Card.Grid key={bookmark.name} style={gridStyle}>
            <Bookarmk {...bookmark} />
          </Card.Grid>
        ))}
      {editing && (
        <Card.Grid style={gridStyle}>
          <Icon type="plus" onClick={e => setEditing(true)} />
        </Card.Grid>
      )}
      <Drawer
        title="添加"
        width={720}
        onClose={e => setVisible(false)}
        visible={visible}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Input
              style={{ width: '100%' }}
              addonBefore="http://"
              placeholder="Please enter url"
            />
          </Col>
        </Row>
        <div
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            borderTop: '1px solid #e9e9e9',
            padding: '10px 16px',
            background: '#fff',
            textAlign: 'right'
          }}
        >
          <Button onClick={close} style={{ marginRight: 8 }}>
            Cancel
          </Button>
          <Button onClick={close} type="primary">
            Submit
          </Button>
        </div>
      </Drawer>
    </Card>
  );
};

export default Group;
