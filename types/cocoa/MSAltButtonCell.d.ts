/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAltButtonCell<T0 = void, T1 = void, T2 = void> extends MSHoverButtonCell {}
  namespace MSAltButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSHoverButtonCell {
      alloc<R = MSAltButtonCell>(): R;
      new: <R = MSAltButtonCell>() => R;
    }
  }
}

declare const MSAltButtonCell: cocoa.MSAltButtonCell.CLASS;
