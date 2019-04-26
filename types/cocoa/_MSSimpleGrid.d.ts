/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSSimpleGrid<T0 = void, T1 = void, T2 = void> extends MSBaseGrid {
    thickGridTimes<R = number>(): R;
    setThickGridTimes<R = void, P0 = number>(_v: P0): R;
    gridSize<R = number>(): R;
    setGridSize<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSSimpleGrid {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseGrid {
      alloc<R = _MSSimpleGrid>(): R;
      new: <R = _MSSimpleGrid>() => R;
    }
  }
}
