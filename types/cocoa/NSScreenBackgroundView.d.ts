/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScreenBackgroundView<T0 = void, T1 = void, T2 = void> extends NSView {
    wantsUpdateLayer<R = boolean>(): R;
    _createUnderDesktopCUIOptionsDictionary<R = __CFDictionary>(): R;
    isOpaque<R = boolean>(): R;
  }
  namespace NSScreenBackgroundView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSScreenBackgroundView>(): R;
      new: <R = NSScreenBackgroundView>() => R;
    }
  }
}

declare const NSScreenBackgroundView: cocoa.NSScreenBackgroundView.CLASS;
