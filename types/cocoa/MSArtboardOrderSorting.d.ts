/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardOrderSorting<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSArtboardOrderSorting {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSArtboardOrderSorting>(): R;
      new: <R = MSArtboardOrderSorting>() => R;
      sortArtboardsInDefaultOrder<R = unknown, P0 = unknown>(_sortArtboardsInDefaultOrder: P0): R;
      sortArtboards_inOrder<R = unknown, P0 = unknown, P1 = number>(_sortArtboards: P0, _inOrder: P1): R;
    }
  }
}

declare const MSArtboardOrderSorting: cocoa.MSArtboardOrderSorting.CLASS;
