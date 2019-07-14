import React from 'react';
import { Icon } from 'antd';

interface Props {
  name: string;
  url: string;
  icon?: string;
}

const Bookmark: React.FC<Props> = ({ name, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Icon type="book" theme="filled" /> {name}
    </a>
  );
};

export default Bookmark;
