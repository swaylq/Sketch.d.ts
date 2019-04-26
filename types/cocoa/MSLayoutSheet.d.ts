/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayoutSheet<T0 = void, T1 = void, T2 = void> extends MSGridSheetBase {
    offsetChanged<R = void, P0 = unknown>(_offsetChanged: P0): R;
    centerGrid<R = void, P0 = unknown>(_centerGrid: P0): R;
    setAsDefault<R = void, P0 = unknown>(_setAsDefault: P0): R;
    centerGridButton<R = NSButton>(): R;
    setCenterGridButton<R = void, P0 = NSButton>(_v: P0): R;
  }
  namespace MSLayoutSheet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSGridSheetBase {
      alloc<R = MSLayoutSheet>(): R;
      new: <R = MSLayoutSheet>() => R;
    }
  }
}

declare const MSLayoutSheet: cocoa.MSLayoutSheet.CLASS;
