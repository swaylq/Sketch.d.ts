/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNewPageAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    historyMomentTitle<R = unknown>(): R;
    preferredMenuAction<R = string>(): R;
    addNewPage<R = void, P0 = unknown>(_addNewPage: P0): R;
  }
  namespace MSNewPageAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSNewPageAction>(): R;
      new: <R = MSNewPageAction>() => R;
    }
  }
}

declare const MSNewPageAction: cocoa.MSNewPageAction.CLASS;
