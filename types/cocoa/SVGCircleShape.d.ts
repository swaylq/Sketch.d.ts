/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGCircleShape<T0 = void, T1 = void, T2 = void> extends _SVGCircleShape {}
  namespace SVGCircleShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _SVGCircleShape {
      alloc<R = SVGCircleShape>(): R;
      new: <R = SVGCircleShape>() => R;
    }
  }
}

declare const SVGCircleShape: cocoa.SVGCircleShape.CLASS;
