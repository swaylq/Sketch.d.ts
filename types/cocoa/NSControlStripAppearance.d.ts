/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSControlStripAppearance<T0 = void, T1 = void, T2 = void> extends NSBuiltinAppearance {}
  namespace NSControlStripAppearance {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBuiltinAppearance {
      alloc<R = NSControlStripAppearance>(): R;
      new: <R = NSControlStripAppearance>() => R;
    }
  }
}

declare const NSControlStripAppearance: cocoa.NSControlStripAppearance.CLASS;
