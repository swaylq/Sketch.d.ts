/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSClosePathChange<T0 = void, T1 = void, T2 = void> extends MSShapeChange {
    titleForContext<R = unknown, P0 = unknown>(_titleForContext: P0): R;
    validateWithContext<R = boolean, P0 = unknown>(_validateWithContext: P0): R;
    pathByOpeningOrClosingPath_close<R = unknown, P0 = unknown, P1 = boolean>(_pathByOpeningOrClosingPath: P0, _close: P1): R;
  }
  namespace MSClosePathChange {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSShapeChange {
      alloc<R = MSClosePathChange>(): R;
      new: <R = MSClosePathChange>() => R;
      toggleClosePath<R = unknown>(): R;
    }
  }
}

declare const MSClosePathChange: cocoa.MSClosePathChange.CLASS;
