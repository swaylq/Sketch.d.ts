/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableStarShape<T0 = void, T1 = void, T2 = void> extends MSImmutableShapePathLayer {
    radius<R = number>(): R;
    setRadius<R = void, P0 = number>(_v: P0): R;
    numberOfPoints<R = number>(): R;
    setNumberOfPoints<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSImmutableStarShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableShapePathLayer {
      alloc<R = _MSImmutableStarShape>(): R;
      new: <R = _MSImmutableStarShape>() => R;
    }
  }
}
