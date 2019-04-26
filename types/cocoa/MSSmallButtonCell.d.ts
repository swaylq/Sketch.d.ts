/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSmallButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {}
  namespace MSSmallButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = MSSmallButtonCell>(): R;
      new: <R = MSSmallButtonCell>() => R;
    }
  }
}

declare const MSSmallButtonCell: cocoa.MSSmallButtonCell.CLASS;
