/**
 * Copyright (c) INOVUA SOFTWARE TECHNOLOGIES.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useLayoutEffect, useRef } from 'react';
import { TypeDataSource } from '../../types';

const diff = (a1: any[], a2: any[]): boolean => {
  if (a1.length != a2.length) {
    return true;
  }

  for (let i = 0; i < a1.length; i++) {
    if (!Object.is(a1[i], a2[i])) {
      return true;
    }
  }

  return false;
};

const resolved = Promise.resolve(true);

const useLoadDataEffect = (
  {
    getDataSource,
  }: {
    getDataSource: ({
      shouldReload,
    }: {
      shouldReload: boolean;
    }) => TypeDataSource;
  },
  fn: (
    dataSource: TypeDataSource,
    {
      shouldReload,
    }: {
      shouldReload: boolean;
    }
  ) => Promise<any>,
  { reloadDeps, noReloadDeps }: { reloadDeps: any[]; noReloadDeps: any[] }
) => {
  const prevComputedDepsRef = useRef<any[]>([]);

  const reloadRef = useRef<any[] | undefined>();
  const noReloadRef = useRef<any[] | undefined>();

  const reloadDepsDifferent =
    !reloadRef.current || diff(reloadRef.current!, reloadDeps);

  const noReloadDepsDifferent =
    !noReloadRef.current || diff(noReloadRef.current!, noReloadDeps);

  const depsDifferent = reloadDepsDifferent || noReloadDepsDifferent;
  const shouldReload = reloadDepsDifferent;

  let computedDeps = depsDifferent ? [{}] : prevComputedDepsRef.current;

  let resolveRef = useRef<any>(null);

  let promiseRef = useRef<Promise<any>>(resolved);

  if (depsDifferent) {
    promiseRef.current = new Promise(resolve => {
      resolveRef.current = resolve;
    });
  }

  useLayoutEffect(() => {
    const dataSource = getDataSource({ shouldReload });
    fn(dataSource, { shouldReload }).then(() => {
      if (resolveRef.current) {
        resolveRef.current();
      }
    });
  }, computedDeps);

  reloadRef.current = reloadDeps;
  noReloadRef.current = noReloadDeps;
  prevComputedDepsRef.current = computedDeps;

  return promiseRef.current;
};

export default useLoadDataEffect;
