/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNextPageAction<T0 = void, T1 = void, T2 = void> extends MSChangePageAction {
    label<R = unknown>(): R;
    nextPage<R = void, P0 = unknown>(_nextPage: P0): R;
  }
  namespace MSNextPageAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSChangePageAction {
      alloc<R = MSNextPageAction>(): R;
      new: <R = MSNextPageAction>() => R;
    }
  }
}

declare const MSNextPageAction: cocoa.MSNextPageAction.CLASS;
