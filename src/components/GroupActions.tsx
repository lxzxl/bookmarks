import React from 'react';
import { Icon, Popconfirm } from 'antd';
import styled from 'styled-components';

interface Props {
  editing: boolean;
  onEdit?: () => void;
  onRemove?: () => void;
  onClose?: () => void;
}

const StyledIcon = styled(Icon)`
  color: red;
  font-weight: 600;
`;

const GroupActions: React.FC<Props> = ({
  editing,
  onEdit,
  onRemove,
  onClose
}) => {
  return editing ? (
    <>
      <Popconfirm placement="leftTop" title="确认删除?" onConfirm={onRemove}>
        <StyledIcon type="delete" />
      </Popconfirm>
      <StyledIcon type="close" onClick={onClose} />
    </>
  ) : (
    <StyledIcon type="setting" onClick={onEdit} />
  );
};

export default GroupActions;
