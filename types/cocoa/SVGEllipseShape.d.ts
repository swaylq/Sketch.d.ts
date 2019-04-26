/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGEllipseShape<T0 = void, T1 = void, T2 = void> extends _SVGEllipseShape {}
  namespace SVGEllipseShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _SVGEllipseShape {
      alloc<R = SVGEllipseShape>(): R;
      new: <R = SVGEllipseShape>() => R;
    }
  }
}

declare const SVGEllipseShape: cocoa.SVGEllipseShape.CLASS;
