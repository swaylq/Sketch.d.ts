/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDisabledButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {}
  namespace MSDisabledButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = MSDisabledButtonCell>(): R;
      new: <R = MSDisabledButtonCell>() => R;
    }
  }
}

declare const MSDisabledButtonCell: cocoa.MSDisabledButtonCell.CLASS;
