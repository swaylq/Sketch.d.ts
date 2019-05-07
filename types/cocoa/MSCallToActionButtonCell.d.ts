/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCallToActionButtonCell<T0 = void, T1 = void, T2 = void> extends MSHoverButtonCell {}
  namespace MSCallToActionButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSHoverButtonCell {
      alloc<R = MSCallToActionButtonCell>(): R;
      new: <R = MSCallToActionButtonCell>() => R;
    }
  }
}

declare const MSCallToActionButtonCell: cocoa.MSCallToActionButtonCell.CLASS;
