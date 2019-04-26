/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSRectangleShape<T0 = void, T1 = void, T2 = void> extends MSShapePathLayer {
    hasConvertedToNewRoundCorners<R = boolean>(): R;
    setHasConvertedToNewRoundCorners<R = void, P0 = boolean>(_v: P0): R;
    fixedRadius<R = number>(): R;
    setFixedRadius<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSRectangleShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSShapePathLayer {
      alloc<R = _MSRectangleShape>(): R;
      new: <R = _MSRectangleShape>() => R;
    }
  }
}
