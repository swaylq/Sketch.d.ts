/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableShapePath<T0 = void, T1 = void, T2 = void> extends _MSImmutableShapePath {}
  namespace MSImmutableShapePath {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableShapePath {
      alloc<R = MSImmutableShapePath>(): R;
      new: <R = MSImmutableShapePath>() => R;
    }
  }
}

declare const MSImmutableShapePath: cocoa.MSImmutableShapePath.CLASS;
