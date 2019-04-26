/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShapePath<T0 = void, T1 = void, T2 = void> extends _MSShapePath {}
  namespace MSShapePath {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSShapePath {
      alloc<R = MSShapePath>(): R;
      new: <R = MSShapePath>() => R;
    }
  }
}

declare const MSShapePath: cocoa.MSShapePath.CLASS;
