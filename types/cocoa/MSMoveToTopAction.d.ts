/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMoveToTopAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    moveToTop<R = void, P0 = unknown>(_moveToTop: P0): R;
  }
  namespace MSMoveToTopAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSMoveToTopAction>(): R;
      new: <R = MSMoveToTopAction>() => R;
    }
  }
}

declare const MSMoveToTopAction: cocoa.MSMoveToTopAction.CLASS;
