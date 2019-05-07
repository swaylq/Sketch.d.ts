/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugAppearance<T0 = void, T1 = void, T2 = void> extends NSAquaAppearance {}
  namespace NSDebugAppearance {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAquaAppearance {
      alloc<R = NSDebugAppearance>(): R;
      new: <R = NSDebugAppearance>() => R;
    }
  }
}

declare const NSDebugAppearance: cocoa.NSDebugAppearance.CLASS;
