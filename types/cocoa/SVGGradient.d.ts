/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGGradient<T0 = void, T1 = void, T2 = void> extends _SVGGradient {
    stopsElements<R = unknown>(): R;
    to<R = CGPoint>(): R;
    from<R = CGPoint>(): R;
    setupLinearGradientWithXML<R = void, P0 = unknown>(_setupLinearGradientWithXML: P0): R;
    setupRadialGradientWithXML<R = void, P0 = unknown>(_setupRadialGradientWithXML: P0): R;
    usesAbsoluteUnits<R = boolean>(): R;
  }
  namespace SVGGradient {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _SVGGradient {
      alloc<R = SVGGradient>(): R;
      new: <R = SVGGradient>() => R;
    }
  }
}

declare const SVGGradient: cocoa.SVGGradient.CLASS;
