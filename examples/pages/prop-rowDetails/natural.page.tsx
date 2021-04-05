import React, { useState } from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';

import RadioButtonGroup from '@inovua/reactdatagrid-community/packages/RadioButtonGroup';

import people from '../people';

const times = (arr, n) => {
  const result = [];

  let id = -1;
  for (var i = 0; i < n; i++) {
    result.push(
      ...arr.map(x => {
        return {
          ...x,
          id: `${++id}`,
        };
      })
    );
  }

  return result;
};

const gridStyle = { minHeight: 850 };

const renderRowDetails = ({ data }) => {
  return (
    <div style={{ padding: 20 }}>
      <h3>Row details:</h3>
      <table>
        <tbody>
          {Object.keys(data).map(name => {
            return (
              <tr key={name}>
                <td>{name}</td>
                <td>{data[name]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const rowExpandHeights = [
  { label: 'small', value: 250 },
  { label: 'normal', value: 350 },
  { label: 'large', value: 450 },
];

const defaultExpandedRows = { 1: true, 3: true };

const columns = [
  { name: 'id', type: 'number', header: 'Id', defaultVisible: false },
  { name: 'name', defaultWidth: 150, minWidth: 80, header: 'Name' },
  { name: 'country', defaultWidth: 150, minWidth: 80, header: 'Country' },
  { name: 'city', defaultWidth: 150, minWidth: 80, header: 'City' },
  { name: 'age', minWidth: 80, type: 'number', header: 'Age' },
];

const App = () => {
  const [rowExpandHeight, setRowExpandHeight] = useState(350);

  const rowExpandHeightFn = () => {
    let height = 200;
    const heights = people.map((item, i) => {
      return {
        [i]: i === 3 ? 400 : height,
      };
    });

    return heights;
  };

  return (
    <div>
      <p>Select row expand height</p>
      <RadioButtonGroup
        theme="default-dark"
        radioOptions={rowExpandHeights}
        radioValue={rowExpandHeight}
        onChange={({ checkedItemValue }) =>
          setRowExpandHeight(checkedItemValue)
        }
        orientation="horizontal"
        style={{ marginBottom: 20 }}
      />

      <ReactDataGrid
        idProperty="id"
        theme="default-dark"
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        style={gridStyle}
        renderRowDetails={renderRowDetails}
        defaultExpandedRows={defaultExpandedRows}
        columns={columns}
        dataSource={times(people, 20)}
        xrowExpandHeight={rowExpandHeightFn()}
        // rowExpandHeight={300}
        rowExpandHeight={({ data }) => {
          if (data.id % 3 === 0) {
            return 400;
          }
          return 200;
        }}
      />
    </div>
  );
};

export default () => <App />;
