/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCachedTableCellView<T0 = void, T1 = void, T2 = void> extends NSControl {
    cachedImage<R = NSImage>(): R;
    setCachedImage<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace NSCachedTableCellView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSControl {
      alloc<R = NSCachedTableCellView>(): R;
      new: <R = NSCachedTableCellView>() => R;
    }
  }
}

declare const NSCachedTableCellView: cocoa.NSCachedTableCellView.CLASS;
