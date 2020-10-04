import * as React from 'react';
import { Spin } from 'antd';

export const PageSpinner = () => {
  return (
    <div className="page_spinner">
      <Spin size="large" />
    </div>
  );
};
