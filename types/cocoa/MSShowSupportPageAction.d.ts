/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShowSupportPageAction<T0 = void, T1 = void, T2 = void> extends MSAction {
    label<R = unknown>(): R;
    showSupportPage<R = void, P0 = unknown>(_showSupportPage: P0): R;
  }
  namespace MSShowSupportPageAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAction {
      alloc<R = MSShowSupportPageAction>(): R;
      new: <R = MSShowSupportPageAction>() => R;
    }
  }
}

declare const MSShowSupportPageAction: cocoa.MSShowSupportPageAction.CLASS;
