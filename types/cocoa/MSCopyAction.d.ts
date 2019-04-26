/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCopyAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    copy<R = void, P0 = unknown>(_copy: P0): R;
  }
  namespace MSCopyAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSCopyAction>(): R;
      new: <R = MSCopyAction>() => R;
    }
  }
}

declare const MSCopyAction: cocoa.MSCopyAction.CLASS;
