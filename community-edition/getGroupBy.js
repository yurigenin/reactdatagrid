/**
 * Copyright (c) INOVUA SOFTWARE TECHNOLOGIES.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default (props, state) => {
  return props.groupBy !== undefined ? props.groupBy : state.groupBy;
};
