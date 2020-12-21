/**
 * Copyright (c) INOVUA SOFTWARE TECHNOLOGIES.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import DataGrid from '@inovua/reactdatagrid-enterprise';

const columns = [
  { name: 'country', defaultFlex: 1, header: 'Country' },
  { name: 'firstName', defaultFlex: 1, header: 'First Name' },
  { name: 'age', type: 'number', defaultFlex: 1, header: 'Age' },
];

const people = [
  { id: 1, firstName: 'Paul', country: 'usa', age: 20 },
  { id: 2, firstName: 'Paul', country: 'usa', age: 20 },
  { id: 3, firstName: 'Paul', country: '', age: 20 },
  { id: 4, firstName: 'John', country: '', age: '' },
  { id: 5, firstName: 'Paul', country: 'uk', age: '' },
  { id: 6, firstName: 'Paul', country: 'uk', age: '' },
  { id: 6, firstName: 'Paul', country: 'uk', age: 10 },
];

const App = () => {
  return (
    <div>
      <DataGrid
        idProperty="id"
        defaultGroupBy={['country', 'age']}
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        columns={columns}
        dataSource={people}
        style={{ minHeight: 550 }}
      />
    </div>
  );
};

export default () => <App />;
