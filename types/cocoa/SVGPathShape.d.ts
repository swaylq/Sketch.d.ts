/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGPathShape<T0 = void, T1 = void, T2 = void> extends _SVGPathShape {
    processPath<R = void, P0 = unknown>(_processPath: P0): R;
  }
  namespace SVGPathShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _SVGPathShape {
      alloc<R = SVGPathShape>(): R;
      new: <R = SVGPathShape>() => R;
    }
  }
}

declare const SVGPathShape: cocoa.SVGPathShape.CLASS;
