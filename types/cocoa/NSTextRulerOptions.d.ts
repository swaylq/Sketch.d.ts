/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextRulerOptions<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSTextRulerOptions {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTextRulerOptions>(): R;
      new: <R = NSTextRulerOptions>() => R;
      sharedTextRulerOptions<R = unknown>(): R;
    }
  }
}

declare const NSTextRulerOptions: cocoa.NSTextRulerOptions.CLASS;
