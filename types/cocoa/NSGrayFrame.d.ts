/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGrayFrame<T0 = void, T1 = void, T2 = void> extends NSThemeFrame {}
  namespace NSGrayFrame {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSThemeFrame {
      alloc<R = NSGrayFrame>(): R;
      new: <R = NSGrayFrame>() => R;
    }
  }
}

declare const NSGrayFrame: cocoa.NSGrayFrame.CLASS;
