/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSquareButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {}
  namespace MSSquareButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = MSSquareButtonCell>(): R;
      new: <R = MSSquareButtonCell>() => R;
    }
  }
}

declare const MSSquareButtonCell: cocoa.MSSquareButtonCell.CLASS;
