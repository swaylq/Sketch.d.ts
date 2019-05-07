/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDeleteAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    delete<R = void, P0 = unknown>(_delete: P0): R;
  }
  namespace MSDeleteAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSDeleteAction>(): R;
      new: <R = MSDeleteAction>() => R;
    }
  }
}

declare const MSDeleteAction: cocoa.MSDeleteAction.CLASS;
