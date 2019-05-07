/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReduceFileSizeAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    reduceFileSize<R = void, P0 = unknown>(_reduceFileSize: P0): R;
  }
  namespace MSReduceFileSizeAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSReduceFileSizeAction>(): R;
      new: <R = MSReduceFileSizeAction>() => R;
    }
  }
}

declare const MSReduceFileSizeAction: cocoa.MSReduceFileSizeAction.CLASS;
