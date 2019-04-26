/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableBaseGrid<T0 = void, T1 = void, T2 = void> extends _MSImmutableBaseGrid {
    shouldDrawAtZoom<R = boolean, P0 = number>(_shouldDrawAtZoom: P0): R;
    forceDraw<R = boolean>(): R;
    setForceDraw<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSImmutableBaseGrid {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableBaseGrid {
      alloc<R = MSImmutableBaseGrid>(): R;
      new: <R = MSImmutableBaseGrid>() => R;
      displayableAtZoom<R = boolean, P0 = number>(_displayableAtZoom: P0): R;
      initialize<R = void>(): R;
    }
  }
}

declare const MSImmutableBaseGrid: cocoa.MSImmutableBaseGrid.CLASS;
