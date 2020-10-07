/**
 * Copyright (c) INOVUA SOFTWARE TECHNOLOGIES.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = !!(
  'ontouchstart' in global ||
  (global.DocumentTouch && document instanceof DocumentTouch)
);
