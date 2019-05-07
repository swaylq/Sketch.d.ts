/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGPolygonShape<T0 = void, T1 = void, T2 = void> extends SVGPathShape {}
  namespace _SVGPolygonShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends SVGPathShape {
      alloc<R = _SVGPolygonShape>(): R;
      new: <R = _SVGPolygonShape>() => R;
    }
  }
}
