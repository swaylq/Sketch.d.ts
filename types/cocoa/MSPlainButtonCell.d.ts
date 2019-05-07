/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPlainButtonCell<T0 = void, T1 = void, T2 = void> extends MSHoverButtonCell {}
  namespace MSPlainButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSHoverButtonCell {
      alloc<R = MSPlainButtonCell>(): R;
      new: <R = MSPlainButtonCell>() => R;
    }
  }
}

declare const MSPlainButtonCell: cocoa.MSPlainButtonCell.CLASS;
