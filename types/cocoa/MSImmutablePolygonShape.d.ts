/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutablePolygonShape<T0 = void, T1 = void, T2 = void> extends _MSImmutablePolygonShape {}
  namespace MSImmutablePolygonShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutablePolygonShape {
      alloc<R = MSImmutablePolygonShape>(): R;
      new: <R = MSImmutablePolygonShape>() => R;
    }
  }
}

declare const MSImmutablePolygonShape: cocoa.MSImmutablePolygonShape.CLASS;
