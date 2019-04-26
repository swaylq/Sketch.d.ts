/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableSimpleGrid<T0 = void, T1 = void, T2 = void> extends MSImmutableBaseGrid {
    thickGridTimes<R = number>(): R;
    setThickGridTimes<R = void, P0 = number>(_v: P0): R;
    gridSize<R = number>(): R;
    setGridSize<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSImmutableSimpleGrid {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableBaseGrid {
      alloc<R = _MSImmutableSimpleGrid>(): R;
      new: <R = _MSImmutableSimpleGrid>() => R;
    }
  }
}
