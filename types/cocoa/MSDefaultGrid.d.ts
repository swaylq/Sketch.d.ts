/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDefaultGrid<T0 = void, T1 = void, T2 = void> extends MSDefaultArchive {
    setting<R = unknown>(): R;
  }
  namespace MSDefaultGrid {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDefaultArchive {
      setDefaultGrid<R = void, P0 = unknown>(_setDefaultGrid: P0): R;
      defaultGrid<R = unknown>(): R;
    }
  }
}

declare const MSDefaultGrid: cocoa.MSDefaultGrid.CLASS;
