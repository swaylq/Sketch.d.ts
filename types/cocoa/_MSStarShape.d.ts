/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSStarShape<T0 = void, T1 = void, T2 = void> extends MSShapePathLayer {
    radius<R = number>(): R;
    setRadius<R = void, P0 = number>(_v: P0): R;
    numberOfPoints<R = number>(): R;
    setNumberOfPoints<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSStarShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSShapePathLayer {
      alloc<R = _MSStarShape>(): R;
      new: <R = _MSStarShape>() => R;
    }
  }
}
