import { Input, AutoComplete } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import * as React from 'react';

const renderTitle = (title: string) => {
  return (
    <span>
      {title}
      <a
        style={{
          float: 'right',
        }}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >
        more
      </a>
    </span>
  );
};

const renderItem = (title: string, count: number) => {
  return {
    value: title,
    label: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {title}
        <span>
          <UserOutlined /> {count}
        </span>
      </div>
    ),
  };
};

const options = [
  {
    label: renderTitle('Libraries'),
    options: [
      renderItem('AntDesign', 10000),
      renderItem('AntDesign UI', 10600),
    ],
  },
  {
    label: renderTitle('Solutions'),
    options: [
      renderItem('AntDesign UI FAQ', 60100),
      renderItem('AntDesign FAQ', 30010),
    ],
  },
  {
    label: renderTitle('Articles'),
    options: [renderItem('AntDesign design language', 100000)],
  },
];

export const Search = () => {
  const [value, setValue] = React.useState('');

  return (
    <AutoComplete
      dropdownClassName="certain-category-search-dropdown"
      dropdownMatchSelectWidth={500}
      open={value.length > 0}
      onBlur={() => setValue('')}
      onChange={setValue}
      value={value}
      style={{
        width: 250,
      }}
      options={options}
    >
      <Input.Search size="large" placeholder="Type to search..." />
    </AutoComplete>
  );
};
