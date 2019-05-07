/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSystemAppearance<T0 = void, T1 = void, T2 = void> extends NSBuiltinAppearance {}
  namespace NSSystemAppearance {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBuiltinAppearance {
      alloc<R = NSSystemAppearance>(): R;
      new: <R = NSSystemAppearance>() => R;
    }
  }
}

declare const NSSystemAppearance: cocoa.NSSystemAppearance.CLASS;
