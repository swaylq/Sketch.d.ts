/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSelectAllAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    selectAll<R = void, P0 = unknown>(_selectAll: P0): R;
    validate<R = boolean>(): R;
  }
  namespace MSSelectAllAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSSelectAllAction>(): R;
      new: <R = MSSelectAllAction>() => R;
    }
  }
}

declare const MSSelectAllAction: cocoa.MSSelectAllAction.CLASS;
