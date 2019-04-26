/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDarkAquaAppearance<T0 = void, T1 = void, T2 = void> extends NSBuiltinAppearance {}
  namespace NSDarkAquaAppearance {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBuiltinAppearance {
      alloc<R = NSDarkAquaAppearance>(): R;
      new: <R = NSDarkAquaAppearance>() => R;
    }
  }
}

declare const NSDarkAquaAppearance: cocoa.NSDarkAquaAppearance.CLASS;
