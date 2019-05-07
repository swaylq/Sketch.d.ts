/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutablePolygonShape<T0 = void, T1 = void, T2 = void> extends MSImmutableShapePathLayer {
    numberOfPoints<R = number>(): R;
    setNumberOfPoints<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSImmutablePolygonShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableShapePathLayer {
      alloc<R = _MSImmutablePolygonShape>(): R;
      new: <R = _MSImmutablePolygonShape>() => R;
    }
  }
}
