import React, { useState } from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import CheckBox from '@inovua/reactdatagrid-community/packages/CheckBox';

const rows = [
  {
    uniqueId: '1',
    no: 1,
    tank: 'TTTT',
    status: 'Initial',
    materialNo: '32983737',
    materialName: 'LiquidGold',
    level: 1323,
    temp: 123,
    density: 123.1231,
    mt: 1.1232,
    lob: 727121,
    kg: 932333,
    updateBy: 'Khun Hataitip',
    updateDate: '20/11/2019',
  },
  {
    uniqueId: '2',
    no: 2,
    tank: 'ZZZZ',
    status: 'Complete',
    materialNo: '983737',
    materialName: 'Crude Oil',
    level: 323.9,
    temp: 28.7,
    density: 623.1231,
    mt: 41.1232,
    lob: 727121,
    kg: 932333,
    updateBy: 'Kar Peng',
    updateDate: '04/01/2021',
  },
  {
    uniqueId: '3',
    no: 3,
    tank: 'KKKK',
    status: 'Initial',
    materialNo: '222223737',
    materialName: 'Propane',
    level: 4423,
    temp: 7123,
    density: 523.1231,
    mt: 9.1232,
    lob: 727121,
    kg: 932333,
    updateBy: 'Richard',
    updateDate: '06/02/2020',
  },
  {
    uniqueId: '4',
    no: 4,
    tank: 'TTPP',
    status: 'In Progress',
    materialNo: '32983737',
    materialName: 'LiquidNitrogen',
    level: 1323,
    temp: 123,
    density: 123.1231,
    mt: 1.1232,
    lob: 727121,
    kg: 932333,
    updateBy: 'Yann',
    updateDate: '20/11/2019',
  },
  {
    uniqueId: '5',
    no: 5,
    tank: 'BBBB',
    status: 'Complete',
    materialNo: '983737',
    materialName: 'Olive Oil',
    level: 323.9,
    temp: 28.7,
    density: 623.1231,
    mt: 41.1232,
    lob: 727121,
    kg: 932333,
    updateBy: 'Richard',
    updateDate: '04/01/2021',
  },
  {
    uniqueId: '6',
    no: 6,
    tank: 'QQQQ',
    status: 'Initial',
    materialNo: '222223737',
    materialName: 'Propane',
    level: 4423,
    temp: 7123,
    density: 523.1231,
    mt: 9.1232,
    lob: 727121,
    kg: 932333,
    updateBy: 'Napoleon',
    updateDate: '08/02/2020',
  },
];

const columns = [
  { name: 'no', header: 'NO.', defaultWidth: 80 },
  { name: 'action', header: 'ACTION', defaultWidth: 100, editable: false },
  { name: 'tank', header: 'TANK', defaultWidth: 100, editable: false },
  { name: 'status', header: 'STATUS', defaultWidth: 100, editable: false },
  {
    name: 'materialNo',
    header: 'MATERIAL NO.',
    defaultWidth: 160,
    editable: false,
  },
  {
    name: 'materialName',
    header: 'MATERIAL NAME',
    defaultWidth: 200,
    editable: false,
  },
  { name: 'level', header: 'LEVEL', defaultWidth: 140, type: 'number' },
  { name: 'temp', header: 'TEMP.', defaultWidth: 140, type: 'number' },
  {
    name: 'density',
    header: 'DENSITY(KG/L)',
    defaultWidth: 160,
    type: 'number',
  },
  { name: 'mt', header: 'MT.', defaultWidth: 140, type: 'number' },
  { name: 'lob', header: 'LOB.', defaultWidth: 140, type: 'number' },
  { name: 'kg', header: 'KG.', defaultWidth: 140, editable: false },
  { name: 'updateBy', header: 'UPDATE BY', defaultWidth: 160, editable: false },
  {
    name: 'updateDate',
    header: 'UPDATE DATE',
    defaultWidth: 160,
    editable: false,
  },
];

const defaultFilterValue = [
  { name: 'tank', type: 'string', value: '', operator: 'contains' },
  { name: 'status', type: 'string', value: '', operator: 'contains' },
  { name: 'materialNo', type: 'string', value: '', operator: 'contains' },
  { name: 'materialName', type: 'string', value: '', operator: 'contains' },
  { name: 'updateBy', type: 'string', value: '', operator: 'contains' },
  { name: 'updateDate', type: 'string', value: '', operator: 'contains' },
];

const headerProps = {
  style: {
    backgroundColor: '#86C1D4',
    color: 'white',
  },
};

const scrollProps = {
  autoHide: false,
  scrollThumbWidth: 14,
  scrollThumbStyle: {
    backgroundColor: '#86C1D4',
    opacity: '50%',
  },
};

export default function App() {
  const [showEmptyRows, setShowEmptyRows] = useState(true);
  const [short, setShort] = useState(false);
  const [nativeScroll, setNativeScroll] = useState(false);

  return (
    <div className="App">
      <div style={{ marginBottom: 20 }}>
        <CheckBox
          theme="default-dark"
          checked={showEmptyRows}
          onChange={setShowEmptyRows}
        >
          showEmptyRows
        </CheckBox>
        <CheckBox
          theme="default-dark"
          style={{ marginLeft: 10 }}
          checked={short}
          onChange={setShort}
        >
          short
        </CheckBox>
        <CheckBox
          theme="default-dark"
          style={{ marginLeft: 10 }}
          checked={nativeScroll}
          onChange={setNativeScroll}
        >
          nativeScroll
        </CheckBox>
      </div>
      <ReactDataGrid
        style={{
          minHeight: short ? 300 : 500,
          marginTop: 16,
        }}
        key={`${showEmptyRows}-${short}-${nativeScroll}`}
        rowHeight={50}
        theme="default-dark"
        idProperty="uniqueId"
        dataSource={rows}
        columns={columns}
        editable={true}
        pagination
        defaultFilterValue={defaultFilterValue}
        showColumnMenuTool={false}
        headerProps={headerProps}
        scrollProps={scrollProps}
        defaultShowEmptyRows={showEmptyRows}
        nativeScroll={nativeScroll}
      />
    </div>
  );
}
