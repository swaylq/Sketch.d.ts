/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGridSheet<T0 = void, T1 = void, T2 = void> extends MSGridSheetBase {
    setAsDefault<R = void, P0 = unknown>(_setAsDefault: P0): R;
  }
  namespace MSGridSheet {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSGridSheetBase {
      alloc<R = MSGridSheet>(): R;
      new: <R = MSGridSheet>() => R;
    }
  }
}

declare const MSGridSheet: cocoa.MSGridSheet.CLASS;
