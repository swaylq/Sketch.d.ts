/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableLayoutGrid<T0 = void, T1 = void, T2 = void> extends _MSImmutableLayoutGrid {}
  namespace MSImmutableLayoutGrid {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableLayoutGrid {
      alloc<R = MSImmutableLayoutGrid>(): R;
      new: <R = MSImmutableLayoutGrid>() => R;
    }
  }
}

declare const MSImmutableLayoutGrid: cocoa.MSImmutableLayoutGrid.CLASS;
