import React, { useState } from 'react';
import { Button, Card, Icon, Drawer, Input, Row, Col, Spin } from 'antd';
import { groupsApi } from 'api';
import GroupActions from './GroupActions';
import Bookmark from './Bookmark';

const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
  padding: '16px'
};

export interface Payload {
  action: 'remove' | 'update';
  data: GroupDoc;
}

interface Props {
  group: GroupDoc;
  onChange: (payload: Payload) => void;
}

const Group: React.FC<Props> = ({ group, onChange }) => {
  const { id = '', name, bookmarks } = group;

  const [editing, setEditing] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const close = () => {
    setEditing(false);
  };

  const renameGroup = async (name: string) => {
    console.log('rename', id);
    setLoading(true);
    const updatedGroup = await groupsApi.update(id, { name });
    onChange({
      action: 'update',
      data: updatedGroup
    });
    setLoading(false);
  };
  const updateGroup = async (data: Partial<GroupDoc>) => {
    console.log('update', id);
    setLoading(true);
    const updatedGroup = await groupsApi.update(id, data);
    onChange({
      action: 'update',
      data: updatedGroup
    });
    setLoading(false);
  };
  const removeGroup = async () => {
    console.log('remove', id);

    setLoading(true);
    await groupsApi.remove(id);
    onChange({
      action: 'remove',
      data: group
    });
  };

  const saveBookmark = () => {
    console.log('addBookmark', group.docRef);
  };
  const removeBookmark = () => {
    console.log('removeBookmark', group.docRef);
  };

  const SpinIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

  const Title = <span>{name}</span>;

  return (
    <Spin indicator={SpinIcon} spinning={loading}>
      <Card
        title={Title}
        extra={
          <GroupActions
            editing={editing}
            onEdit={() => setEditing(true)}
            onClose={() => setEditing(false)}
            onRemove={removeGroup}
          />
        }
      >
        {bookmarks &&
          bookmarks.map(bookmark => (
            <Card.Grid key={bookmark.name} style={gridStyle}>
              <Bookmark {...bookmark} />
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
    </Spin>
  );
};

export default Group;
