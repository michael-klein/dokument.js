import Icon from '@ant-design/icons';
import * as React from 'react';

const Initials = (props: { label: string }) => {
  const initials = props.label
    .split(' ')
    .map(s => s[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
  return <span role="img">{initials}</span>;
};

export const renderInitials = (label: string) => {
  return (
    <Icon
      className="nav-initials"
      component={() => <Initials label={label}></Initials>}
    />
  );
};
