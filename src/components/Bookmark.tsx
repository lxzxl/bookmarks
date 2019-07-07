import React from 'react';
import { Icon } from 'antd';

interface Props {
  name: string;
  url: string;
  icon?: string;
}

const Bookmark: React.FC<Props> = ({ name, url }) => {
  return (
    <span>
      <Icon type="plus" /> {name}: {url}
    </span>
  );
};

export default Bookmark;
