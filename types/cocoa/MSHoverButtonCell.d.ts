/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHoverButtonCell<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
    imageFromImage_withState_hovering<R = unknown, P0 = unknown, P1 = number, P2 = boolean>(_imageFromImage: P0, _withState: P1, _hovering: P2): R;
  }
  namespace MSHoverButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButtonCell {
      alloc<R = MSHoverButtonCell>(): R;
      new: <R = MSHoverButtonCell>() => R;
    }
  }
}

declare const MSHoverButtonCell: cocoa.MSHoverButtonCell.CLASS;
