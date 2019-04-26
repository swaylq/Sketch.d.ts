/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDefaultLayoutGrid<T0 = void, T1 = void, T2 = void> extends MSDefaultArchive {
    setting<R = unknown>(): R;
  }
  namespace MSDefaultLayoutGrid {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDefaultArchive {
      setDefaultLayout<R = void, P0 = unknown>(_setDefaultLayout: P0): R;
      defaultLayout<R = unknown>(): R;
    }
  }
}

declare const MSDefaultLayoutGrid: cocoa.MSDefaultLayoutGrid.CLASS;
