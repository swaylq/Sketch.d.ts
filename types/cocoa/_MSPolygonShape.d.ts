/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSPolygonShape<T0 = void, T1 = void, T2 = void> extends MSShapePathLayer {
    numberOfPoints<R = number>(): R;
    setNumberOfPoints<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSPolygonShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSShapePathLayer {
      alloc<R = _MSPolygonShape>(): R;
      new: <R = _MSPolygonShape>() => R;
    }
  }
}
