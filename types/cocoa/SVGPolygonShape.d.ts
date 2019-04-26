/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGPolygonShape<T0 = void, T1 = void, T2 = void> extends _SVGPolygonShape {}
  namespace SVGPolygonShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _SVGPolygonShape {
      alloc<R = SVGPolygonShape>(): R;
      new: <R = SVGPolygonShape>() => R;
    }
  }
}

declare const SVGPolygonShape: cocoa.SVGPolygonShape.CLASS;
