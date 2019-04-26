/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBackToInstanceAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    backToInstance<R = void, P0 = unknown>(_backToInstance: P0): R;
  }
  namespace MSBackToInstanceAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSBackToInstanceAction>(): R;
      new: <R = MSBackToInstanceAction>() => R;
    }
  }
}

declare const MSBackToInstanceAction: cocoa.MSBackToInstanceAction.CLASS;
