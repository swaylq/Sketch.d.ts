/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImageCacheView<T0 = void, T1 = void, T2 = void> extends NSView {
    isOpaque<R = boolean>(): R;
    isFlipped<R = boolean>(): R;
    bounds<R = CGRect>(): R;
    frame<R = CGRect>(): R;
  }
  namespace NSImageCacheView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSImageCacheView>(): R;
      new: <R = NSImageCacheView>() => R;
    }
  }
}

declare const NSImageCacheView: cocoa.NSImageCacheView.CLASS;
