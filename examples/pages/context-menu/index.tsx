import React, { useState } from 'react';

import ReactDataGrid from '../../../enterprise-edition';

import CheckBox from '@inovua/reactdatagrid-community/packages/CheckBox';

import people from '../people';
import flags from '../flags';

const gridStyle = { minHeight: 550 };

const defaultFilterValue = [
  { name: 'name', operator: 'startsWith', type: 'string', value: '' },
  { name: 'age', operator: 'gte', type: 'number', value: '' },
];

const columns = [
  {
    name: 'id',
    header: 'Id',
    defaultVisible: true,
    defaultWidth: 60,
    type: 'number',
  },
  { name: 'name', header: 'Name', defaultFlex: 1 },
  {
    name: 'country',
    header: 'Country',
    defaultFlex: 1,
    render: ({ value }) => (flags[value] ? flags[value] : value),
  },
  { name: 'city', header: 'City', defaultFlex: 1 },
  { name: 'age', header: 'Age', defaultFlex: 1, type: 'number' },
];

const App = () => {
  return (
    <div>
      <h3>Grid with toggle for showColumnMenuTool</h3>

      <ReactDataGrid
        idProperty="id"
        theme="default-dark"
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        style={gridStyle}
        defaultFilterValue={defaultFilterValue}
        columns={columns}
        dataSource={people}
        updateMenuPositionOnColumnsChange
      />
    </div>
  );
};

export default () => <App />;
