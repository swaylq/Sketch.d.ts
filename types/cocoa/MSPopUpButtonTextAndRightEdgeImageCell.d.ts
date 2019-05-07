/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPopUpButtonTextAndRightEdgeImageCell<T0 = void, T1 = void, T2 = void> extends NSPopUpButtonCell {
    cxx_destruct<R = void>(): R;
    rightEdgeImage<R = NSImage>(): R;
    setRightEdgeImage<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace MSPopUpButtonTextAndRightEdgeImageCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPopUpButtonCell {
      alloc<R = MSPopUpButtonTextAndRightEdgeImageCell>(): R;
      new: <R = MSPopUpButtonTextAndRightEdgeImageCell>() => R;
    }
  }
}

declare const MSPopUpButtonTextAndRightEdgeImageCell: cocoa.MSPopUpButtonTextAndRightEdgeImageCell.CLASS;
