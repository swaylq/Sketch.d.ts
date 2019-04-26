/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGGradientStop<T0 = void, T1 = void, T2 = void> extends _SVGGradientStop {}
  namespace SVGGradientStop {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _SVGGradientStop {
      alloc<R = SVGGradientStop>(): R;
      new: <R = SVGGradientStop>() => R;
      styleDefaults<R = unknown>(): R;
    }
  }
}

declare const SVGGradientStop: cocoa.SVGGradientStop.CLASS;
