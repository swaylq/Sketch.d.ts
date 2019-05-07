/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableTriangleShape<T0 = void, T1 = void, T2 = void> extends MSImmutableShapePathLayer {
    isEquilateral<R = boolean>(): R;
    setIsEquilateral<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace _MSImmutableTriangleShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableShapePathLayer {
      alloc<R = _MSImmutableTriangleShape>(): R;
      new: <R = _MSImmutableTriangleShape>() => R;
    }
  }
}
