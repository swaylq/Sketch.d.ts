/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDisplayPatternTitleBinder<T0 = void, T1 = void, T2 = void> extends NSDisplayPatternBinder {}
  namespace NSDisplayPatternTitleBinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDisplayPatternBinder {
      alloc<R = NSDisplayPatternTitleBinder>(): R;
      new: <R = NSDisplayPatternTitleBinder>() => R;
    }
  }
}

declare const NSDisplayPatternTitleBinder: cocoa.NSDisplayPatternTitleBinder.CLASS;
