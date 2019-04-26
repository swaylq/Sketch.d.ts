/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGMask<T0 = void, T1 = void, T2 = void> extends _SVGMask {}
  namespace SVGMask {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _SVGMask {
      alloc<R = SVGMask>(): R;
      new: <R = SVGMask>() => R;
    }
  }
}

declare const SVGMask: cocoa.SVGMask.CLASS;
