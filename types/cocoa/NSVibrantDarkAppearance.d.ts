/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVibrantDarkAppearance<T0 = void, T1 = void, T2 = void> extends NSBuiltinAppearance {}
  namespace NSVibrantDarkAppearance {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBuiltinAppearance {
      alloc<R = NSVibrantDarkAppearance>(): R;
      new: <R = NSVibrantDarkAppearance>() => R;
    }
  }
}

declare const NSVibrantDarkAppearance: cocoa.NSVibrantDarkAppearance.CLASS;
