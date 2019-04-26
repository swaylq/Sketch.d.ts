/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSChangePageAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    changePageIndexBy<R = void, P0 = number>(_changePageIndexBy: P0): R;
    validate<R = boolean>(): R;
  }
  namespace MSChangePageAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSChangePageAction>(): R;
      new: <R = MSChangePageAction>() => R;
    }
  }
}

declare const MSChangePageAction: cocoa.MSChangePageAction.CLASS;
