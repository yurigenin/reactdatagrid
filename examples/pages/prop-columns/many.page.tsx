/**
 * Copyright (c) INOVUA SOFTWARE TECHNOLOGIES.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import DataGrid from '@inovua/reactdatagrid-community';

import people from '../people';

const gridStyle = { minHeight: '80vh', margin: 20 };

const times = (arr, n, fn?) => {
  const result = [];

  for (var i = 0; i < n; i++) {
    result.push(
      ...arr.map(x => {
        if (fn) {
          return fn(x, i);
        }
        return {
          ...x,
          id: `${i}-${x.id}`,
        };
      })
    );
  }

  return result;
};
const defaultGroupBy = ['country'];

const defaultCellSelection = { '0-4,id': true, '0-4,desc': true };
class App extends React.Component {
  constructor(props) {
    super(props);
    const columns = times([{ name: 'id' }], 30, (_, i) => {
      return {
        name: i ? `id-${i}` : 'id',
        id: i ? `id-${i}` : 'id',
      };
    });
    this.state = {
      columns,
      dataSource: times(
        [
          [...new Array(30)].reduce(
            (acc, _, i) => {
              acc[`id-${i}`] = i;
              return acc;
            },
            { id: 0 }
          ),
        ],
        1
      ),
    };
    console.log(this.state.dataSource);
  }

  render() {
    if (!process.browser) {
      return null;
    }
    return (
      <DataGrid
        idProperty="id"
        style={gridStyle}
        theme="default-light"
        columns={this.state.columns}
        dataSource={this.state.dataSource}
      />
    );
  }
}

export default () => <App />;
