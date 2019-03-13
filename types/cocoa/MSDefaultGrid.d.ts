/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDefaultGrid<T = any> extends MSDefaultArchive {
    setting<R = unknown>(): R;
  }
  namespace classes {
    export interface MSDefaultGrid<T = any> extends MSDefaultArchive {
      setDefaultGrid<R = void, P0 = unknown>(_setDefaultGrid: P0): R;
      defaultGrid<R = unknown>(): R;
    }
  }
}

declare const MSDefaultGrid: cocoa.classes.MSDefaultGrid;