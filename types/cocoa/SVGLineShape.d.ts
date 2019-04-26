/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGLineShape<T0 = void, T1 = void, T2 = void> extends _SVGLineShape {}
  namespace SVGLineShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _SVGLineShape {
      alloc<R = SVGLineShape>(): R;
      new: <R = SVGLineShape>() => R;
    }
  }
}

declare const SVGLineShape: cocoa.SVGLineShape.CLASS;
