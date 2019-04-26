/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSourceListBackgroundView<T0 = void, T1 = void, T2 = void> extends NSView {
    _cuiOptions<R = unknown>(): R;
    isOpaque<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
  }
  namespace NSSourceListBackgroundView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSSourceListBackgroundView>(): R;
      new: <R = NSSourceListBackgroundView>() => R;
    }
  }
}

declare const NSSourceListBackgroundView: cocoa.NSSourceListBackgroundView.CLASS;
