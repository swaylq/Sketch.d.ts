/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSTriangleShape<T0 = void, T1 = void, T2 = void> extends MSShapePathLayer {
    isEquilateral<R = boolean>(): R;
    setIsEquilateral<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _MSTriangleShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSShapePathLayer {
      alloc<R = _MSTriangleShape>(): R;
      new: <R = _MSTriangleShape>() => R;
    }
  }
}
