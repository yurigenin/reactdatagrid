/**
 * Copyright (c) INOVUA SOFTWARE TECHNOLOGIES.
 *
 * This source code is licensed under the Commercial License found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import GroupToolbar from './GroupToolbar';

export default ({
  groupBy,
  columnsMap,
  onItemMouseDown,
  onGroupByChange,
  ref,
  theme,
  onSortClick,
  headerGroupPlaceholderText,
  renderSortTool,
  renderGroupItem,
  rtl,
}) => {
  if (!groupBy) {
    return null;
  }
  return (
    <GroupToolbar
      ref={ref}
      rtl={rtl}
      theme={theme}
      onGroupByChange={onGroupByChange}
      onItemMouseDown={onItemMouseDown}
      renderGroupItem={renderGroupItem}
      renderSortTool={renderSortTool}
      placeholder={headerGroupPlaceholderText}
      columns={columnsMap}
      groupBy={groupBy}
      onSortClick={onSortClick}
    />
  );
};
