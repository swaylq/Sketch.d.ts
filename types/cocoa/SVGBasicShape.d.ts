/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SVGBasicShape<T0 = void, T1 = void, T2 = void> extends _SVGBasicShape {
    shapeGroupForLayer<R = unknown, P0 = unknown>(_shapeGroupForLayer: P0): R;
  }
  namespace SVGBasicShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _SVGBasicShape {
      alloc<R = SVGBasicShape>(): R;
      new: <R = SVGBasicShape>() => R;
    }
  }
}

declare const SVGBasicShape: cocoa.SVGBasicShape.CLASS;
