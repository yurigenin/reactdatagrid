/**
 * Copyright (c) INOVUA SOFTWARE TECHNOLOGIES.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import getRootStyle from '../getRootStyle';

describe('getRootStyle', () => {
  it('applies the correct style', () => {
    const props = {
      style: {
        color: 'red',
      },
    };
    expect(getRootStyle({ props }).color).toEqual('red');
  });
});
