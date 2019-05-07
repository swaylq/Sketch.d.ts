/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMediumLightAppearance<T0 = void, T1 = void, T2 = void> extends NSBuiltinAppearance {}
  namespace NSMediumLightAppearance {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBuiltinAppearance {
      alloc<R = NSMediumLightAppearance>(): R;
      new: <R = NSMediumLightAppearance>() => R;
    }
  }
}

declare const NSMediumLightAppearance: cocoa.NSMediumLightAppearance.CLASS;
