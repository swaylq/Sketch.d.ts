/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBuiltinAppearance<T0 = void, T1 = void, T2 = void> extends NSAppearance {
    name<R = unknown>(): R;
    initWithBundleResourceName_publicName<R = unknown, P0 = unknown, P1 = unknown>(_initWithBundleResourceName: P0, _publicName: P1): R;
  }
  namespace NSBuiltinAppearance {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAppearance {
      alloc<R = NSBuiltinAppearance>(): R;
      new: <R = NSBuiltinAppearance>() => R;
    }
  }
}

declare const NSBuiltinAppearance: cocoa.NSBuiltinAppearance.CLASS;
