import React, { useState, useEffect } from 'react';
import { Row, Button } from 'antd';
import './App.css';
import { GroupsApi } from 'api';
import Group from 'components/Group';

const App: React.FC = () => {
  const [groups, setGroups] = useState<GroupDoc[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await GroupsApi.list();
      setGroups(data);
      setLoading(false);
    })();
  }, []);

  const addGroup = async () => {
    setLoading(true);
    const newGroup = await GroupsApi.add();
    setGroups([...groups, newGroup]);
    setLoading(false);
  };

  const removeGroup = async (id?: string) => {
    if (!id) {
      return;
    }
    setLoading(true);
    await GroupsApi.remove(id);
    setGroups(groups.filter(item => item.id !== id));
    setLoading(false);
  };

  return (
    <div className="App">
      {groups.map(group => (
        <Group key={group.id} group={group} onRemove={removeGroup} />
      ))}
      <Row type="flex" justify="center">
        <Button
          type="primary"
          shape="circle"
          icon="plus"
          size="large"
          loading={loading}
          onClick={addGroup}
        />
      </Row>
    </div>
  );
};

export default App;
