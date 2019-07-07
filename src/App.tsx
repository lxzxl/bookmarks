import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import './App.css';
import { GroupsApi } from 'api';
import Group from 'components/Group';

const App: React.FC = () => {
  const [groups, setGroups] = useState<GroupDoc[]>([]);

  useEffect(() => {
    (async () => {
      const data = await GroupsApi.list();
      setGroups(data);
    })();
  }, []);

  const addGroup = async () => {
    const newGroup = await GroupsApi.add();
    setGroups([...groups, newGroup]);
  };

  const removeGroup = async ({ id }: GroupDoc) => {
    if (!id) {
      return;
    }
    await GroupsApi.remove(id);
    setGroups(groups.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <Button type="default" onClick={addGroup}>
        Add
      </Button>
      {groups.map(group => (
        <Group key={group.id} {...group} />
      ))}
    </div>
  );
};

export default App;
