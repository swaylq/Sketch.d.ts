/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSContentAppearance<T0 = void, T1 = void, T2 = void> extends NSAppearance {}
  namespace NSContentAppearance {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAppearance {
      alloc<R = NSContentAppearance>(): R;
      new: <R = NSContentAppearance>() => R;
    }
  }
}

declare const NSContentAppearance: cocoa.NSContentAppearance.CLASS;
