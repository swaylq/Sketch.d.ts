/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSimpleGrid<T0 = void, T1 = void, T2 = void> extends _MSSimpleGrid {
    // + MSSimpleGrid(Guides): 
    verticalGuidesForRulerData_inRect<R = unknown, P0 = unknown, P1 = CGRect>(_verticalGuidesForRulerData: P0, _inRect: P1): R;
    horizontalGuidesForRulerData_inRect<R = unknown, P0 = unknown, P1 = CGRect>(_horizontalGuidesForRulerData: P0, _inRect: P1): R;
  }
  namespace MSSimpleGrid {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSSimpleGrid {
      alloc<R = MSSimpleGrid>(): R;
      new: <R = MSSimpleGrid>() => R;
  
  }
  }
}

declare const MSSimpleGrid: cocoa.MSSimpleGrid.CLASS;
