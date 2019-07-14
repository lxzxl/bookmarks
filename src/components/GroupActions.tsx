import React, { Fragment } from 'react';
import { Icon, Popconfirm } from 'antd';

interface Props {
  editing: boolean;
  onEdit?: () => void;
  onRemove?: () => void;
  onClose?: () => void;
}

const Bookmark: React.FC<Props> = ({ editing, onEdit, onRemove, onClose }) => {
  return editing ? (
    <Fragment>
      <Popconfirm placement="leftTop" title="确认删除?" onConfirm={onRemove}>
        <Icon type="delete" />
      </Popconfirm>
      <Icon type="close" onClick={onClose} />
    </Fragment>
  ) : (
    <Icon type="setting" onClick={onEdit} />
  );
};

export default Bookmark;
