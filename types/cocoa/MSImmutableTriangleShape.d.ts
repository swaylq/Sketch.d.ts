/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableTriangleShape<T0 = void, T1 = void, T2 = void> extends _MSImmutableTriangleShape {}
  namespace MSImmutableTriangleShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableTriangleShape {
      alloc<R = MSImmutableTriangleShape>(): R;
      new: <R = MSImmutableTriangleShape>() => R;
    }
  }
}

declare const MSImmutableTriangleShape: cocoa.MSImmutableTriangleShape.CLASS;
