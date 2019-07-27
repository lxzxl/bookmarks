import React, { useState, useEffect } from 'react';
import { Row, Button } from 'antd';
import './App.css';
import { groupsApi } from 'api';
import Group, { Payload as GroupPayload } from 'components/Group';

const App: React.FC = () => {
  const [groups, setGroups] = useState<GroupDoc[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await groupsApi.list();
      setGroups(data);
      setLoading(false);
    })();
  }, []);

  const addGroup = async () => {
    setLoading(true);
    const newGroup = await groupsApi.add();
    setGroups([...groups, newGroup]);
    setLoading(false);
  };

  const groupChangeHandler = ({ action, data }: GroupPayload) => {
    console.log(action, data);
    switch (action) {
      case 'remove':
        setGroups(groups.filter(item => item.id !== data.id));
        break;
      case 'update':
        setGroups(
          groups.map(item => {
            if (item.id !== data.id) {
              return item;
            }
            return {
              ...item,
              ...data
            };
          })
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      {groups.map(group => (
        <Group key={group.id} group={group} onChange={groupChangeHandler} />
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
