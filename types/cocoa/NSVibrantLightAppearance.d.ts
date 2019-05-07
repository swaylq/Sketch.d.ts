/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVibrantLightAppearance<T0 = void, T1 = void, T2 = void> extends NSBuiltinAppearance {}
  namespace NSVibrantLightAppearance {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBuiltinAppearance {
      alloc<R = NSVibrantLightAppearance>(): R;
      new: <R = NSVibrantLightAppearance>() => R;
    }
  }
}

declare const NSVibrantLightAppearance: cocoa.NSVibrantLightAppearance.CLASS;
