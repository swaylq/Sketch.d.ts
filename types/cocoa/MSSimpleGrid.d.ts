/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSimpleGrid<T = any> extends cocoa._MSSimpleGrid {}
  namespace classes {
    export interface MSSimpleGrid<T = any> extends cocoa.classes._MSSimpleGrid {
      alloc<R = MSSimpleGrid>(): R;
      new: <R = MSSimpleGrid>() => R;
    }
  }
}

declare const MSSimpleGrid: cocoa.classes.MSSimpleGrid;
