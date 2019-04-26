/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGRectangleShape<T0 = void, T1 = void, T2 = void> extends _SVGRectangleShape {}
  namespace SVGRectangleShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _SVGRectangleShape {
      alloc<R = SVGRectangleShape>(): R;
      new: <R = SVGRectangleShape>() => R;
    }
  }
}

declare const SVGRectangleShape: cocoa.SVGRectangleShape.CLASS;
