import * as React from 'react';
import { ReadOutlined } from '@ant-design/icons';

export const Logo = (props: { collapsed: boolean }) => {
  const { collapsed } = props;
  return (
    <div className={`logo ${collapsed && 'collapsed'}`}>
      <ReadOutlined />
      {!collapsed && 'Docs'}
    </div>
  );
};
