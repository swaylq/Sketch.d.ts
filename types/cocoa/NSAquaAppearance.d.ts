/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAquaAppearance<T0 = void, T1 = void, T2 = void> extends NSBuiltinAppearance {}
  namespace NSAquaAppearance {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBuiltinAppearance {
      alloc<R = NSAquaAppearance>(): R;
      new: <R = NSAquaAppearance>() => R;
    }
  }
}

declare const NSAquaAppearance: cocoa.NSAquaAppearance.CLASS;
