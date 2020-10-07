/**
 * Copyright (c) INOVUA SOFTWARE TECHNOLOGIES.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { findDOMNode } from 'react-dom';
import Region from '../../../packages/region';

export default (cells, getIndex) => {
  return cells.map((c, i) => {
    const node = findDOMNode(c);
    const reg = Region.from(node);

    const isCell = typeof c.getProps === 'function';
    const props = isCell ? c.getProps() : c.props;

    const result = {
      left: reg.left,
      right: reg.right,
      width: reg.width,
      computedLocked: props.computedLocked,
      index: getIndex === undefined ? i : getIndex(i, c, props),
    };

    return result;
  });
};
