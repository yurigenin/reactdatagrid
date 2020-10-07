/**
 * Copyright (c) INOVUA SOFTWARE TECHNOLOGIES.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type TypeSingleFilterValue = {
  name: string;
  type: string;
  operator: string;
  value: any;
  emptyValue?: any;
  fn?: (arg: any) => any;
  getFilterValue?: Function;
};

export type TypeFilterValue = TypeSingleFilterValue[] | null;
export default TypeFilterValue;

export type TypeFilterOperator = {
  name: string;
  fn: (
    { value, filterValue, data }: { value: any; filterValue: any; data: any }
  ) => boolean;
  filterOnEmptyValue?: boolean;
  valueOnOperatorSelect?: any;
  disableFilterEditor?: boolean;
};

export type TypeFilterType = {
  type: string;
  emptyValue: any;
  operators: TypeFilterOperator[];
};

export type TypeFilterTypes = {
  [key: string]: TypeFilterType;
};
