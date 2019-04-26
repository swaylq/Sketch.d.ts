/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSZoomPopUpButtonCell<T0 = void, T1 = void, T2 = void> extends NSPopUpButtonCell {}
  namespace MSZoomPopUpButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPopUpButtonCell {
      alloc<R = MSZoomPopUpButtonCell>(): R;
      new: <R = MSZoomPopUpButtonCell>() => R;
    }
  }
}

declare const MSZoomPopUpButtonCell: cocoa.MSZoomPopUpButtonCell.CLASS;
