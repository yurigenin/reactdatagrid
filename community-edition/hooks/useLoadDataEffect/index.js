/**
 * Copyright (c) INOVUA SOFTWARE TECHNOLOGIES.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useLayoutEffect, useRef } from 'react';
const diff = (a1, a2) => {
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
const useLoadDataEffect = ({ getDataSource, }, fn, { reloadDeps, noReloadDeps }) => {
    const prevComputedDepsRef = useRef([]);
    const reloadRef = useRef();
    const noReloadRef = useRef();
    const reloadDepsDifferent = !reloadRef.current || diff(reloadRef.current, reloadDeps);
    const noReloadDepsDifferent = !noReloadRef.current || diff(noReloadRef.current, noReloadDeps);
    const depsDifferent = reloadDepsDifferent || noReloadDepsDifferent;
    const shouldReload = reloadDepsDifferent;
    let shouldReloadRef = useRef(false);
    let computedDeps = depsDifferent ? [{}] : prevComputedDepsRef.current;
    let resolveRef = useRef(null);
    let promiseRef = useRef(resolved);
    if (depsDifferent) {
        shouldReloadRef.current = shouldReload;
        promiseRef.current = new Promise(resolve => {
            resolveRef.current = resolve;
        });
    }
    useLayoutEffect(() => {
        const reload = shouldReloadRef.current;
        const dataSource = getDataSource({ shouldReload: reload });
        fn(dataSource, { shouldReload: reload }).then(() => {
            if (resolveRef.current) {
                resolveRef.current();
            }
        });
        shouldReloadRef.current = shouldReload;
    }, computedDeps);
    reloadRef.current = reloadDeps;
    noReloadRef.current = noReloadDeps;
    prevComputedDepsRef.current = computedDeps;
    return promiseRef.current;
};
export default useLoadDataEffect;
