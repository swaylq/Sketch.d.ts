/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableDeleteScanLineView<T0 = void, T1 = void, T2 = void> extends NSView {
    wantsUpdateLayer<R = boolean>(): R;
    deleteLineColor<R = NSColor>(): R;
    setDeleteLineColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace NSTableDeleteScanLineView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSTableDeleteScanLineView>(): R;
      new: <R = NSTableDeleteScanLineView>() => R;
    }
  }
}

declare const NSTableDeleteScanLineView: cocoa.NSTableDeleteScanLineView.CLASS;
