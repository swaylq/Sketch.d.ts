/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCFilterTextSearchFieldCell<T0 = void, T1 = void, T2 = void> extends NSSearchFieldCell {}
  namespace BCFilterTextSearchFieldCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSearchFieldCell {
      alloc<R = BCFilterTextSearchFieldCell>(): R;
      new: <R = BCFilterTextSearchFieldCell>() => R;
    }
  }
}

declare const BCFilterTextSearchFieldCell: cocoa.BCFilterTextSearchFieldCell.CLASS;
