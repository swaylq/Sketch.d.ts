/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInputContext<T0 = void, T1 = void, T2 = void> extends NSTextInputContext {}
  namespace NSInputContext {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextInputContext {
      alloc<R = NSInputContext>(): R;
      new: <R = NSInputContext>() => R;
    }
  }
}

declare const NSInputContext: cocoa.NSInputContext.CLASS;
