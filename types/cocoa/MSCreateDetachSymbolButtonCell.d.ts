/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCreateDetachSymbolButtonCell<T0 = void, T1 = void, T2 = void> extends MSHoverButtonCell {
    cxx_destruct<R = void>(): R;
    artboardPreviewImage<R = NSImage>(): R;
    setArtboardPreviewImage<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace MSCreateDetachSymbolButtonCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSHoverButtonCell {
      alloc<R = MSCreateDetachSymbolButtonCell>(): R;
      new: <R = MSCreateDetachSymbolButtonCell>() => R;
    }
  }
}

declare const MSCreateDetachSymbolButtonCell: cocoa.MSCreateDetachSymbolButtonCell.CLASS;
