/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCutAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    cut<R = void, P0 = unknown>(_cut: P0): R;
  }
  namespace MSCutAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSCutAction>(): R;
      new: <R = MSCutAction>() => R;
    }
  }
}

declare const MSCutAction: cocoa.MSCutAction.CLASS;
