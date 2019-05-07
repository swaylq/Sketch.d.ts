/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverlayButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {}
  namespace MSOverlayButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = MSOverlayButtonCell>(): R;
      new: <R = MSOverlayButtonCell>() => R;
    }
  }
}

declare const MSOverlayButtonCell: cocoa.MSOverlayButtonCell.CLASS;
