/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRightOffsetHoverButtonCell<T0 = void, T1 = void, T2 = void> extends MSHoverButtonCell {}
  namespace MSRightOffsetHoverButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSHoverButtonCell {
      alloc<R = MSRightOffsetHoverButtonCell>(): R;
      new: <R = MSRightOffsetHoverButtonCell>() => R;
    }
  }
}

declare const MSRightOffsetHoverButtonCell: cocoa.MSRightOffsetHoverButtonCell.CLASS;
