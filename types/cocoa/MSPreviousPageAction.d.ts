/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPreviousPageAction<T0 = void, T1 = void, T2 = void> extends MSChangePageAction {
    label<R = unknown>(): R;
    previousPage<R = void, P0 = unknown>(_previousPage: P0): R;
  }
  namespace MSPreviousPageAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSChangePageAction {
      alloc<R = MSPreviousPageAction>(): R;
      new: <R = MSPreviousPageAction>() => R;
    }
  }
}

declare const MSPreviousPageAction: cocoa.MSPreviousPageAction.CLASS;
