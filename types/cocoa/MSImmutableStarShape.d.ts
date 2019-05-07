/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableStarShape<T0 = void, T1 = void, T2 = void> extends _MSImmutableStarShape {}
  namespace MSImmutableStarShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableStarShape {
      alloc<R = MSImmutableStarShape>(): R;
      new: <R = MSImmutableStarShape>() => R;
    }
  }
}

declare const MSImmutableStarShape: cocoa.MSImmutableStarShape.CLASS;
