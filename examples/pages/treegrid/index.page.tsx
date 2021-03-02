import React, { useState } from 'react';

import ReactDataGrid from '@inovua/reactdatagrid-enterprise';

import ComboBox from '@inovua/reactdatagrid-community/packages/ComboBox';

const gridStyle = { minHeight: 350 };

const treeData = [
  {
    id: 1,
    name: 'Applications',
    folder: true,
    nodes: [
      {
        id: 3,
        name: 'IRecall',
        size: '200Mb',
        nodes: null,
      },
      {
        id: 4,
        name: 'Testing',
        size: '300Mb',
      },
      {
        id: 5,
        name: 'PlayStore',
        size: '2000Mb',
      },
      {
        id: 7,
        name: 'inovua',
        size: '200Mb',
      },
      {
        id: 1,
        name: 'App store',
        size: '4.5Mb',
        nodes: null,
      },
      {
        id: 2,
        name: 'iMovie',
        size: '106Mb',
        nodes: null,
      },
    ],
  },
  {
    id: 2,
    name: 'Documents',
    nodes: [
      {
        id: 1,
        name: 'Todo.md',
        size: '2Kb',
      },
      {
        id: 2,
        name: 'Calendar.md',
        size: '15.2Kb',
      },
      { id: 3, name: 'Shopping list.csv', size: '20Kb' },
    ],
  },
  {
    id: 3,
    name: '3 Downloads',
    nodes: [
      {
        id: 1,
        name: 'Email data',
        nodes: [
          {
            id: 1,
            name: 'Personal.xls',
            size: '100Gb',
          },
          { id: 2, name: 'Work.xls' },
        ],
      },
      { id: 2, name: 'MacRestore.gzip' },
    ],
  },
];

const columns = [
  {
    id: 'toggle',
    render: ({ toggleNodeExpand, ...args }) => {
      return (
        <button
          onClick={() => {
            toggleNodeExpand();
          }}
        >
          toggle
        </button>
      );
    },
  },
  {
    id: 'load',
    render: ({ loadNodeAsync, ...args }) => {
      return (
        <button
          onClick={() => {
            loadNodeAsync();
          }}
        >
          load node
        </button>
      );
    },
  },
  { name: 'name', header: 'Name', defaultFlex: 1 },
  { name: 'size', header: 'Size', defaultWidth: 160 },
];

const loadNode = ({ node, nodeProps }) => {
  console.log(node);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const prevNodes = node.nodes || [];
      let id = prevNodes.length;
      if (nodeProps.depth >= 4) {
        resolve([
          ...prevNodes,
          { id: id++, name: 'First child of ' + node.name },
          { id: id++, name: 'Second child of ' + node.name },
        ]);
      }
      resolve([
        ...prevNodes,
        { id: id++, name: 'First child of ' + node.name, nodes: null },
        { id: id++, name: 'Second child of ' + node.name, nodes: null },
      ]);
    }, 200);
  });
};

const nestingSizes = [
  { label: '10px', id: 10 },
  { label: '15px', id: 15 },
  { label: '22px', id: 22 },
  { label: '25px', id: 25 },
  { label: '50px', id: 50 },
];

const defaultExpandedNodes = { 1: true };

const rowHeights = {
  1: 100,
  2: 120,
  3: 150,
};
const App = () => {
  const [treeNestingSize, setTreeNestingSize] = useState(22);

  return (
    <div>
      <h3>TreeGrid with async nodes and treeNestingSize configuration</h3>
      <div style={{ marginBottom: 20 }}>
        <p>Please select the tree nesting size</p>
        <ComboBox
          style={{ width: 150 }}
          collapseOnSelect
          changeValueOnNavigation
          clearIcon={false}
          searchable={false}
          dataSource={nestingSizes}
          value={treeNestingSize}
          onChange={setTreeNestingSize}
        />
      </div>
      <ReactDataGrid
        treeColumn="name"
        loadNode={loadNode}
        stickyTreeNodes
        defaultExpandedNodes={defaultExpandedNodes}
        licenseKey={process.env.NEXT_PUBLIC_LICENSE_KEY}
        treeNestingSize={treeNestingSize}
        style={gridStyle}
        columns={columns}
        dataSource={treeData}
      />
    </div>
  );
};

export default () => <App />;
