/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayoutGrid<T0 = void, T1 = void, T2 = void> extends _MSLayoutGrid {
    setColumnWidth<R = void, P0 = number>(_setColumnWidth: P0): R;
    setGutterWidth<R = void, P0 = number>(_setGutterWidth: P0): R;
    totalNumberOfGutters<R = number>(): R;
    setGuttersOutside<R = void, P0 = boolean>(_setGuttersOutside: P0): R;
    setTotalWidth<R = void, P0 = number>(_setTotalWidth: P0): R;
    setNumberOfColumns<R = void, P0 = number>(_setNumberOfColumns: P0): R;
    determineAppropriateColumnWidth<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    // + MSLayoutGrid(Guides): 
    verticalGuidesForRulerData_inRect<R = unknown, P0 = unknown, P1 = CGRect>(_verticalGuidesForRulerData: P0, _inRect: P1): R;
    horizontalGuidesForRulerData_inRect<R = unknown, P0 = unknown, P1 = CGRect>(_horizontalGuidesForRulerData: P0, _inRect: P1): R;
  }
  namespace MSLayoutGrid {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSLayoutGrid {
      alloc<R = MSLayoutGrid>(): R;
      new: <R = MSLayoutGrid>() => R;
  
  }
  }
}

declare const MSLayoutGrid: cocoa.MSLayoutGrid.CLASS;
