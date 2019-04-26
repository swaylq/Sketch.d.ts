/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertSymbolAction<T0 = void, T1 = void, T2 = void> extends MSSharedSymbolAction {
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
  }
  namespace MSInsertSymbolAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSharedSymbolAction {
      alloc<R = MSInsertSymbolAction>(): R;
      new: <R = MSInsertSymbolAction>() => R;
    }
  }
}

declare const MSInsertSymbolAction: cocoa.MSInsertSymbolAction.CLASS;
