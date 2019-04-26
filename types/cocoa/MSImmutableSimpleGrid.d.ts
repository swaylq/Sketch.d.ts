/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableSimpleGrid<T0 = void, T1 = void, T2 = void> extends _MSImmutableSimpleGrid {}
  namespace MSImmutableSimpleGrid {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableSimpleGrid {
      alloc<R = MSImmutableSimpleGrid>(): R;
      new: <R = MSImmutableSimpleGrid>() => R;
    }
  }
}

declare const MSImmutableSimpleGrid: cocoa.MSImmutableSimpleGrid.CLASS;
